// Script to update productStore image paths to use consistent {id}.jpg naming
import { readFileSync, writeFileSync } from 'fs';

let storeContent = readFileSync('src/store/productStore.ts', 'utf8');

// Replace all image paths with consistent {id}.jpg format
// Pattern: image: '/images/products/anything.svg',
// Replacement: image: '/images/products/${id}.jpg',
// We need to do this per product object

// Instead, let's do a more precise replacement by finding each product object
// and replacing its image line

// Split by product objects (lines that start with '  {'
// and end with '},' except the last one)
const lines = storeContent.split('\n');
const updatedLines = [];

let inProduct = false;
let braceCount = 0;
let currentProductLines = [];

for (const line of lines) {
  // Check if we're entering a product object
  if (line.trim().startsWith('{') && line.includes('id:')) {
    inProduct = true;
    braceCount = 1;
    currentProductLines = [line];
    continue;
  }
  
  if (inProduct) {
    currentProductLines.push(line);
    
    // Count braces to know when we exit the object
    for (const char of line) {
      if (char === '{') braceCount++;
      if (char === '}') braceCount--;
    }
    
    if (braceCount === 0) {
      // We've finished a product object
      // Process the product lines to update the image path
      const productText = currentProductLines.join('\n');
      
      // Extract the id
      const idMatch = productText.match(/id:\s*'([^']+)'/);
      if (idMatch) {
        const productId = idMatch[1];
        // Replace the image line
        const updatedProductText = productText.replace(
          /image:\s*'[^']*'/g,
          `image: '/images/products/${productId}.jpg'`
        );
        
        // Split back into lines and add to output
        const updatedProductLines = updatedProductText.split('\n');
        updatedLines.push(...updatedProductLines);
      } else {
        // If we couldn't extract id, keep original
        updatedLines.push(...currentProductLines);
      }
      
      inProduct = false;
      currentProductLines = [];
      continue;
    }
  } else {
    // Not in a product, just add the line as-is
    updatedLines.push(line);
  }
}

// Handle case where file ends without newline
if (currentProductLines.length > 0 && inProduct) {
  // Process remaining product
  const productText = currentProductLines.join('\n');
  const idMatch = productText.match(/id:\s*'([^']+)'/);
  if (idMatch) {
    const productId = idMatch[1];
    const updatedProductText = productText.replace(
      /image:\s*'[^']*'/g,
      `image: '/images/products/${productId}.jpg'`
    );
    const updatedProductLines = updatedProductText.split('\n');
    updatedLines.push(...updatedProductLines);
  } else {
    updatedLines.push(...currentProductLines);
  }
}

const updatedContent = updatedLines.join('\n');
writeFileSync('src/store/productStore.ts', updatedContent);
console.log('✅ Updated productStore.ts to use consistent {id}.jpg image naming');