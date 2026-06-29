import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Product, Category } from '../types'
import productsData from '../data/products.json'

const defaultProducts: Product[] = productsData.products as Product[]
const defaultCategories: Category[] = productsData.categories

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
      version: 3,
      migrate: (persistedState, version) => {
        if (version !== 3) {
          return undefined
        }
        return persistedState
      }
    }
  )
)
