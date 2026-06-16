// Script to update productStore image paths to use standardized {id}.jpg format
// Simple state machine: remember the last id seen, apply it to the next image line
import fs from 'fs';

// Read the product store file
let storeContent = fs.readFileSync('src/store/productStore.ts', 'utf8');

// Split into lines
const lines = storeContent.split('\n');
const resultLines = [];

let currentId = null;

for (const line of lines) {
  // Check if this line contains an id
  const idMatch = line.match(/id:\s*'([^']+)'/);
  if (idMatch) {
    // Remember this id for the next image line
    currentId = idMatch[1];
    resultLines.push(line);
    continue;
  }
  
  // Check if this line contains an image path
  const imageMatch = line.match(/image:\s*'[^']*'/);
  if (imageMatch && currentId !== null) {
    // Replace the image path with the remembered id
    const updatedLine = line.replace(
      /image:\s*'[^']*'/g,
      `image: '/images/products/${currentId}.jpg'`
    );
    resultLines.push(updatedLine);
    // Keep the id for potential multiple images per product (though unlikely)
    // currentId = null; // Uncomment if each product should only use its id once
    continue;
  }
  
  // Check if this line ends a product object (optional: reset id)
  if (line.trim() === '},') {
    // Reset id when we exit a product object
    currentId = null;
  }
  
  // Keep line as-is
  resultLines.push(line);
}

// Write the updated content back to the file
const updatedContent = resultLines.join('\n');
fs.writeFileSync('src/store/productStore.ts', updatedContent);

console.log('✅ Successfully updated productStore to use standardized {id}.jpg image format');
console.log('📝 All products now reference: /images/products/{productId}.jpg');