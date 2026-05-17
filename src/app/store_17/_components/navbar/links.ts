type NavLink = {
  href: string
  label: string
}

export const links: NavLink[] = [
  { href: '/store_17', label: 'StoreHome' },
  { href: '/store_17/about_17', label: 'about_17' },
  { href: '/store_17/products_17', label: 'products_17' },
  { href: '/store_17/favorites_17', label: 'favorites_17' },
  { href: '/store_17/reviews_17', label: 'reviews_17' },
  { href: '/store_17/cart_17', label: 'cart_17' },
  { href: '/store_17/orders_17', label: 'orders_17' },
]

export const linksAdmin: NavLink[] = [
  { href: '/store_17/admin_17/sales_17', label: 'dashboard_17' },
]

export const adminLinks: NavLink[] = [
  { href: '/store_17/admin_17/sales_17', label: 'sales_17' },
  { href: '/store_17/admin_17/products_17', label: 'my products_17' },
  { href: '/store_17/admin_17/products_17/create', label: 'create product_17' },
]
