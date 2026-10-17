import { mkdir, readdir } from 'node:fs/promises'
import { extname, join, parse, relative } from 'node:path'
import sharp from 'sharp'

const projectRoot = new URL('..', import.meta.url).pathname
const sourceRoot = join(projectRoot, 'source-materials')
const outputRoot = join(projectRoot, 'public', 'images', 'optimized')
const supported = new Set(['.jpg', '.jpeg', '.png', '.webp', '.heic', '.heif', '.tif', '.tiff'])
const curatedCrops = {
  'personal-graduation-portrait-11.jpg': { left: 0, top: 270, width: 591, height: 739 },
  'personal-friendship-night-12.jpg': { left: 0, top: 285, width: 591, height: 739 },
  'personal-photobooth-friend-13.jpg': { left: 0, top: 117, width: 591, height: 739 },
  'personal-outdoor-portrait-14.jpg': { left: 0, top: 270, width: 591, height: 739 },
  'personal-graduation-selfies-15.jpg': { left: 0, top: 117, width: 591, height: 739 },
  'personal-fire-night-16.jpg': { left: 40, top: 365, width: 470, height: 588 },
  'personal-new-city-night-17.jpg': { left: 40, top: 350, width: 470, height: 588 },
  'personal-new-city-sphere-18.jpg': { left: 40, top: 350, width: 470, height: 588 },
  'personal-night-portrait-19.jpg': { left: 40, top: 340, width: 470, height: 588 },
  'personal-prom-blue-20.jpg': { left: 40, top: 400, width: 470, height: 588 },
  'personal-prom-blue-21.jpg': { left: 40, top: 400, width: 470, height: 588 },
  'personal-prom-blue-22.jpg': { left: 40, top: 400, width: 470, height: 588 },
  'personal-prom-blue-23.jpg': { left: 40, top: 400, width: 470, height: 588 },
  'personal-studio-portrait-24.jpg': { left: 40, top: 330, width: 470, height: 588 },
  'personal-studio-seated-25.jpg': { left: 40, top: 330, width: 470, height: 588 },
  'education-astana-it-university-26.jpg': { left: 0, top: 235, width: 591, height: 739 },
  'curator-info32-proof-27.jpg': { left: 0, top: 280, width: 591, height: 739 },
}

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
  const curatedPath = join(outputRoot, `${safeName}-curated.webp`)
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

  const curatedCrop = curatedCrops[relativePath]
  if (curatedCrop) {
    await sharp(source)
      .rotate()
      .extract(curatedCrop)
      .webp({ quality: 86, smartSubsample: true })
      .toFile(curatedPath)
  }

  console.log(`Optimized ${relativePath}`)
}
