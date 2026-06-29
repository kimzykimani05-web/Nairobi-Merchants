// Script to fix image paths in productStore to have correct single "products" path
import { readFileSync, writeFileSync } from 'fs';
let storeContent = readFileSync('src/store/productStore.ts', 'utf8');
// Fix image paths to ensure they have exactly one "products" in the path
// Pattern to find: image: '/images/products/products/...jpg'
// Replace with:    image: '/images/products/...jpg'
//
// Also fix: image: '/images/products/...svg' -> image: '/images/products/...jpg'
// First, fix double "products" paths
storeContent = storeContent.replace(/image:\s*'\/images\/products\/products\/([^']+)'/g, (match, p1) => {
    return `image: '/images/products/${p1}'`;
});
// Then, fix any remaining .svg extensions to .jpg
storeContent = storeContent.replace(/image:\s*'\/images\/products\/([^']+)\.svg'/g, (match, p1) => {
    return `image: '/images/products/${p1}.jpg'`;
});
// Finally, ensure all image paths use the {id}.jpg format we established
// Extract each product and ensure image matches id
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
            if (char === '{')
                braceCount++;
            if (char === '}')
                braceCount--;
        }
        if (braceCount === 0) {
            // We've finished a product object
            // Process the product lines to ensure image path is correct
            const productText = currentProductLines.join('\n');
            // Extract the id
            const idMatch = productText.match(/id:\s*'([^']+)'/);
            if (idMatch) {
                const productId = idMatch[1];
                // Replace the image line to use {id}.jpg format
                const updatedProductText = productText.replace(/image:\s*'[^']*'/g, `image: '/images/products/${productId}.jpg'`);
                // Split back into lines and add to output
                const updatedProductLines = updatedProductText.split('\n');
                updatedLines.push(...updatedProductLines);
            }
            else {
                // If we couldn't extract id, keep original (but fix extension if needed)
                let fixedText = productText.replace(/\.svg'/g, '.jpg\'');
                updatedLines.push(...fixedText.split('\n'));
            }
            inProduct = false;
            currentProductLines = [];
            continue;
        }
    }
    else {
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
        const updatedProductText = productText.replace(/image:\s*'[^']*'/g, `image: '/images/products/${productId}.jpg'`);
        const updatedProductLines = updatedProductText.split('\n');
        updatedLines.push(...updatedProductLines);
    }
    else {
        // Fix extension if needed
        let fixedText = productText.replace(/\.svg'/g, '.jpg\'');
        updatedLines.push(...fixedText.split('\n'));
    }
}
const updatedContent = updatedLines.join('\n');
writeFileSync('src/store/productStore.ts', updatedContent);
console.log('✅ Fixed productStore image paths: corrected double "products" and ensured {id}.jpg format');
