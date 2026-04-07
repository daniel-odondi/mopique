"use client";

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import { MadeWithDyad } from "@/components/made-with-dyad";
import { Link } from 'react-router-dom';

const COLLECTIONS = [
  { name: 'Living Room', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop' },
  { name: 'Bedroom', image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=2070&auto=format&fit=crop' },
  { name: 'Dining', image: 'https://images.unsplash.com/photo-1617806118233-18e1674745be?q=80&w=2070&auto=format&fit=crop' },
  { name: 'Office', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop' },
];

const Collections = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-4xl font-serif font-bold text-slate-900 mb-12">Curated Collections</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {COLLECTIONS.map((col) => (
              <Link key={col.name} to={`/products?cat=${col.name.toLowerCase()}`} className="group relative h-80 overflow-hidden">
                <img 
                  src={col.image} 
                  alt={col.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-3xl font-serif font-bold text-white">{col.name}</h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <MadeWithDyad />
    </div>
  );
};

export default Collections;