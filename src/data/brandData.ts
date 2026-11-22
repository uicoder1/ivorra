export interface Marketplace {
  id: string
  name: string
  tagline: string
  logo: string
  url: string
  verified: boolean
  isPlaceholder?: boolean
  description: string
  features: string[]
  badgeText: string
}

export interface CollectionItem {
  id: string
  title: string
  category: string
  subtitle: string
  description: string
  image: string
  secondaryImage?: string
  highlights: string[]
  stylingTip: string
  tags: string[]
}

export interface GalleryItem {
  id: string
  title: string
  category: 'earrings' | 'necklaces' | 'anklets' | 'lifestyle' | 'accessories'
  image: string
  caption: string
  aspectRatio: string
}

export const BRAND_INFO = {
  name: 'IVORRA',
  fullName: "IVORRA | India's Leading Fashion Jewellery Brand",
  tagline: 'Jewellery That Defines Your Elegance.',
  subTagline:
    'Discover the world of IVORRA, where contemporary style meets timeless expression. Explore jewellery designed to complement every moment, every mood and every occasion.',
  foundedYear: 2024,
  founder: 'Alfiya Ahmed',
  origin: 'South Delhi – 110014, India',
  officialWebsite: 'https://ivorra.in/',
  instagram: 'https://www.instagram.com/ivorra_official/',
  linkedin: 'https://www.linkedin.com/company/ivorra-luxury/home/',
  logoUrl: '/images/logo_refined_horizontal_dark.webp',
  logoWhiteUrl: '/images/logo_refined_horizontal_white.webp',
  logoStackedDarkUrl: '/images/logo_dark.webp',
  logoStackedWhiteUrl: '/images/logo_white.webp',
  logoGoldUrl: '/images/logo_gold.webp',
  // Official jewellery campaign lifestyle photograph (enhanced high-definition master)
  heroBanner: '/images/hero_banner.webp',
  editorialModel: '/images/about_model.webp',
  lifestyleBanner: '/images/lifestyle_banner.webp'
}

export const MARKETPLACES: Marketplace[] = [
  {
    id: 'amazon',
    name: 'Amazon India',
    tagline: 'Official Brand Store on Amazon',
    logo: 'amazon',
    url: 'https://www.amazon.in/stores/IVORRA/page/8C8BB226-D8BE-45FA-9C6A-731113F664B1?lp_asin=B0HGMD9JDD&ref_=ast_bln&store_ref=bl_ast_dp_brandlogo_sto',
    verified: true,
    description: 'Explore the full verified IVORRA collection with Prime fast delivery, customer reviews, and secure checkout across India.',
    features: ['Prime Eligible', 'Verified Brand Store', 'Customer-Reviewed Quality', 'Pan-India Delivery'],
    badgeText: 'Official Brand Store'
  },
  {
    id: 'flipkart',
    name: 'Flipkart',
    tagline: 'Official Brand Listing',
    logo: 'flipkart',
    url: 'https://www.flipkart.com/orriva-12-pairs-artificial-earrings-combo-box-women-girls-alloy-jhumki-set-chandbali-earring-earring/p/itm73ffaa2f741d6?pid=ERGHPVR5G3D2YBSE&lid=LSTERGHPVR5G3D2YBSE9DYQA6&marketplace=FLIPKART&q=orriva+12+pair',
    verified: true,
    description: 'Discover popular IVORRA statement earring combos, chandbalis, and curated jewellery sets directly on Flipkart.',
    features: ['Flipkart Assured Options', 'Trending Combos', 'Festive Offerings', 'Nationwide Reach'],
    badgeText: 'Verified Listing'
  },
  {
    id: 'jiomart',
    name: 'JioMart',
    tagline: 'Official Marketplace Listing',
    logo: 'jiomart',
    url: 'https://www.jiomart.com/products?q=IVORRA',
    verified: true,
    description: 'Explore verified IVORRA jewellery collections with reliable pan-India delivery on JioMart.',
    features: ['Reliable Delivery', 'Verified Brand Products', 'Pan-India Reach'],
    badgeText: 'Verified Listing'
  },
  {
    id: 'meesho',
    name: 'Meesho',
    tagline: 'Official Meesho Storefront',
    logo: 'meesho',
    url: 'https://www.meesho.com/IVORRA?ms=2',
    verified: true,
    description: 'Direct accessible fashion jewellery collections bringing everyday sparkle and festive designs right to your doorstep.',
    features: ['Direct Value Store', 'Popular Daily Wear', 'Hassle-Free Logistics', 'Wide Regional Presence'],
    badgeText: 'Official Storefront'
  },
  {
    id: 'flagship',
    name: 'IVORRA Official Store',
    tagline: 'The Flagship Digital Destination',
    logo: 'ivorra',
    url: 'https://ivorra.in/',
    verified: true,
    description: 'The complete brand universe featuring the latest drops, brand announcements, exclusive combos, and complete catalog.',
    features: ['Full Catalog Access', 'Direct Brand Support', 'New Arrivals First', 'Exclusive Curation'],
    badgeText: 'Flagship Store'
  },
  {
    id: 'myntra',
    name: 'Myntra',
    tagline: 'Fashion Marketplace Channel',
    logo: 'myntra',
    url: 'https://www.myntra.com/',
    verified: false,
    isPlaceholder: true,
    description: 'Channel onboarding in progress. Click to register interest or explore our live verified stores on Amazon and Flipkart.',
    features: ['Curated Premium Fashion', 'Style Catalog In Pipeline', 'Coming Soon Channel'],
    badgeText: 'Expansion Channel'
  },
  {
    id: 'ajio',
    name: 'Ajio & Nykaa',
    tagline: 'Omnichannel Expansion',
    logo: 'ajio',
    url: 'https://ivorra.in/',
    verified: false,
    isPlaceholder: true,
    description: 'IVORRA is steadily expanding across India’s premier lifestyle platforms. Stay tuned for official storefront rollouts.',
    features: ['Boutique Presentation', 'Curated Edit', 'Coming Soon Channel'],
    badgeText: 'Expansion Channel'
  }
]
