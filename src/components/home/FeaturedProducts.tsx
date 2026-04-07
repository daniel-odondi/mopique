"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Heart } from 'lucide-react';

const FEATURED_PRODUCTS = [
  {
    id: '1',
    name: 'Velvet Tufted Sofa',
    price: '125,000',
    category: 'Living Room',
    image: 'https://images.unsplash.com/photo-1550254478-ead40cc54513?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: '2',
    name: 'Oak Dining Table',
    price: '85,000',
    category: 'Dining',
    image: 'https://images.unsplash.com/photo-1530018607912-eff2df114f11?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: '3',
    name: 'Mid-Century Armchair',
    price: '42,000',
    category: 'Living Room',
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: '4',
    name: 'Minimalist Bed Frame',
    price: '95,000',
    category: 'Bedroom',
    image: 'https://images.unsplash.com/photo-1505693419148-403bb79a9ff1?q=80&w=1000&auto=format&fit=crop',
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="text-amber-600 font-medium tracking-widest uppercase text-xs mb-2 block">Curated Selection</span>
            <h2 className="text-4xl font-serif font-bold text-slate-900">Featured Masterpieces</h2>
          </div>
          <Button variant="link" asChild className="text-slate-900 font-semibold p-0 h-auto hover:text-amber-600">
            <Link to="/products">View All Products —</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURED_PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-slate-100 mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-amber-600 hover:text-white transition-colors">
                    <Heart size={18} />
                  </button>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <Button className="w-full bg-slate-900 hover:bg-amber-600 text-white rounded-none">
                    <ShoppingCart size={18} className="mr-2" /> Add to Cart
                  </Button>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-slate-500 uppercase tracking-wider">{product.category}</p>
                <h3 className="font-serif font-bold text-lg text-slate-900 group-hover:text-amber-600 transition-colors">
                  <Link to={`/product/${product.id}`}>{product.name}</Link>
                </h3>
                <p className="text-amber-700 font-medium">Ksh {product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;