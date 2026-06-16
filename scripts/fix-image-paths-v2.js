// Script to update productStore image paths to use standardized {id}.jpg format
import fs from 'fs';

// Read the product store file
let storeContent = fs.readFileSync('src/store/productStore.ts', 'utf8');

// Split into lines
const lines = storeContent.split('\n');
const resultLines = [];

let i = 0;
while (i < lines.length) {
  const line = lines[i];
  
  // Check if this line contains an id (indicating we're in a product object)
  if (line.includes('id:')) {
    // We've found the start of a product object's content
    // Now we need to collect the entire product object
    
    // First, let's backtrack to find the opening brace
    let startIdx = i;
    while (startIdx >= 0 && !lines[startIdx].trim().endsWith('{')) {
      startIdx--;
    }
    
    // If we found the opening brace, collect from there
    if (startIdx >= 0) {
      // Reset i to start at the opening brace
      i = startIdx;
      
      // Now collect the entire product object
      const productLines = [];
      let braceCount = 0;
      
      // Collect lines until we close the object
      while (i < lines.length) {
        const currentLine = lines[i];
        productLines.push(currentLine);
        
        // Update brace count
        for (const char of currentLine) {
          if (char === '{') braceCount++;
          if (char === '}') braceCount--;
        }
        
        i++;
        
        // If we've closed the object, break
        if (braceCount === 0) {
          break;
        }
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
      
      // Continue - we've already advanced i past the product object
      continue;
    } else {
      // Couldn't find opening brace, just keep the line
      resultLines.push(line);
      i++;
    }
  } else {
    // Not an id line, keep as-is
    resultLines.push(line);
    i++;
  }
}

// Write the updated content back to the file
const updatedContent = resultLines.join('\n');
fs.writeFileSync('src/store/productStore.ts', updatedContent);

console.log('✅ Successfully updated productStore to use standardized {id}.jpg image format');
console.log('📝 All products now reference: /images/products/{productId}.jpg');