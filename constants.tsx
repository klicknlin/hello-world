
import { Product } from './types';

export const FLAVORS = ['Vanilla Bean', 'Rich Chocolate', 'Red Velvet', 'Zesty Lemon', 'Raspberry Swirl', 'Salted Caramel'];
export const THEMES = ['Minimalist', 'Floral Garden', 'Whimsical Cartoon', 'Botanical', 'Playful Toy', 'Monochrome'];
export const LAYERS = [1, 2, 3];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'The Golden Lily Tier',
    description: 'A breathtaking two-tier masterpiece adorned with hand-placed gold leaf and fresh white lilies. Perfect for elegant weddings and sophisticated galas.',
    basePrice: 125,
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&q=80&w=800',
    category: 'cake'
  },
  {
    id: '2',
    name: 'Blueberry Gold Dust',
    description: 'A vibrant lilac-hued delight topped with fresh blueberries kissed by edible gold dust. A celebration of joy and seasonal freshness.',
    basePrice: 65,
    image: 'https://images.unsplash.com/photo-1562440499-64c9a111f713?auto=format&fit=crop&q=80&w=800',
    category: 'cake'
  },
  {
    id: '3',
    name: 'Blossom & Briar',
    description: 'Intricate floral textures meet rustic elegance. This semi-naked cake features hand-painted gold flowers and fresh pink peonies.',
    basePrice: 85,
    image: 'https://images.unsplash.com/photo-1557925923-33b27f891f88?auto=format&fit=crop&q=80&w=800',
    category: 'cake'
  },
  {
    id: '4',
    name: 'Geometric Rose',
    description: 'Modern art meets pastry. Features a unique geometric white pattern with delicate pink accents and artistic sugar sails.',
    basePrice: 75,
    image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&q=80&w=800',
    category: 'cake'
  },
  {
    id: '5',
    name: 'Artisanal Cupcake Box',
    description: 'A curated selection of 6 or 12 cupcakes, each decorated with seasonal flowers and light-as-air buttercream.',
    basePrice: 36,
    image: 'https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&q=80&w=800',
    category: 'cupcake'
  },
  {
    id: '6',
    name: 'Petite Fruit Tarts',
    description: 'Buttery shortcrust pastry filled with vanilla bean custard and topped with the finest local market fruits.',
    basePrice: 28,
    image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&q=80&w=800',
    category: 'pastry'
  }
];
