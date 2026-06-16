import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Product, Category } from '../types'

const defaultProducts: Product[] = [
  {
    id: 'kettle-stainless-2l',
    name: '2L Stainless Steel Electric Kettle',
    category: 'kitchen-appliances',
    specifications: ['Capacity: 2.0L', 'Material: Stainless Steel + ABS', 'Power: 1000W–1500W', 'Heating Time: 6–10 Minutes', 'Cable Length: 0.7m', 'Weight: 530g'],
    unitPrice: 422,
    cartonQuantity: 16,
    cartonPrice: 6752,
    colors: ['Silver', 'Black'],
    badge: 'best-seller',
    image: '/images/products/kettle-stainless-2l.jpg',
    description: 'Durable stainless steel electric kettle with fast heating and safety features.'
  },
  {
    id: 'kettle-pink-2l',
    name: '2.3L Pink Plastic Electric Kettle',
    category: 'kitchen-appliances',
    specifications: ['Capacity: 2.3L', 'Power: 1500W–2000W', 'Heating Time: 6–10 Minutes'],
    unitPrice: 720,
    cartonQuantity: 20,
    cartonPrice: 14400,
    colors: ['Pink', 'White'],
    image: '/images/products/kettle-pink-2l.jpg',
    description: 'Stylish pink electric kettle perfect for modern kitchens.'
  },
  {
    id: 'kettle-xiaomi-2l',
    name: '2.3L Xiaomi Style Electric Kettle',
    category: 'kitchen-appliances',
    specifications: ['Capacity: 2.3L', 'Power: 1000W–1500W'],
    unitPrice: 809,
    cartonQuantity: 20,
    cartonPrice: 16180,
    colors: ['White', 'Black'],
    badge: 'new-arrival',
    image: '/images/products/kettle-xiaomi-2l.jpg',
    description: 'Sleek Xiaomi-style design with efficient heating technology.'
  },
  {
    id: 'kettle-glass-2l',
    name: '2L Glass Electric Kettle',
    category: 'kitchen-appliances',
    specifications: ['Capacity: 1.8L', 'Material: Glass + Stainless Steel'],
    unitPrice: 899,
    cartonQuantity: 12,
    cartonPrice: 10788,
    colors: ['Transparent', 'Silver'],
    image: '/images/products/kettle-glass-2l.jpg',
    description: 'Premium glass kettle with stainless steel accents for elegant boiling.'
  },
  {
    id: 'thermos-pot-2l',
    name: '2L Thermos Pot',
    category: 'thermos-products',
    specifications: ['Capacity: 2L', 'Material: Stainless Steel'],
    unitPrice: 629,
    cartonQuantity: 12,
    cartonPrice: 7548,
    colors: ['Silver', 'Gold'],
    badge: 'popular',
    image: '/images/products/thermos-pot-2l.jpg',
    description: 'Large capacity thermos pot for hot beverages and soups.'
  },
  {
    id: 'thermos-cup-500ml',
    name: 'Thermos Cup (500ml)',
    category: 'thermos-products',
    specifications: ['Capacity: 500ml', 'Leak-proof lid'],
    unitPrice: 305,
    cartonQuantity: 24,
    cartonPrice: 7320,
    colors: ['Blue', 'Red', 'Black', 'White'],
    image: '/images/products/thermos-cup-500ml.jpg',
    description: 'Compact thermos cup ideal for coffee and tea on the go.'
  },
  {
    id: 'thermos-cup-temp',
    name: 'Temperature Display Thermos Cup',
    category: 'thermos-products',
    specifications: ['Capacity: 500ml', 'LED Temperature Display'],
    unitPrice: 305,
    cartonQuantity: 24,
    cartonPrice: 7320,
    colors: ['Black', 'Silver'],
    badge: 'new-arrival',
    image: '/images/products/thermos-cup-temp.jpg',
    description: 'Smart thermos with digital temperature display.'
  },
  {
    id: 'thermos-set-3cup',
    name: '3-Cup Thermos Set',
    category: 'thermos-products',
    specifications: ['Set of 3 cups', 'Capacity: 300ml each'],
    unitPrice: 359,
    cartonQuantity: 16,
    cartonPrice: 5744,
    colors: ['Multi-color'],
    image: '/images/products/thermos-set-3cup.jpg',
    description: 'Complete thermos set for family use.'
  },
  {
    id: 'iron-compact',
    name: 'Compact Electric Iron',
    category: 'home-care-appliances',
    specifications: ['Power: 1200W', 'Non-stick soleplate'],
    unitPrice: 540,
    cartonQuantity: 20,
    cartonPrice: 10800,
    colors: ['White', 'Blue'],
    badge: 'popular',
    image: '/images/products/iron-compact.jpg',
    description: 'Lightweight iron perfect for everyday use.'
  },
  {
    id: 'iron-stainless',
    name: 'Stainless Steel Electric Iron',
    category: 'home-care-appliances',
    specifications: ['Power: 1500W', 'Stainless steel soleplate'],
    unitPrice: 585,
    cartonQuantity: 20,
    cartonPrice: 11700,
    colors: ['Silver', 'Black'],
    image: '/images/products/iron-stainless.jpg',
    description: 'Heavy-duty iron with premium stainless steel plate.'
  },
  {
    id: 'water-pump-801',
    name: '801 Water Pump',
    category: 'water-dispensers',
    specifications: ['Voltage: 220V', 'Flow Rate: 2L/min'],
    unitPrice: 306,
    cartonQuantity: 24,
    cartonPrice: 7344,
    colors: ['Black', 'White'],
    image: '/images/products/water-pump-801.jpg',
    description: 'Reliable water pump for dispensers and coolers.'
  },
  {
    id: 'water-pump-013',
    name: '013 Water Pump',
    category: 'water-dispensers',
    specifications: ['Voltage: 220V', 'Quiet operation'],
    unitPrice: 396,
    cartonQuantity: 24,
    cartonPrice: 9504,
    colors: ['White', 'Silver'],
    badge: 'best-seller',
    image: '/images/products/water-pump-013.jpg',
    description: 'Quiet and efficient water pump for water dispensers.'
  },
  {
    id: 'water-pump-h16',
    name: 'H16 Water Pump',
    category: 'water-dispensers',
    specifications: ['Voltage: 220V', 'High pressure'],
    unitPrice: 396,
    cartonQuantity: 24,
    cartonPrice: 9504,
    colors: ['Black'],
    image: '/images/products/water-pump-h16.jpg',
    description: 'High-performance pump for commercial water dispensers.'
  },
  {
    id: 'charger-universal',
    name: 'Universal Charger Head',
    category: 'chargers',
    specifications: ['Output: 5V/2A', 'Multiple port compatibility'],
    unitPrice: 269,
    cartonQuantity: 40,
    cartonPrice: 10760,
    colors: ['White', 'Black'],
    image: '/images/products/charger-universal.jpg',
    description: 'Versatile charger compatible with most devices.'
  },
  {
    id: 'charger-universal-premium',
    name: 'Universal Charger Head Premium',
    category: 'chargers',
    specifications: ['Output: 5V/3A', 'Fast charging'],
    unitPrice: 315,
    cartonQuantity: 40,
    cartonPrice: 12600,
    colors: ['White', 'Black', 'Gold'],
    badge: 'popular',
    image: '/images/products/charger-universal-premium.jpg',
    description: 'Premium fast-charging universal adapter.'
  },
  {
    id: 'charger-foldable',
    name: 'Foldable Fast Charger Head',
    category: 'chargers',
    specifications: ['Foldable design', 'Fast charging'],
    unitPrice: 360,
    cartonQuantity: 40,
    cartonPrice: 14400,
    colors: ['White', 'Black'],
    image: '/images/products/charger-foldable.jpg',
    description: 'Space-saving foldable charger for travel.'
  },
  {
    id: 'charger-foldable-premium',
    name: 'Premium Foldable Fast Charger',
    category: 'chargers',
    specifications: ['Dual port', 'Quick charge 3.0'],
    unitPrice: 530,
    cartonQuantity: 32,
    cartonPrice: 16960,
    colors: ['Black', 'Silver'],
    badge: 'new-arrival',
    image: '/images/products/charger-foldable-premium.jpg',
    description: 'High-end dual-port foldable charger with QC3.0.'
  },
  {
    id: 'cable-usb-c',
    name: 'USB to Type-C 6A Cable',
    category: 'charging-cables',
    specifications: ['6A fast charging', '1m length'],
    unitPrice: 55,
    cartonQuantity: 100,
    cartonPrice: 5500,
    colors: ['White', 'Black', 'Blue'],
    image: '/images/products/cable-usb-c.jpg',
    description: 'Fast-charging USB-C cable for modern devices.'
  },
  {
    id: 'cable-lightning',
    name: 'USB to Lightning Cable',
    category: 'charging-cables',
    specifications: ['1m length', 'Apple certified'],
    unitPrice: 72,
    cartonQuantity: 100,
    cartonPrice: 7200,
    colors: ['White', 'Black'],
    badge: 'best-seller',
    image: '/images/products/cable-lightning.jpg',
    description: 'Reliable Lightning cable for iPhone and iPad.'
  },
  {
    id: 'cable-pd-lightning',
    name: 'PD Lightning Cable',
    category: 'charging-cables',
    specifications: ['Power Delivery', '2m length'],
    unitPrice: 90,
    cartonQuantity: 80,
    cartonPrice: 7200,
    colors: ['White', 'Black'],
    image: '/images/products/cable-pd-lightning.jpg',
    description: 'Fast-charging Lightning cable with Power Delivery.'
  },
  {
    id: 'cable-pd-type-c',
    name: 'PD Type-C Cable',
    category: 'charging-cables',
    specifications: ['Power Delivery', '2m length'],
    unitPrice: 90,
    cartonQuantity: 80,
    cartonPrice: 7200,
    colors: ['White', 'Black', 'Red'],
    image: '/images/products/cable-pd-type-c.jpg',
    description: 'PD Type-C cable for fast charging.'
  },
  {
    id: 'powerbank-30k',
    name: '30,000mAh Digital Display Power Bank',
    category: 'power-banks',
    specifications: ['30000mAh', 'Digital display', 'Dual USB ports'],
    unitPrice: 1080,
    cartonQuantity: 12,
    cartonPrice: 12960,
    colors: ['Black', 'White'],
    image: '/images/products/powerbank-30k.jpg',
    description: 'High-capacity power bank with digital charge indicator.'
  },
  {
    id: 'powerbank-solar-50k',
    name: '50,000mAh Solar Power Bank',
    category: 'power-banks',
    specifications: ['50000mAh', 'Solar charging panel', 'Dual USB + Type-C'],
    unitPrice: 1979,
    cartonQuantity: 12,
    cartonPrice: 23748,
    colors: ['Black', 'Blue', 'Green'],
    badge: 'best-seller',
    image: '/images/products/powerbank-solar-50k.jpg',
    description: 'Solar-powered power bank perfect for outdoor use.'
  },
  {
    id: 'powerbank-solar-80k',
    name: '80,000mAh Solar Power Bank',
    category: 'power-banks',
    specifications: ['80000mAh', 'Solar + USB charging', 'LED flashlight'],
    unitPrice: 3600,
    cartonQuantity: 8,
    cartonPrice: 28800,
    colors: ['Black', 'Orange'],
    image: '/images/products/powerbank-solar-80k.jpg',
    description: 'Ultra-high capacity solar power bank for extended trips.'
  },
  {
    id: 'powerbank-solar-100k',
    name: '100,000mAh Solar Power Bank',
    category: 'power-banks',
    specifications: ['100000mAh', 'Solar panel', 'Multiple outputs'],
    unitPrice: 4500,
    cartonQuantity: 6,
    cartonPrice: 27000,
    colors: ['Black', 'Silver'],
    badge: 'popular',
    image: '/images/products/powerbank-solar-100k.jpg',
    description: 'Massive capacity power bank with solar charging.'
  },
  {
    id: 'powerbank-solar-160k',
    name: '160,000mAh Solar Power Bank',
    category: 'power-banks',
    specifications: ['160000mAh', 'Solar + AC charging', 'LCD display'],
    unitPrice: 5400,
    cartonQuantity: 6,
    cartonPrice: 32400,
    colors: ['Black', 'Blue'],
    image: '/images/products/powerbank-solar-160k.jpg',
    description: 'Industrial-grade power bank for large-scale needs.'
  },
  {
    id: 'powerbank-solar-10k',
    name: '10,000mAh Solar Power Bank',
    category: 'power-banks',
    specifications: ['10000mAh', 'Solar panel', 'Compact'],
    unitPrice: 540,
    cartonQuantity: 24,
    cartonPrice: 12960,
    colors: ['Black', 'White', 'Pink'],
    image: '/images/products/powerbank-solar-10k.jpg',
    description: 'Compact solar power bank for daily use.'
  },
  {
    id: 'powerbank-solar-20k',
    name: '20,000mAh Solar Power Bank',
    category: 'power-banks',
    specifications: ['20000mAh', 'Solar panel', 'Dual USB'],
    unitPrice: 630,
    cartonQuantity: 24,
    cartonPrice: 15120,
    colors: ['Black', 'Blue'],
    badge: 'popular',
    image: '/images/products/powerbank-solar-20k.jpg',
    description: 'Balanced capacity and portability with solar charging.'
  },
  {
    id: 'earphones-typec',
    name: 'Wired Earphones Type-C',
    category: 'audio-products',
    specifications: ['Type-C connector', 'In-line mic', 'Bass boost'],
    unitPrice: 145,
    cartonQuantity: 48,
    cartonPrice: 6960,
    colors: ['White', 'Black'],
    image: '/images/products/earphones-typec.jpg',
    description: 'Wired earphones with Type-C connection for modern phones.'
  },
  {
    id: 'earphones-3.5mm',
    name: 'Wired Earphones 3.5mm',
    category: 'audio-products',
    specifications: ['3.5mm jack', 'In-line controls', 'Clear sound'],
    unitPrice: 180,
    cartonQuantity: 48,
    cartonPrice: 8640,
    colors: ['White', 'Black', 'Red'],
    badge: 'best-seller',
    image: '/images/products/earphones-3.5mm.jpg',
    description: 'Universal 3.5mm earphones compatible with most devices.'
  },
  {
    id: 'earphones-w895',
    name: 'W895 Bluetooth Earphones',
    category: 'audio-products',
    specifications: ['Bluetooth 5.0', '12h battery', 'Touch controls'],
    unitPrice: 350,
    cartonQuantity: 36,
    cartonPrice: 12600,
    colors: ['Black', 'White'],
    image: '/images/products/earphones-w895.jpg',
    description: 'True wireless Bluetooth earphones with long battery life.'
  },
  {
    id: 'earphones-4th-gen',
    name: '4th Generation Bluetooth Earphones',
    category: 'audio-products',
    specifications: ['Bluetooth 5.2', '20h total battery', 'Fast charging'],
    unitPrice: 305,
    cartonQuantity: 36,
    cartonPrice: 10980,
    colors: ['White', 'Black'],
    badge: 'new-arrival',
    image: '/images/products/earphones-4th-gen.jpg',
    description: 'Latest generation Bluetooth earbuds with improved connectivity.'
  },
  {
    id: 'earphones-d4',
    name: 'D4 Leather Texture Bluetooth Earphones',
    category: 'audio-products',
    specifications: ['Leather texture design', '15h battery', 'Premium sound'],
    unitPrice: 400,
    cartonQuantity: 36,
    cartonPrice: 14400,
    colors: ['Brown', 'Black'],
    image: '/images/products/earphones-d4.jpg',
    description: 'Premium leather-textured wireless earphones.'
  },
  {
    id: 'earphones-q86',
    name: 'Q86 Camera Style Bluetooth Earphones',
    category: 'audio-products',
    specifications: ['Unique camera design', 'IPX5 water resistant', '10h battery'],
    unitPrice: 440,
    cartonQuantity: 36,
    cartonPrice: 15840,
    colors: ['Black', 'Silver'],
    image: '/images/products/earphones-q86.jpg',
    description: 'Stylish camera-inspired wireless earphones.'
  },
  {
    id: 'sofa-foldable',
    name: 'Foldable Washable Fabric Sofa',
    category: 'furniture',
    specifications: ['Converts to bed', 'Multiple sizes available', 'Washable fabric', 'Dimensions: 2m × 1m × 0.7m'],
    unitPrice: 63000,
    cartonQuantity: 1,
    cartonPrice: 63000,
    colors: ['Gray', 'Blue', 'Beige'],
    badge: 'featured',
    image: '/images/products/sofa-foldable.jpg',
    description: 'Versatile foldable sofa that converts into a bed.'
  },
  {
    id: 'rug-area',
    name: 'Area Rug',
    category: 'home-decor',
    specifications: ['Dimensions: 1.8m × 2.5m', 'Soft texture', 'Multiple patterns'],
    unitPrice: 7700,
    cartonQuantity: 1,
    cartonPrice: 7700,
    colors: ['Multi-color'],
    image: '/images/products/rug-area.jpg',
    description: 'Large area rug to enhance home décor.'
  }
]

