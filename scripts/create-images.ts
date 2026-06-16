// Script to generate JPEG placeholder images for all products
import Jimp from 'jimp'
import { readdirSync, existsSync } from 'fs'
import { join } from 'path'

const svgDir = 'public/images/products'

const imageMap: Record<string, string> = {
  // Kitchen Appliances
  'electric-kettle-stainless.jpg': '2L Stainless Steel Electric Kettle',
  'electric-kettle-pink.jpg': '2.3L Pink Plastic Electric Kettle',
  'electric-kettle-xiaomi.jpg': '2.3L Xiaomi Style Electric Kettle',
  'electric-kettle-glass.jpg': '2L Glass Electric Kettle',
  
  // Thermos Products
  'thermos-pot.jpg': '2L Thermos Pot',
  'thermos-cup.jpg': 'Thermos Cup (500ml)',
  'thermos-cup-display.jpg': 'Temperature Display Thermos Cup',
  'thermos-set.jpg': '3-Cup Thermos Set',
  
  // Home Care Appliances
  'compact-iron.jpg': 'Compact Electric Iron',
  'steel-iron.jpg': 'Stainless Steel Electric Iron',
  
  // Water Dispensers
  'water-pump-801.jpg': '801 Water Pump',
  'water-pump-013.jpg': '013 Water Pump',
  'water-pump-h16.jpg': 'H16 Water Pump',
  
  // Charging Accessories
  'charger-universal.jpg': 'Universal Charger Head',
  'charger-premium.jpg': 'Universal Charger Head Premium',
  'charger-foldable.jpg': 'Foldable Fast Charger Head',
  'charger-foldable-premium.jpg': 'Premium Foldable Fast Charger',
  
  // Charging Cables
  'cable-usb-c.jpg': 'USB to Type-C 6A Cable',
  'cable-lightning.jpg': 'USB to Lightning Cable',
  'cable-pd-lightning.jpg': 'PD Lightning Cable',
  'cable-pd-type-c.jpg': 'PD Type-C Cable',
  
  // Power Banks
  'powerbank-30k.jpg': '30,000mAh Digital Display Power Bank',
  'powerbank-solar-10k.jpg': '10,000mAh Solar Power Bank',
  'powerbank-solar-20k.jpg': '20,000mAh Solar Power Bank',
  'powerbank-solar-50k.jpg': '50,000mAh Solar Power Bank',
  'powerbank-solar-80k.jpg': '80,000mAh Solar Power Bank',
  'powerbank-solar-100k.jpg': '100,000mAh Solar Power Bank',
  'powerbank-solar-160k.jpg': '160,000mAh Solar Power Bank',
  
  // Audio Products
  'earphones-typec.jpg': 'Wired Earphones Type-C',
  'earphones-35mm.jpg': 'Wired Earphones 3.5mm',
  'earphones-w895.jpg': 'W895 Bluetooth Earphones',
  'earphones-4th-gen.jpg': '4th Generation Bluetooth Earphones',
  'earphones-d4.jpg': 'D4 Leather Texture Bluetooth Earphones',
  'earphones-q86.jpg': 'Q86 Camera Style Bluetooth Earphones',
  
  // Furniture & Home Decor
  'sofa-foldable.jpg': 'Foldable Washable Fabric Sofa',
  'rug-area.jpg': 'Area Rug'
}

async function createPlaceholder(name: string, label: string) {
  const image = new Jimp(2048, 2048, 0xFFFFFFFF)
  
  // Add background gradient
  const startColor = Jimp.rgb(0xF8FAFC)
  const endColor = Jimp.rgb(0xE2E8F0)
  
  for (let y = 0; y < 2048; y++) {
    const ratio = y / 2048
    const r = Math.floor(startColor.r + (endColor.r - startColor.r) * ratio)
    const g = Math.floor(startColor.g + (endColor.g - startColor.g) * ratio)
    const b = Math.floor(startColor.b + (endColor.b - startColor.b) * ratio)
    for (let x = 0; x < 2048; x++) {
      image.setPixelColor(Jimp.rgb(r, g, b), x, y)
    }
  }
  
  // Add text (Jimp has limited font support, use Jimp's built-in fonts)
  const font = await Jimp.loadFont(Jimp.FONT_SANS_128_WHITE)
  
  // Calculate text position
  const textWidth = label.length * 40
  const x = Math.floor((2048 - textWidth) / 2)
  
  image.print(font, x, 900, label)
  
  await image.writeAsync(join(svgDir, name))
  console.log(`Created: ${name}`)
}

async function main() {
  for (const [filename, label] of Object.entries(imageMap)) {
    await createPlaceholder(filename, label)
  }
  console.log('\nAll placeholder images created!')
}

main().catch(console.error)