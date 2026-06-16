// Verification script to check what products are in the store
import { readFileSync } from 'fs';

// Read the productStore file
const storeContent = readFileSync('src/store/productStore.ts', 'utf8');

// Extract product IDs from the defaultProducts array
const productIds = [];
const idRegex = /id: '([^']+)'/g;
let match;
while ((match = idRegex.exec(storeContent)) !== null) {
  productIds.push(match[1]);
}

console.log(`Found ${productIds.length} products in store:`);
productIds.forEach((id, index) => {
  console.log(`${index + 1}. ${id}`);
});

// Check for duplicates
const duplicates = productIds.filter((id, index) => productIds.indexOf(id) !== index);
if (duplicates.length > 0) {
  console.log('\n⚠️  Duplicate IDs found:', [...new Set(duplicates)]);
} else {
  console.log('\n✅ No duplicate IDs found');
}

// Check if we have exactly 35 products
if (productIds.length === 35) {
  console.log('✅ Correct number of products (35)');
} else {
  console.log(`⚠️  Expected 35 products, found ${productIds.length}`);
}