const defaultCategories: Category[] = [
  { id: 'home-decor', name: 'Home Décor', icon: 'Image' }
]

interface ProductStore {
  categories: Category[]
  products: Product[]
  searchTerm: string
  selectedCategory: string | null
  priceRange: [number, number]
  sortBy: 'price-low' | 'price-high' | 'newest' | 'popular'
  recentlyViewed: Product[]
  setSearchTerm: (term: string) => void
  setSelectedCategory: (category: string | null) => void
  setPriceRange: (range: [number, number]) => void
  setSortBy: (sort: 'price-low' | 'price-high' | 'newest' | 'popular') => void
  addToRecentlyViewed: (product: Product) => void
  resetFilters: () => void
}

export const useProductStore = create<ProductStore>()(
  persist(
    (set, get) => ({
      categories: defaultCategories,
      products: defaultProducts,
      searchTerm: '',
      selectedCategory: null,
      priceRange: [0, 70000],
      sortBy: 'popular',
      recentlyViewed: [],
      setSearchTerm: (term) => set({ searchTerm: term }),
      setSelectedCategory: (category) => set({ selectedCategory: category }),
      setPriceRange: (range) => set({ priceRange: range }),
      setSortBy: (sort) => set({ sortBy: sort }),
      addToRecentlyViewed: (product) => {
        const current = get().recentlyViewed
        const filtered = current.filter(p => p.id !== product.id)
        set({ recentlyViewed: [product, ...filtered].slice(0, 10) })
      },
      resetFilters: () => set({
        searchTerm: '',
        selectedCategory: null,
        priceRange: [0, 70000],
        sortBy: 'popular'
      })
    }),
    {
      name: 'product-storage'
    }
  )
)