import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Product, Category } from '../types'

const defaultProducts: Product[] = [
  {
    id: 'kettle-stainless-2l',
    name: '2L Stainless Steel Electric Kettle',
    category: 'kitchen-appliances',
    specifications: ["Capacity: 2.0L","Material: Stainless Steel + ABS Engineering Plastic","Max Power: 1000W-1500W","Heating Time: 6-10 minutes","Cable Length: 0.7m","Weight: 530g"],
    unitPrice: 422,
    cartonQuantity: 16,
    cartonPrice: 6752,
    colors: [],
    badge: 'best-seller',
    image: '/images/Product Images/2L STAINLESS STEEL ELECTRIC KETTLE.jpg',
    description: 'Capacity: 2.0L; Material: Stainless Steel + ABS Engineering Plastic; Max Power: 1000W-1500W; Heating Time: 6-10 minutes; Cable Length: 0.7m; Weight: 530g',
    published: true
  },
  {
    id: 'kettle-pink-2l',
    name: '2.3L Pink Plastic Electric Kettle',
    category: 'kitchen-appliances',
    specifications: ["Capacity: 2.3L","Shell Material: Stainless Steel + ABS Engineering Plastic","Max Power: 1500W-2000W","Heating Time: 6-10 minutes","Cable Length: 0.7m","Weight: 800g"],
    unitPrice: 720,
    cartonQuantity: 20,
    cartonPrice: 14400,
    colors: [],
    image: '/images/Product Images/2.3L pink plastic electric.jpg',
    description: 'Capacity: 2.3L; Shell Material: Stainless Steel + ABS Engineering Plastic; Max Power: 1500W-2000W; Heating Time: 6-10 minutes; Cable Length: 0.7m; Weight: 800g',
      published: true
  },
  {
    id: 'kettle-xiaomi-2l',
    name: '2.3L Xiaomi Green Plastic Electric Kettle',
    category: 'kitchen-appliances',
    specifications: ["Capacity: 2.3L","Material: Stainless Steel + ABS Engineering Plastic","Max Power: 1000W-1500W","Heating Time: 6-10 minutes","Cable Length: 0.7m","Weight: 800g"],
    unitPrice: 809,
    cartonQuantity: 20,
    cartonPrice: 16180,
    colors: [],
    badge: 'new-arrival',
    image: '/images/Product Images/2.3L xiaomi green plastic electric kettle.jpg',
    description: 'Capacity: 2.3L; Material: Stainless Steel + ABS Engineering Plastic; Max Power: 1000W-1500W; Heating Time: 6-10 minutes; Cable Length: 0.7m; Weight: 800g',
      published: true
  },
  {
    id: 'kettle-glass-2l',
    name: '2L Glass Electric Kettle',
    category: 'kitchen-appliances',
    specifications: ["Capacity: 1.8L","Shell Material: Stainless Steel + Glass","Max Power: 1000W-1500W","Heating Time: 6-10 minutes","Cable Length: 0.7m","Weight: 1000g"],
    unitPrice: 899,
    cartonQuantity: 12,
    cartonPrice: 10788,
    colors: [],
    image: '/images/Product Images/2L glass electric kettle.jpg',
    description: 'Capacity: 1.8L; Shell Material: Stainless Steel + Glass; Max Power: 1000W-1500W; Heating Time: 6-10 minutes; Cable Length: 0.7m; Weight: 1000g',
      published: true
  },
  {
    id: 'thermos-pot-2l',
    name: '2L Thermos Pot',
    category: 'thermos-products',
    specifications: ["Material: Inner 304, Outer 201","Dimensions: 15*15*30cm","Heat Retention: 12 - 24 hours","Capacity: 2L","Six colors available"],
    unitPrice: 629,
    cartonQuantity: 24,
    cartonPrice: 15096,
    colors: [],
    badge: 'popular',
    image: '/images/Product Images/2L thermos pot.jpeg',
    description: 'Material: Inner 304, Outer 201; Dimensions: 15*15*30cm; Heat Retention: 12 - 24 hours; Capacity: 2L; Six colors available',
      published: true
  },
  {
    id: 'thermos-cup-500ml',
    name: 'Thermos Cup (500ml)',
    category: 'thermos-products',
    specifications: ["Material: Inner 304, Outer 201","Capacity: 500ml","4 colors: Red, Steel Color, Gold, Blue","Heat Retention: 12-24 hours"],
    unitPrice: 305,
    cartonQuantity: 50,
    cartonPrice: 15250,
    colors: [],
    image: '/images/Product Images/thermos cup.jpg',
    description: 'Material: Inner 304, Outer 201; Capacity: 500ml; 4 colors: Red, Steel Color, Gold, Blue; Heat Retention: 12-24 hours',
      published: true
  },
  {
    id: 'thermos-cup-temp',
    name: 'Thermos Cup with Temperature Display',
    category: 'thermos-products',
    specifications: ["Material: Inner 304, Outer 201","Capacity: 500ml","4 colors: Gradient Pink, Gradient Green, Gradient Blue, Gradient Purple","Heat Retention: 6-12 hours","With temperature display"],
    unitPrice: 305,
    cartonQuantity: 50,
    cartonPrice: 15250,
    colors: [],
    badge: 'new-arrival',
    image: '/images/Product Images/thermos cup with temperature display.jpeg',
    description: 'Material: Inner 304, Outer 201; Capacity: 500ml; 4 colors: Gradient Pink, Gradient Green, Gradient Blue, Gradient Purple; Heat Retention: 6-12 hours; With temperature display',
      published: true
  },
  {
    id: 'thermos-set-3cup',
    name: 'Thermos Cup with 3-Cup Set',
    category: 'thermos-products',
    specifications: ["Outer Material: 201, Inner: 304","Capacity: 500ml","Heat Retention: 6-12 hours","Colors: Gray, Black, Pink, Sea Blue, Steel Color"],
    unitPrice: 359,
    cartonQuantity: 24,
    cartonPrice: 8616,
    colors: [],
    image: '/images/Product Images/thermos cup with 3-sup set.jpg',
    description: 'Outer Material: 201, Inner: 304; Capacity: 500ml; Heat Retention: 6-12 hours; Colors: Gray, Black, Pink, Sea Blue, Steel Color',
      published: true
  },
  {
    id: 'iron-compact',
    name: 'Compact Electric Iron',
    category: 'home-care-appliances',
    specifications: ["Soleplate Material: Teflon Non-Stick","Temperature Control: 5-level mechanical","Three colors: White, Red, Blue"],
    unitPrice: 540,
    cartonQuantity: 20,
    cartonPrice: 10800,
    colors: [],
    badge: 'popular',
    image: '/images/Product Images/compact electric lron.png',
    description: 'Soleplate Material: Teflon Non-Stick; Temperature Control: 5-level mechanical; Three colors: White, Red, Blue',
      published: true
  },
  {
    id: 'iron-stainless',
    name: 'Household Electric Iron',
    category: 'home-care-appliances',
    specifications: ["Soleplate Material: Teflon Non-Stick","Temperature Control: 5-level mechanical","Single color","Rated Power: 1000W"],
    unitPrice: 585,
    cartonQuantity: 20,
    cartonPrice: 11700,
    colors: [],
    image: '/images/Product Images/household electric lron.jpg',
    description: 'Soleplate Material: Teflon Non-Stick; Temperature Control: 5-level mechanical; Single color; Rated Power: 1000W',
    published: true
  },
  {
    id: 'water-pump-801',
    name: '801 Water Dispenser',
    category: 'water-dispensers',
    specifications: ["single button","colors: black white"],
    unitPrice: 306,
    cartonQuantity: 60,
    cartonPrice: 18360,
    colors: [],
    image: '/images/Product Images/801#water dispenser.jpg',
    description: 'Single button; colors: black white',
    published: true
  },
  {
    id: 'water-pump-013',
    name: '013 Water Dispenser',
    category: 'water-dispensers',
    specifications: ["single button","colors: black white"],
    unitPrice: 396,
    cartonQuantity: 60,
    cartonPrice: 23760,
    colors: [],
    badge: 'best-seller',
    image: '/images/Product Images/013water dispenser.jpg',
    description: 'Single button; colors: black white',
    published: true
  },
  {
    id: 'water-pump-h16',
    name: 'H16 Water Dispenser',
    category: 'water-dispensers',
    specifications: ["three models","single button,three buttons","colors:black,white"],
    unitPrice: 396,
    cartonQuantity: 60,
    cartonPrice: 23760,
    colors: [],
    image: '/images/Product Images/H16water dispenser.jpg',
    description: 'Three models; single button, three buttons; colors: black, white',
    published: true
  },
  {
    id: 'charger-universal',
    name: 'Universal Charger Head',
    category: 'chargers',
    specifications: ["interface: USB+PD、USB+PD+PD、 USB+USB+PD+PD"],
    unitPrice: 269,
    cartonQuantity: 500,
    cartonPrice: 134500,
    colors: [],
    image: '/images/Product Images/universal charger head.jpg',
    description: 'Interface: USB+PD, USB+PD+PD, USB+USB+PD+PD',
      published: true
  },
  {
    id: 'charger-universal-premium',
    name: 'Universal Charger Head (Premium)',
    category: 'chargers',
    specifications: ["interface: USB+PD、USB+PD+PD、 USB+USB+PD+PD"],
    unitPrice: 315,
    cartonQuantity: 500,
    cartonPrice: 157500,
    colors: [],
    badge: 'popular',
    image: '',
    description: 'Interface: USB+PD, USB+PD+PD, USB+USB+PD+PD',
      published: false
  },
  {
    id: 'charger-foldable',
    name: 'Foldable Fast Charger',
    category: 'chargers',
    specifications: ["interface: USB+PD；charging"],
    unitPrice: 360,
    cartonQuantity: 250,
    cartonPrice: 90000,
    colors: [],
    image: '',
    description: 'Interface: USB+PD; Charging',
      published: false
  },
  {
    id: 'charger-foldable-premium',
    name: 'Foldable Fast Charger Head',
    category: 'chargers',
    specifications: ["power: 12W+12W；20W+20W"],
    unitPrice: 530,
    cartonQuantity: 250,
    cartonPrice: 132500,
    colors: [],
    badge: 'new-arrival',
    image: '/images/Product Images/foldable-fast-charger-head.jpg',
    description: 'Power: 12W+12W; 20W+20W',
      published: true
  },
  {
    id: 'cable-usb-c',
    name: 'USB-TYPEC 6A Charging Cable',
    category: 'charging-cables',
    specifications: ["cable length: 1m；fast charging"],
    unitPrice: 55,
    cartonQuantity: 1000,
    cartonPrice: 55000,
    colors: [],
    image: '/images/Product Images/USB-TYPEC 6A charging cable.jpeg',
    description: 'Cable length: 1m; Fast charging',
      published: true
  },
  {
    id: 'cable-lightning',
    name: 'USB-Lightning Charging Cable',
    category: 'charging-cables',
    specifications: ["cable length: 1m；fast charging"],
    unitPrice: 72,
    cartonQuantity: 1000,
    cartonPrice: 72000,
    colors: [],
    badge: 'best-seller',
    image: '',
    description: 'Cable length: 1m; Fast charging',
      published: false
  },
  {
    id: 'cable-pd-lightning',
    name: 'PD-Lightning Charging Cable',
    category: 'charging-cables',
    specifications: ["cable length: 1m；fast charging"],
    unitPrice: 90,
    cartonQuantity: 1000,
    cartonPrice: 90000,
    colors: [],
    image: '',
    description: 'Cable length: 1m; Fast charging',
      published: false
  },
  {
    id: 'cable-pd-type-c',
    name: 'PD-TYPEC Charging Cable',
    category: 'charging-cables',
    specifications: ["cable length: 1m；fast charging"],
    unitPrice: 90,
    cartonQuantity: 1000,
    cartonPrice: 90000,
    colors: [],
    image: '/images/Product Images/PD-TYPEC-charging-cable.jpg',
    description: 'Cable length: 1m; Fast charging',
      published: true
  },
  {
    id: 'powerbank-30k',
    name: '30000mAh Digital Display Power Bank',
    category: 'power-banks',
    specifications: ["Charging Power: 10W","Charging Protocol: AFC","Battery Type: Polymer Li-ion","Capacity: 30000mAh","Dimensions: 154*74*33mm","Dual Input Triple Output","Three colors(Two carton specs)"],
    unitPrice: 1080,
    cartonQuantity: 75,
    cartonPrice: 81000,
    colors: [],
    image: '/images/Product Images/30000mahdigital display power bank.jpg',
    description: 'Charging Power: 10W; Charging Protocol: AFC; Battery Type: Polymer Li-ion; Capacity: 30000mAh; Dimensions: 154*74*33mm; Dual Input Triple Output; Three colors (Two carton specs)',
      published: true
  },
  {
    id: 'powerbank-30k-v2',
    name: '30000mAh Digital Display Power Bank (Carton 50)',
    category: 'power-banks',
    specifications: ["Charging Power: 10W","Charging Protocol: AFC","Battery Type: Polymer Li-ion","Capacity: 30000mAh","Dimensions: 154*74*33mm","Dual Input Triple Output","Three colors(Two carton specs)"],
    unitPrice: 1080,
    cartonQuantity: 50,
    cartonPrice: 54000,
    colors: [],
    image: '',
    description: 'Charging Power: 10W; Charging Protocol: AFC; Battery Type: Polymer Li-ion; Capacity: 30000mAh; Dimensions: 154*74*33mm; Dual Input Triple Output; Three colors (Two carton specs)',
    published: false
  },
  {
    id: 'powerbank-solar-50k',
    name: '50000mAh Solar Power Bank',
    category: 'power-banks',
    specifications: ["Charging Power: 22.5W","Charging Protocol: PD3.0","Battery Type: Polymer Li-ion","Capacity: 50000mAh","Dimensions: 149*71.5*43mm","Dual Input Triple Output","Two colors","LED Light"],
    unitPrice: 1979,
    cartonQuantity: 24,
    cartonPrice: 47496,
    colors: [],
    badge: 'best-seller',
    image: '',
    description: 'Charging Power: 22.5W; Charging Protocol: PD3.0; Battery Type: Polymer Li-ion; Capacity: 50000mAh; Dimensions: 149*71.5*43mm; Dual Input Triple Output; Two colors; LED Light',
      published: false
  },
  {
    id: 'powerbank-solar-80k',
    name: '80000mAh Solar Power Bank',
    category: 'power-banks',
    specifications: ["Charging Power: 22.5W","Charging Protocol: PD3.0","Battery Type: Polymer Li-ion","Capacity: 80000mAh","Dimensions: 149*71.5*43mm","Dual Input Triple Output","Two colors","LED Light"],
    unitPrice: 3600,
    cartonQuantity: 24,
    cartonPrice: 86400,
    colors: [],
    image: '',
    description: 'Charging Power: 22.5W; Charging Protocol: PD3.0; Battery Type: Polymer Li-ion; Capacity: 80000mAh; Dimensions: 149*71.5*43mm; Dual Input Triple Output; Two colors; LED Light',
      published: false
  },
  {
    id: 'powerbank-solar-100k',
    name: '100000mAh Solar Power Bank',
    category: 'power-banks',
    specifications: ["Charging Power: 22.5W","Charging Protocol: PD3.0","Battery Type: Polymer Li-ion","Capacity: 100000mAh","Dimensions: 149*71.5*43mm","Dual Input Triple Output","Two colors","LED Light"],
    unitPrice: 4500,
    cartonQuantity: 24,
    cartonPrice: 108000,
    colors: [],
    badge: 'popular',
    image: '',
    description: 'Charging Power: 22.5W; Charging Protocol: PD3.0; Battery Type: Polymer Li-ion; Capacity: 100000mAh; Dimensions: 149*71.5*43mm; Dual Input Triple Output; Two colors; LED Light',
      published: false
  },
  {
    id: 'powerbank-solar-160k',
    name: '160000mAh Solar Power Bank',
    category: 'power-banks',
    specifications: ["Charging Power: 22.5W","Charging Protocol: PD3.0","Battery Type: Polymer Li-ion","Capacity: 160000mAh","Dimensions: 149*71.5*43mm","Dual Input Triple Output","Two colors","LED Light"],
    unitPrice: 5400,
    cartonQuantity: 24,
    cartonPrice: 129600,
    colors: [],
    image: '',
    description: 'Charging Power: 22.5W; Charging Protocol: PD3.0; Battery Type: Polymer Li-ion; Capacity: 160000mAh; Dimensions: 149*71.5*43mm; Dual Input Triple Output; Two colors; LED Light',
      published: false
  },
  {
    id: 'powerbank-solar-10k',
    name: '10000mAh Solar Power Bank',
    category: 'power-banks',
    specifications: ["Charging Power: 10W","Charging Protocol: PD2.0","Battery Type: Polymer Li-ion","Capacity: 10000mAh","Dimensions: 101*66*27mm","Dual Input Triple Output","Two colors","LED Light"],
    unitPrice: 540,
    cartonQuantity: 125,
    cartonPrice: 67500,
    colors: [],
    image: '',
    description: 'Charging Power: 10W; Charging Protocol: PD2.0; Battery Type: Polymer Li-ion; Capacity: 10000mAh; Dimensions: 101*66*27mm; Dual Input Triple Output; Two colors; LED Light',
      published: false
  },
  {
    id: 'powerbank-solar-20k',
    name: '20000mAh Solar Power Bank',
    category: 'power-banks',
    specifications: ["Charging Power: 10W","Charging Protocol: PD2.0","Battery Type: Polymer Li-ion","Capacity: 20000mAh","Dimensions: 101*66*27mm","Dual Input Triple Output","Two colors","LED Light"],
    unitPrice: 630,
    cartonQuantity: 125,
    cartonPrice: 78750,
    colors: [],
    badge: 'popular',
    image: '',
    description: 'Charging Power: 10W; Charging Protocol: PD2.0; Battery Type: Polymer Li-ion; Capacity: 20000mAh; Dimensions: 101*66*27mm; Dual Input Triple Output; Two colors; LED Light',
      published: false
  },
  {
    id: 'earphones-typec',
    name: 'Wired Bluetooth Earphones (USB-C / 3.5mm)',
    category: 'audio-products',
    specifications: ["Interface: TYPE-C、3.5MMdirect plug"],
    unitPrice: 145,
    cartonQuantity: 500,
    cartonPrice: 72500,
    colors: [],
    image: '',
    description: 'Interface: TYPE-C, 3.5MM direct plug',
      published: false
  },
  {
    id: 'earphones-3.5mm',
    name: 'Wired Bluetooth Earphones (3.5mm)',
    category: 'audio-products',
    specifications: ["Interface: TYPE-C、3.5MMdirect plug"],
    unitPrice: 180,
    cartonQuantity: 500,
    cartonPrice: 90000,
    colors: [],
    badge: 'best-seller',
    image: '',
    description: 'Interface: TYPE-C, 3.5MM direct plug',
      published: false
  },
  {
    id: 'earphones-w895',
    name: 'W895 Digital Display Bluetooth Earphones',
    category: 'audio-products',
    specifications: ["range:15m","bluetooth:5.4","stereo sound","three colors"],
    unitPrice: 350,
    cartonQuantity: 100,
    cartonPrice: 35000,
    colors: [],
    image: '/images/Product Images/W895#digital display bluetooth earphones.jpg',
    description: 'Range: 15m; Bluetooth: 5.4; Stereo sound; Three colors',
      published: true
  },
  {
    id: 'earphones-4th-gen',
    name: '4th Gen Bluetooth Earphones',
    category: 'audio-products',
    specifications: ["range:15m","bluetooth:5.0","stereo sound","white"],
    unitPrice: 305,
    cartonQuantity: 100,
    cartonPrice: 30500,
    colors: [],
    badge: 'new-arrival',
    image: '/images/Product Images/4TH gen bluetooth earphones.jpg',
    description: 'Range: 15m; Bluetooth: 5.0; Stereo sound; White',
      published: true
  },
  {
    id: 'earphones-d4',
    name: 'Leather Texture Bluetooth Earphones (D4)',
    category: 'audio-products',
    specifications: ["range:15m","bluetooth:5.4","stereo sound","four colors:graphite black,cloud gray,navy blue,snow white"],
    unitPrice: 400,
    cartonQuantity: 100,
    cartonPrice: 40000,
    colors: [],
    image: '/images/Product Images/leather texture bluetooth earphones.jpg',
    description: 'Range: 15m; Bluetooth: 5.4; Stereo sound; Four colors: Graphite Black, Cloud Gray, Navy Blue, Snow White',
      published: true
  },
  {
    id: 'earphones-q86',
    name: 'Camera Style Bluetooth Earphones (Q86)',
    category: 'audio-products',
    specifications: ["range:10m","bluetooth:5.3","stereo sound","three colors","battery life:8 hours"],
    unitPrice: 440,
    cartonQuantity: 100,
    cartonPrice: 44000,
    colors: [],
    image: '',
    description: 'Range: 10m; Bluetooth: 5.3; Stereo sound; Three colors; Battery life: 8 hours',
      published: false
  },
  {
    id: 'sofa-foldable',
    name: 'Washable Fabric Sofa',
    category: 'furniture',
    specifications: ["Introduce:This sofa can be folded. It serves as a sofa for receiving guests, and can be unfolded into a bed for sleeping when needed.","Dimension:Length: 2m × Depth: 1m × Height: 0.7m (Seat height: 0.4m)","Remark:Various sizes are available. Please contact us for details."],
    unitPrice: 63000,
    cartonQuantity: 1,
    cartonPrice: 63000,
    colors: [],
    badge: 'featured',
    image: '/images/Product Images/Sofa washable fabri sofa.jpg',
    description: 'This sofa can be folded. It serves as a sofa for receiving guests, and can be unfolded into a bed for sleeping when needed. Dimension: Length: 2m x Depth: 1m x Height: 0.7m (Seat height: 0.4m). Various sizes available. Please contact us for details.',
      published: true
  },
  {
    id: 'rug-area',
    name: 'Area Rug',
    category: 'home-decor',
    specifications: ["Dimension:Length:1.8m×Width:2.5m","Remark:Various styles and colors are available. Please contact us for inquiries."],
    unitPrice: 7700,
    cartonQuantity: 1,
    cartonPrice: 7700,
    colors: [],
    image: '/images/Product Images/Rug（area rug).jpg',
    description: 'Dimension: Length: 1.8m x Width: 2.5m. Various styles and colors available. Please contact us for inquiries.',
      published: true
  },
]

const defaultCategories: Category[] = [
  { id: 'kitchen-appliances', name: 'Kitchen Appliances', icon: 'ChefHat' },
  { id: 'thermos-products', name: 'Thermos Products', icon: 'Coffee' },
  { id: 'home-care-appliances', name: 'Home Care Appliances', icon: 'Home' },
  { id: 'water-dispensers', name: 'Water Dispensers', icon: 'Droplets' },
  { id: 'chargers', name: 'Charging Accessories', icon: 'Zap' },
  { id: 'charging-cables', name: 'Charging Cables', icon: 'Cable' },
  { id: 'power-banks', name: 'Power Banks', icon: 'Battery' },
  { id: 'audio-products', name: 'Audio Accessories', icon: 'Headphones' },
  { id: 'furniture', name: 'Furniture', icon: 'Sofa' },
  { id: 'home-decor', name: 'Home Décor', icon: 'Image' },
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
      products: defaultProducts.filter(p => p.published !== false),
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
      name: 'product-storage',
      version: 2,
      migrate: (persistedState, version) => {
        if (version !== 2) {
          return undefined
        }
        return persistedState
      }
    }
  )
)
