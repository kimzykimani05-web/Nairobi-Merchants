// Script to update productStore image paths to use standardized {id}.jpg format
import fs from 'fs';

// Read the product store file
let storeContent = fs.readFileSync('src/store/productStore.ts', 'utf8');

// We'll process the file by finding each product object and updating its image line
// Product objects start with '{' that contains 'id:' and end with '},' (except last one)

// Split by lines to make processing easier
const lines = storeContent.split('\n');
const resultLines = [];

let i = 0;
while (i < lines.length) {
  const line = lines[i];
  
  // Check if this line starts a product object
  if (line.trim().startsWith('{') && line.includes('id:')) {
    // Start of a product object
    const productLines = [line];
    let braceCount = 1;
    i++;
    
    // Collect all lines until we close the object
    while (i < lines.length && braceCount > 0) {
      const currentLine = lines[i];
      productLines.push(currentLine);
      
      // Update brace count
      for (const char of currentLine) {
        if (char === '{') braceCount++;
        if (char === '}') braceCount--;
      }
      
      i++;
    }
    
    // Now we have a complete product object in productLines
    // Process it to update the image path
    const productText = productLines.join('\n');
    
    // Extract the id
    const idMatch = productText.match(/id:\s*'([^']+)'/);
    if (idMatch) {
      const productId = idMatch[1];
      // Replace the image line with standardized format
      const updatedProductText = productText.replace(
        /image:\s*'[^']*'/g,
        `image: '/images/products/${productId}.jpg'`
      );
      
      // Add the processed product lines to result
      resultLines.push(...updatedProductText.split('\n'));
    } else {
      // If no id found, keep original (shouldn't happen for real products)
      resultLines.push(...productLines);
    }
    
    // If we're not at the end, add the comma or closing brace that follows
    // (but we already consumed it in the loop above when braceCount reached 0)
    // Actually, the last line we added was the closing '}', so we need to check
    // if there's a comma after it and add that too
    if (i < lines.length && lines[i].trim() === ',') {
      resultLines.push(lines[i]);
      i++;
    }
  } else {
    // Not a product line, keep as-is
    resultLines.push(line);
    i++;
  }
}

// Write the updated content back to the file
const updatedContent = resultLines.join('\n');
fs.writeFileSync('src/store/productStore.ts', updatedContent);

console.log('✅ Successfully updated productStore to use standardized {id}.jpg image format');
console.log('📝 All products now reference: /images/products/{productId}.jpg');