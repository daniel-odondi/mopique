"use client";

import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import { MadeWithDyad } from "@/components/made-with-dyad";
import { PRODUCTS } from '@/data/products';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/store/useCartStore';
import { showSuccess } from '@/utils/toast';
import { ArrowLeft, ShoppingCart, Check, XCircle, Ruler, Info } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = PRODUCTS.find(p => p.id === id);
  const addItem = useCartStore((state) => state.addItem);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <h1 className="text-2xl font-serif font-bold mb-4">Product Not Found</h1>
        <Button asChild variant="outline">
          <Link to="/products">Back to Shop</Link>
        </Button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product);
    showSuccess(`${product.name} added to cart!`);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center text-slate-500 hover:text-amber-600 transition-colors mb-8 group"
          >
            <ArrowLeft size={18} className="mr-2 transition-transform group-hover:-translate-x-1" />
            Back
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Product Image */}
            <div className="relative aspect-square bg-slate-100 overflow-hidden rounded-sm">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <div className="mb-6">
                <Badge variant="secondary" className="mb-4 bg-amber-50 text-amber-700 border-amber-100">
                  {product.category}
                </Badge>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
                  {product.name}
                </h1>
                <p className="text-2xl font-bold text-amber-700">
                  Ksh {product.price.toLocaleString()}
                </p>
              </div>

              <div className="prose prose-slate mb-8">
                <p className="text-slate-600 text-lg leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="space-y-6 mb-10">
                <div className="flex items-center gap-3">
                  {product.inStock ? (
                    <div className="flex items-center text-green-600 text-sm font-medium">
                      <Check size={18} className="mr-1.5" /> In Stock & Ready to Ship
                    </div>
                  ) : (
                    <div className="flex items-center text-red-500 text-sm font-medium">
                      <XCircle size={18} className="mr-1.5" /> Currently Out of Stock
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-sm">
                    <Ruler size={20} className="text-slate-400 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Dimensions</p>
                      <p className="text-sm text-slate-700">{product.dimensions}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-sm">
                    <Info size={20} className="text-slate-400 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Material</p>
                      <p className="text-sm text-slate-700">{product.material}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                <Button 
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="flex-1 bg-slate-900 hover:bg-amber-600 text-white rounded-none h-14 text-lg"
                >
                  <ShoppingCart size={20} className="mr-2" /> 
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </Button>
                <Button variant="outline" className="flex-1 border-slate-200 rounded-none h-14 text-lg">
                  Add to Wishlist
                </Button>
              </div>

              <div className="mt-12 pt-8 border-t border-slate-100">
                <h3 className="font-bold text-slate-900 mb-4">Key Features</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-slate-600 text-sm">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <MadeWithDyad />
    </div>
  );
};

export default ProductDetails;