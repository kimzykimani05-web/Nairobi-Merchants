// Script to slice product contact sheet into individual product images
import sharp from 'sharp';
import { readFileSync } from 'fs';
import { join } from 'path';

// Product IDs and their expected image filenames (from productStore.ts)
const productImageMap = {
  // Kitchen Appliances
  'kettle-stainless-2l': 'electric-kettle-stainless.jpg',
  'kettle-pink-2l': 'electric-kettle-pink.jpg',
  'kettle-xiaomi-2l': 'electric-kettle-xiaomi.jpg',
  'kettle-glass-2l': 'electric-kettle-glass.jpg',
  
  // Thermos Products
  'thermos-pot-2l': 'thermos-pot.jpg',
  'thermos-cup-500ml': 'thermos-cup.jpg',
  'thermos-cup-temp': 'thermos-cup-display.jpg',
  'thermos-set-3cup': 'thermos-set.jpg',
  
  // Home Care Appliances
  'iron-compact': 'compact-iron.jpg',
  'iron-stainless': 'steel-iron.jpg',
  
  // Water Dispensers
  'water-pump-801': 'water-pump-801.jpg',
  'water-pump-013': 'water-pump-013.jpg',
  'water-pump-h16': 'water-pump-h16.jpg',
  
  // Charging Accessories
  'charger-universal': 'charger-universal.jpg',
  'charger-universal-premium': 'charger-premium.jpg',
  'charger-foldable': 'charger-foldable.jpg',
  'charger-foldable-premium': 'charger-foldable-premium.jpg',
  
  // Charging Cables
  'cable-usb-c': 'cable-usb-c.jpg',
  'cable-lightning': 'cable-lightning.jpg',
  'cable-pd-lightning': 'cable-pd-lightning.jpg',
  'cable-pd-type-c': 'cable-pd-type-c.jpg',
  
  // Power Banks
  'powerbank-30k': 'powerbank-30k.jpg',
  'powerbank-solar-10k': 'powerbank-solar-10k.jpg',
  'powerbank-solar-20k': 'powerbank-solar-20k.jpg',
  'powerbank-solar-50k': 'powerbank-solar-50k.jpg',
  'powerbank-solar-80k': 'powerbank-solar-80k.jpg',
  'powerbank-solar-100k': 'powerbank-solar-100k.jpg',
  'powerbank-solar-160k': 'powerbank-solar-160k.jpg',
  'powerbank-solar-10k': 'powerbank-solar-10k.jpg', // duplicate? check
  'powerbank-solar-20k': 'powerbank-solar-20k.jpg', // duplicate?
  
  // Audio Products
  'earphones-typec': 'earphones-typec.jpg',
  'earphones-3.5mm': 'earphones-35mm.jpg',
  'earphones-w895': 'earphones-w895.jpg',
  'earphones-4th-gen': 'earphones-4th-gen.jpg',
  'earphones-d4': 'earphones-d4.jpg',
  'earphones-q86': 'earphones-q86.jpg',
  
  // Furniture
  'sofa-foldable': 'sofa-foldable.jpg',
  
  // Home Decor
  'rug-area': 'rug-area.jpg'
};

// Get unique products (handle duplicates)
const uniqueProducts = Object.keys(productImageMap);

async function sliceContactSheet() {
  const contactSheetPath = 'public/images/product_contact_sheet.jpg';
  const outputDir = 'public/images/products';
  
  // Get image dimensions
  const metadata = await sharp(contactSheetPath).metadata();
  console.log(`Contact sheet dimensions: ${metadata.width} x ${metadata.height}`);
  
  // Calculate grid layout for 35 products
  const cols = 7; // 7 columns
  const rows = 5; // 5 rows = 35 products exactly
  
  const tileWidth = Math.floor(metadata.width / cols);
  const tileHeight = Math.floor(metadata.height / rows);
  
  console.log(`Each tile: ${tileWidth} x ${tileHeight}`);
  console.log(`Grid: ${cols} columns x ${rows} rows`);
  
  // Extract each tile
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const index = row * cols + col;
      if (index >= uniqueProducts.length) break;
      
      const productId = uniqueProducts[index];
      const filename = productImageMap[productId];
      
      if (!filename) {
        console.warn(`No filename mapped for product: ${productId}`);
        continue;
      }
      
      const left = col * tileWidth;
      const top = row * tileHeight;
      
      await sharp(contactSheetPath)
        .extract({ left, top, width: tileWidth, height: tileHeight })
        .toFile(join(outputDir, filename));
      
      console.log(`Extracted: ${filename} (for ${productId}) at position [${col},${row}]`);
    }
  }
  
  console.log('\n✅ All product images extracted from contact sheet!');
}

sliceContactSheet().catch(console.error);