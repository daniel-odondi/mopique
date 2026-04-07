"use client";

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import { MadeWithDyad } from "@/components/made-with-dyad";

const Products = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-4xl font-serif font-bold text-slate-900 mb-4">Our Collection</h1>
          <p className="text-slate-600 max-w-2xl mb-12">
            Explore our full range of handcrafted furniture, from statement sofas to minimalist dining sets.
          </p>
          <FeaturedProducts />
          {/* We can expand this later with more products and filters */}
        </div>
      </div>
      <MadeWithDyad />
    </div>
  );
};

export default Products;