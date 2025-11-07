import React, { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import CategoryTabs from './components/CategoryTabs';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';

const MOCK_PRODUCTS = [
  {
    id: 1,
    name: 'Eco Cotton T-Shirt',
    price: 24.99,
    rating: 4.5,
    reviews: 128,
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1200&auto=format&fit=crop',
    category: 'Apparel',
    badge: 'Bestseller',
  },
  {
    id: 2,
    name: 'Reusable Water Bottle',
    price: 19.99,
    rating: 4.8,
    reviews: 320,
    image: 'https://images.unsplash.com/photo-1623684194967-48075185a58c?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxSZXVzYWJsZSUyMFdhdGVyJTIwQm90dGxlfGVufDB8MHx8fDE3NjI1NDczNDV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    category: 'Lifestyle',
    badge: 'Sustainable',
  },
  {
    id: 3,
    name: 'Bamboo Toothbrush Set',
    price: 12.5,
    rating: 4.2,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop',
    category: 'Beauty',
  },
  {
    id: 4,
    name: 'Wireless Headphones',
    price: 149.0,
    rating: 4.7,
    reviews: 540,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxXaXJlbGVzcyUyMEhlYWRwaG9uZXN8ZW58MHwwfHx8MTc2MjQ4MjkwNXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    category: 'Electronics',
    badge: 'New',
  },
  {
    id: 5,
    name: 'Leather Backpack',
    price: 129.99,
    rating: 4.6,
    reviews: 210,
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',
    category: 'Accessories',
  },
  {
    id: 6,
    name: 'Ceramic Mug',
    price: 14.99,
    rating: 4.1,
    reviews: 64,
    image: 'https://images.unsplash.com/photo-1495100497150-fe209c585f50?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDZXJhbWljJTIwTXVnfGVufDB8MHx8fDE3NjI1NDczNDZ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    category: 'Home',
  },
];

function App() {
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = useMemo(() => Array.from(new Set(MOCK_PRODUCTS.map(p => p.category))), []);

  const handleAddToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const filtered = useMemo(() => {
    if (selectedCategory === 'All') return MOCK_PRODUCTS;
    return MOCK_PRODUCTS.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-gray-900">
      <Navbar cartCount={cart.length} />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10">
        <div className="rounded-2xl bg-gray-900 text-white p-8 md:p-12 overflow-hidden relative">
          <div className="max-w-xl">
            <h1 className="text-3xl md:text-4xl font-semibold leading-tight">Sustainable products for everyday living</h1>
            <p className="mt-3 text-gray-300">Discover curated essentials crafted with planet-friendly materials. Shop responsibly without compromising on style.</p>
            <div className="mt-6 flex gap-3">
              <a href="#shop" className="inline-flex items-center rounded-md bg-white text-gray-900 px-4 py-2 font-medium hover:bg-gray-100">Shop now</a>
              <a href="#" className="inline-flex items-center rounded-md border border-white/20 px-4 py-2 font-medium hover:bg-white/10">Learn more</a>
            </div>
          </div>
          <div className="pointer-events-none absolute -right-10 -bottom-10 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
        </div>
      </section>

      <section id="shop" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h2 className="text-xl font-semibold">Featured products</h2>
          <CategoryTabs
            categories={categories}
            selected={selectedCategory}
            onSelect={setSelectedCategory}
          />
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16">
        <div className="rounded-xl border bg-white p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <h3 className="text-lg font-semibold">Join our newsletter</h3>
            <p className="text-sm text-gray-600 mt-1">Be the first to know about new drops and exclusive offers.</p>
          </div>
          <form className="flex w-full md:w-auto gap-2">
            <input
              type="email"
              required
              placeholder="you@example.com"
              className="w-full md:w-72 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black/60"
            />
            <button type="submit" className="rounded-md bg-black px-4 py-2 text-white hover:bg-gray-900">Subscribe</button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
