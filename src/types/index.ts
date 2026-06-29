export interface Product {
  id: string
  name: string
  category: string
  specifications: string[]
  unitPrice: number
  cartonQuantity: number
  cartonPrice: number
  colors: string[]
  images: string[]
  badge?: 'best-seller' | 'popular' | 'new-arrival' | 'featured' | 'limited' | 'wholesale' | 'fast-selling' | 'trending' | string
  description: string
  published?: boolean
}

export interface Category {
  id: string
  name: string
  icon: string
}

export interface ProductsData {
  categories: Category[]
  products: Product[]
}

export interface Testimonial {
  id: string
  name: string
  business: string
  text: string
  rating: number
  image: string
}

export interface QuoteFormData {
  name: string
  businessName: string
  phone: string
  products: string
  quantity: string
  notes: string
}