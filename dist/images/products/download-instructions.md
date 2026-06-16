# Image Download Instructions

## Free High-Quality Product Images from Unsplash

Download these images and save them to `/public/images/products/` with the specified filenames:

### Kitchen Appliances
1. **electric-kettle-stainless.jpg** - https://unsplash.com/s/photos/electric-kettle
2. **electric-kettle-pink.jpg** - https://unsplash.com/s/photos/pink-kettle
3. **electric-kettle-xiaomi.jpg** - https://unsplash.com/s/photos/minimalist-kettle
4. **electric-kettle-glass.jpg** - https://unsplash.com/s/photos/glass-kettle

### Thermos Products
5. **thermos-pot.jpg** - https://unsplash.com/s/photos/thermos-pot
6. **thermos-cup.jpg** - https://unsplash.com/s/photos/thermos-cup
7. **thermos-cup-display.jpg** - https://unsplash.com/s/photos/smart-thermos
8. **thermos-set.jpg** - https://unsplash.com/s/photos/thermos-set

### Home Care Appliances
9. **compact-iron.jpg** - https://unsplash.com/s/photos/electric-iron
10. **steel-iron.jpg** - https://unsplash.com/s/photos/steam-iron

### Water Dispensers
11. **water-dispenser-801.jpg** - https://unsplash.com/s/photos/water-pump
12. **water-dispenser-013.jpg** - https://unsplash.com/s/photos/dispenser-pump
13. **water-dispenser-h16.jpg** - https://unsplash.com/s/photos/automatic-pump

### Charging Accessories
14. **universal-charger.jpg** - https://unsplash.com/s/photos/universal-charger
15. **premium-charger.jpg** - https://unsplash.com/s/photos/fast-charger
16. **foldable-charger.jpg** - https://unsplash.com/s/photos/foldable-charger
17. **premium-foldable-charger.jpg** - https://unsplash.com/s/photos/premium-charger

### Charging Cables
18. **usb-typec-cable.jpg** - https://unsplash.com/s/photos/usb-cable
19. **usb-lightning-cable.jpg** - https://unsplash.com/s/photos/lightning-cable
20. **pd-lightning-cable.jpg** - https://unsplash.com/s/photos/pd-cable
21. **pd-typec-cable.jpg** - https://unsplash.com/s/photos/typec-cable

### Power Banks
22. **powerbank-30000.jpg** - https://unsplash.com/s/photos/power-bank
23. **powerbank-50000.jpg** - https://unsplash.com/s/photos/solar-power-bank
24. **powerbank-80000.jpg** - https://unsplash.com/s/photos/large-power-bank
25. **powerbank-100000.jpg** - https://unsplash.com/s/photos/xl-power-bank
26. **powerbank-160000.jpg** - https://unsplash.com/s/photos/industrial-power-bank
27. **powerbank-10000.jpg** - https://unsplash.com/s/photos/mini-power-bank
28. **powerbank-20000.jpg** - https://unsplash.com/s/photos/portable-power-bank

### Audio Products
29. **wired-earphones-typec.jpg** - https://unsplash.com/s/photos/type-c-earphones
30. **wired-earphones-35mm.jpg** - https://unsplash.com/s/photos/3-5mm-earphones
31. **bluetooth-w895.jpg** - https://unsplash.com/s/photos/bluetooth-earbuds
32. **bluetooth-4gen.jpg** - https://unsplash.com/s/photos/wireless-earbuds
33. **bluetooth-d4.jpg** - https://unsplash.com/s/photos/leather-earphones
34. **bluetooth-q86.jpg** - https://unsplash.com/s/photos/camera-earphones

### Furniture
35. **foldable-sofa.jpg** - https://unsplash.com/s/photos/foldable-sofa

### Home Décor
36. **area-rug.jpg** - https://unsplash.com/s/photos/area-rug

## Quick Download Script

Run this PowerShell command to download images:

```powershell
$urls = @{
  "electric-kettle-stainless.jpg" = "https://images.unsplash.com/photo-..."
  "electric-kettle-pink.jpg" = "https://images.unsplash.com/photo-..."
  # Add full URLs for each image
}
# Then download each to public/images/products/
```

## Image Requirements
- Format: JPEG
- Background: White (#FFFFFF)
- Aspect ratio: 1:1 for products, 16:9 for furniture/rugs
- Minimum size: 2048×2048 (or 2048×1152 for landscape)
- No watermarks or logos