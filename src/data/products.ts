export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  features: string[];
  dimensions: string;
  material: string;
  inStock: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Velvet Tufted Sofa',
    price: 125000,
    category: 'Living Room',
    image: 'https://images.unsplash.com/photo-1550254478-ead40cc54513?q=80&w=1000&auto=format&fit=crop',
    description: 'Experience ultimate luxury with our Velvet Tufted Sofa. Handcrafted with premium velvet upholstery and deep button tufting, this piece brings a touch of classic elegance to any modern living space.',
    features: ['Deep button tufting', 'Solid hardwood frame', 'High-density foam cushions', 'Sturdy gold-finished legs'],
    dimensions: '84"W x 36"D x 32"H',
    material: 'Premium Velvet, Oak Wood',
    inStock: true
  },
  {
    id: '2',
    name: 'Oak Dining Table',
    price: 85000,
    category: 'Dining',
    image: 'https://images.unsplash.com/photo-1530018607912-eff2df114f11?q=80&w=1000&auto=format&fit=crop',
    description: 'A centerpiece for your dining room, this solid oak table combines rustic charm with minimalist design. Perfect for family gatherings and dinner parties.',
    features: ['Solid white oak construction', 'Natural oil finish', 'Seats up to 6 people', 'Tapered legs'],
    dimensions: '72"L x 36"W x 30"H',
    material: 'Solid White Oak',
    inStock: true
  },
  {
    id: '3',
    name: 'Mid-Century Armchair',
    price: 42000,
    category: 'Living Room',
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1000&auto=format&fit=crop',
    description: 'The perfect reading nook companion. This armchair features iconic mid-century lines and ergonomic support for hours of comfort.',
    features: ['Ergonomic design', 'Breathable linen fabric', 'Walnut-stained legs', 'Removable cushion cover'],
    dimensions: '30"W x 32"D x 34"H',
    material: 'Linen Blend, Walnut Wood',
    inStock: true
  },
  {
    id: '4',
    name: 'Minimalist Bed Frame',
    price: 95000,
    category: 'Bedroom',
    image: 'https://images.unsplash.com/photo-1505693419148-403bb79a9ff1?q=80&w=1000&auto=format&fit=crop',
    description: 'Transform your bedroom into a serene sanctuary. Our minimalist bed frame offers a clean aesthetic and robust support for a restful night.',
    features: ['Platform design (no box spring needed)', 'Integrated headboard', 'Hidden support legs', 'Easy assembly'],
    dimensions: 'Queen: 64"W x 84"L x 42"H',
    material: 'Engineered Wood, Steel',
    inStock: false
  },
];