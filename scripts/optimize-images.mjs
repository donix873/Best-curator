import { mkdir, readdir } from 'node:fs/promises'
import { extname, join, parse, relative } from 'node:path'
import sharp from 'sharp'

const projectRoot = new URL('..', import.meta.url).pathname
const sourceRoot = join(projectRoot, 'source-materials')
const outputRoot = join(projectRoot, 'public', 'images', 'optimized')
const supported = new Set(['.jpg', '.jpeg', '.png', '.webp', '.heic', '.heif', '.tif', '.tiff'])

async function listImages(directory) {
  const entries = await readdir(directory, { withFileTypes: true })
  const files = await Promise.all(entries.map(async (entry) => {
    const path = join(directory, entry.name)
    return entry.isDirectory() ? listImages(path) : [path]
  }))
  return files.flat().filter((path) => supported.has(extname(path).toLowerCase()))
}

await mkdir(sourceRoot, { recursive: true })
await mkdir(outputRoot, { recursive: true })

const images = await listImages(sourceRoot)
if (!images.length) {
  console.log('No source images found. Originals can be added to source-materials/.')
  process.exit(0)
}

for (const source of images) {
  const relativePath = relative(sourceRoot, source)
  const parsed = parse(relativePath)
  const safeName = join(parsed.dir, parsed.name.toLowerCase().replace(/[^a-z0-9а-яёәіңғүұқөһ-]+/giu, '-'))
  const fullPath = join(outputRoot, `${safeName}.webp`)
  const thumbPath = join(outputRoot, `${safeName}-thumb.webp`)
  await mkdir(parse(fullPath).dir, { recursive: true })

  await sharp(source)
    .rotate()
    .resize({ width: 2200, height: 2200, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 86, smartSubsample: true })
    .toFile(fullPath)

  await sharp(source)
    .rotate()
    .resize({ width: 900, height: 1125, fit: 'cover', position: 'attention', withoutEnlargement: true })
    .webp({ quality: 80, smartSubsample: true })
    .toFile(thumbPath)

  console.log(`Optimized ${relativePath}`)
}
