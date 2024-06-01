export interface home {
  products: home_Product[]
  banner: home_Banner[]
  category: home_Category[]
  subcategory: home_Subcategory[]
}

export interface home_Product {
  id: string
  name: string
  sku_code: string
  discount: number
  mc_per_g: number
  amount: number
  discription: string
  category_id: string
  createdTime: string
  images: string[]
  retailji_product_id: string
  sub_category_id: string
}

export interface home_Banner {
  id: string
  createdTime: string
  image: string
  name: string
}

export interface home_Category {
  id: string
  createDate: string
  name: string
}

export interface home_Subcategory {
  id: string
  createDate: string
  category_id: string
  name: string
}

export interface home_page_model {
  name: string
  category_products: home_Product[]
}