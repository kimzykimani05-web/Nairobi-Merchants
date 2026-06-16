// Script to update productStore image paths to use standardized {id}.jpg format
import fs from 'fs';

// Read the product store file
const storeContent = fs.readFileSync('src/store/productStore.ts', 'utf8');

// Process each line to fix image paths for product objects
const lines = storeContent.split('\n');
const updatedLines = [];

let inProduct = false;
let braceCount = 0;

for (const line of lines) {
  // Check if we're entering a product object
  if (line.trim().startsWith('{') && line.includes('id:')) {
    inProduct = true;
    braceCount = 1;
    updatedLines.push(line);
    continue;
  }
  
  if (inProduct) {
    updatedLines.push(line);
    
    // Update brace count
    for (const char of line) {
      if (char === '{') braceCount++;
      if (char === '}') braceCount--;
    }
    
    // If we've exited the product object
    if (braceCount === 0) {
      inProduct = false;
      continue;
    }
  } else {
    // Not in a product, keep line as-is
    updatedLines.push(line);
  }
}

// Now process the updated lines to fix image paths
const finalLines = [];
inProduct = false;
braceCount = 0;
let currentProductLines = [];

for (const line of updatedLines) {
  // Check if we're entering a product object
  if (line.trim().startsWith('{') && line.includes('id:')) {
    // Process any accumulated product lines first
    if (currentProductLines.length > 0) {
      // Process the accumulated product
      const productText = currentProductLines.join('\n');
      
      // Extract the id
      const idMatch = productText.match(/id:\s*'([^']+)'/);
      if (idMatch) {
        const productId = idMatch[1];
        // Replace the image line with standardized format
        const updatedProductText = productText.replace(
          /image:\s*'[^']*'/g,
          `image: '/images/products/${productId}.jpg'`
        );
        
        // Add the processed product lines
        finalLines.push(...updatedProductText.split('\n'));
      } else {
        // If no id found, keep original
        finalLines.push(...currentProductLines);
      }
      
      currentProductLines = [];
    }
    
    inProduct = true;
    braceCount = 1;
    currentProductLines = [line];
    continue;
  }
  
  if (inProduct) {
    currentProductLines.push(line);
    
    // Update brace count
    for (const char of line) {
      if (char === '{') braceCount++;
      if (char === '}') braceCount--;
    }
    
    // If we've exited the product object
    if (braceCount === 0) {
      // Process the accumulated product
      const productText = currentProductLines.join('\n');
      
      // Extract the id
      const idMatch = productText.match(/id:\s*'([^']+)'/);
      if (idMatch) {
        const productId = idMatch[1];
        // Replace the image line with standardized format
        const updatedProductText = productText.replace(
          /image:\s*'[^']*'/g,
          `image: '/images/products/${productId}.jpg'`
        );
        
        // Add the processed product lines
        finalLines.push(...updatedProductText.split('\n'));
      } else {
        // If no id found, keep original
        finalLines.push(...currentProductLines);
      }
      
      inProduct = false;
      currentProductLines = [];
      continue;
    }
  } else {
    // Not in a product, keep line as-is
    finalLines.push(line);
  }
}

// Process any remaining product lines
if (currentProductLines.length > 0) {
  const productText = currentProductLines.join('\n');
  
  // Extract the id
  const idMatch = productText.match(/id:\s*'([^']+)'/);
  if (idMatch) {
    const productId = idMatch[1];
    // Replace the image line with standardized format
    const updatedProductText = productText.replace(
      /image:\s*'[^']*'/g,
      `image: '/images/products/${productId}.jpg'`
    );
    
    // Add the processed product lines
    finalLines.push(...updatedProductText.split('\n'));
  } else {
    // If no id found, keep original
    finalLines.push(...currentProductLines);
  }
}

// Write the updated content back to the file
const updatedContent = finalLines.join('\n');
fs.writeFileSync('src/store/productStore.ts', updatedContent);

console.log('✅ Successfully updated productStore to use standardized {id}.jpg image format');
console.log('📝 All products now reference: /images/products/{productId}.jpg');