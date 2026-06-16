// Script to slice contact sheet and save as product images using {id}.jpg naming
import sharp from 'sharp';
import { readFileSync } from 'fs';
import { join } from 'path';

// Get product IDs from the updated productStore
const storeContent = readFileSync('src/store/productStore.ts', 'utf8');
const idMatches = storeContent.match(/id:\s*'([^']+)'/g);
const productIds = idMatches ? idMatches.map(match => match.match(/'([^']+)'/)[1]) : [];

console.log(`Found ${productIds.length} product IDs:`);
console.log(productIds.join(', '));

// Calculate grid layout for 36 products
const cols = 6; // 6 columns
const rows = 6; // 6 rows = 36 products

const contactSheetPath = 'public/images/product_contact_sheet.jpg';
const outputDir = 'public/images/products';

// Get image dimensions
sharp(contactSheetPath)
  .metadata()
  .then(metadata => {
    console.log(`Contact sheet dimensions: ${metadata.width} x ${metadata.height}`);
    
    const tileWidth = Math.floor(metadata.width / cols);
    const tileHeight = Math.floor(metadata.height / rows);
    
    console.log(`Each tile: ${tileWidth} x ${tileHeight}`);
    console.log(`Grid: ${cols} columns x ${rows} rows`);
    
    // Extract each tile
    const promises = [];
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const index = row * cols + col;
        if (index >= productIds.length) {
          console.log(`Warning: More tiles (${index + 1}) than products (${productIds.length}). Stopping.`);
          break;
        }
        
        const productId = productIds[index];
        const filename = `${productId}.jpg`;
        const outputPath = join(outputDir, filename);
        
        const left = col * tileWidth;
        const top = row * tileHeight;
        
        const promise = sharp(contactSheetPath)
          .extract({ left, top, width: tileWidth, height: tileHeight })
          .toFile(outputPath)
          .then(() => {
            console.log(`✅ Created: ${filename} (for ${productId}) at [${col},${row}]`);
          })
          .catch(err => {
            console.error(`❌ Failed to create ${filename}:`, err.message);
          });
        
        promises.push(promise);
      }
    }
    
    return Promise.all(promises);
  })
  .then(() => {
    console.log('\n🎉 All product images have been created from the contact sheet!');
    console.log('📁 Images saved to: public/images/products/');
    console.log('📝 Using naming convention: {productId}.jpg');
  })
  .catch(err => {
    console.error('❌ Error processing contact sheet:', err);
  });