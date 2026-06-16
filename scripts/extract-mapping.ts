// Script to extract correct product ID to image filename mapping from productStore
import { readFileSync } from 'fs';

const storeContent = readFileSync('src/store/productStore.ts', 'utf8');

// Extract the defaultProducts array content
const productsMatch = storeContent.match(/defaultProducts:\s*\[([\s\S]*?)\]/);
if (!productsMatch) {
  console.error('Could not find defaultProducts array in productStore.ts');
  process.exit(1);
}

const productsText = productsMatch[1];

// Extract each product object
const productObjects = [];
let depth = 0;
let start = -1;
let current = '';

for (let i = 0; i < productsText.length; i++) {
  const char = productsText[i];
  
  if (char === '{') {
    if (depth === 0) start = i;
    depth++;
  }
  
  if (start !== -1) {
    current += char;
  }
  
  if (char === '}') {
    depth--;
    if (depth === 0 && start !== -1) {
      productObjects.push(current);
      current = '';
      start = -1;
    }
  }
}

// Parse each product object to extract id and image
const productMap = new Map();

for (const objText of productObjects) {
  // Extract id
  const idMatch = objText.match(/id:\s*'([^']+)'/);
  // Extract image
  const imageMatch = objText.match(/image:\s*'([^']+)'/);
  
  if (idMatch && imageMatch) {
    const id = idMatch[1];
    const imagePath = imageMatch[1]; // e.g., '/images/products/electric-kettle-stainless.svg'
    // Extract just the filename part
    const filename = imagePath.split('/').pop();
    productMap.set(id, filename);
  }
}

console.log(`Extracted ${productMap.size} product ID to image filename mappings:`);
for (const [id, filename] of productMap) {
  console.log(`  ${id} → ${filename}`);
}

// Save mapping to file for use in slicing script
const mappingJson = JSON.stringify(Array.from(productMap.entries()), null, 2);
require('fs').writeFileSync('scripts/product-image-mapping.json', mappingJson);
console.log('\n✅ Mapping saved to scripts/product-image-mapping.json');