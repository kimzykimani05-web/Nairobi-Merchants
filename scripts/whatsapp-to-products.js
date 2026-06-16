// Script to assign WhatsApp images to products in sequential order
import fs from 'fs';
import path from 'path';

// Get product IDs from store (first 36 that are actual products, not categories)
const storeContent = fs.readFileSync('src/store/productStore.ts', 'utf8');
const productIds = [];

// Extract all id: '...' lines
const idRegex = /id:\s*'([^']+)'/g;
let match;
while ((match = idRegex.exec(storeContent)) !== null) {
  productIds.push(match[1]);
}

// Filter to get only the first 36 product IDs (excluding categories which come later)
// Categories start around ID 'kitchen-appliances' etc.
const actualProductIds = [];
for (const id of productIds) {
  if (!['kitchen-appliances', 'thermos-products', 'home-care-appliances', 'water-dispensers', 'chargers', 'charging-cables', 'power-banks', 'audio-products', 'furniture', 'home-decor'].includes(id)) {
    actualProductIds.push(id);
  }
  if (actualProductIds.length >= 36) break;
}

console.log(`Found ${actualProductIds.length} product IDs:`);
console.log(actualProductIds.join(', '));

// Get WhatsApp images from Product Images folder
const productImagesDir = path.join(process.cwd(), 'public', 'Product Images');
const whatsappImages = fs.readdirSync(productImagesDir)
  .filter(file => file.toLowerCase().endsWith('.jpeg'))
  .sort(); // Sort by filename (timestamp)

console.log(`Found ${whatsappImages.length} WhatsApp images:`);
console.log(whatsappImages.join(', '));

// Determine how many we can assign
const numToAssign = Math.min(actualProductIds.length, whatsappImages.length);
console.log(`\nAssigning first ${numToAssign} images to products...`);

// Copy/rename images
const productsDir = path.join(process.cwd(), 'public', 'images', 'products');
for (let i = 0; i < numToAssign; i++) {
  const productId = actualProductIds[i];
  const whatsappImage = whatsappImages[i];
  const sourcePath = path.join(productImagesDir, whatsappImage);
  const destPath = path.join(productsDir, `${productId}.jpg`);
  
  try {
    fs.copyFileSync(sourcePath, destPath);
    console.log(`✅ Assigned: ${whatsappImage} → ${productId}.jpg`);
  } catch (err) {
    console.error(`❌ Failed to assign ${whatsappImage} to ${productId}.jpg:`, err.message);
  }
}

// Report remaining products (if any) that will use contact sheet images
if (actualProductIds.length > numToAssign) {
  console.log(`\n⚠️  ${actualProductIds.length - numToAssign} products will use existing contact sheet images:`);
  const remainingIds = actualProductIds.slice(numToAssign);
  console.log(remainingIds.join(', '));
}

// Report extra images (if any)
if (whatsappImages.length > actualProductIds.length) {
  console.log(`\nℹ️  ${whatsappImages.length - actualProductIds.length} extra WhatsApp images not assigned:`);
  const extraImages = whatsappImages.slice(actualProductIds.length);
  console.log(extraImages.join(', '));
}

console.log('\n🎨 Image assignment complete!');
console.log('📁 Product images are now in: public/images/products/');
console.log('📝 Naming: {productId}.jpg');