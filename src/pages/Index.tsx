"use client";

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/home/Hero';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import { MadeWithDyad } from "@/components/made-with-dyad";
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Truck, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Features Section */}
        <section className="py-16 bg-slate-900 text-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-amber-600/20 rounded-lg">
                  <ShieldCheck className="text-amber-500" size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Premium Quality</h3>
                  <p className="text-slate-400 text-sm">Handcrafted with the finest materials to ensure lasting durability and style.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-amber-600/20 rounded-lg">
                  <Truck className="text-amber-500" size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">White Glove Delivery</h3>
                  <p className="text-slate-400 text-sm">Professional delivery and assembly service right to your doorstep.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-amber-600/20 rounded-lg">
                  <Clock className="text-amber-500" size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">24/7 Support</h3>
                  <p className="text-slate-400 text-sm">Our dedicated team is always here to help with your interior needs.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FeaturedProducts />

        {/* About Section */}
        <section className="py-24 bg-slate-50 overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2 relative">
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative z-10"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop" 
                    alt="Craftsmanship" 
                    className="rounded-sm shadow-2xl"
                  />
                </motion.div>
                <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-amber-100 -z-0 hidden lg:block" />
              </div>
              <div className="lg:w-1/2">
                <span className="text-amber-600 font-medium tracking-widest uppercase text-xs mb-4 block">Our Philosophy</span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                  Crafting Comfort, <br />Defining Elegance.
                </h2>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                  At Mopique, we believe that furniture is more than just functional objects—it's the soul of your home. Our mission is to blend traditional craftsmanship with modern aesthetics to create pieces that tell a story.
                </p>
                <div className="space-y-4 mb-10">
                  <div className="flex items-center space-x-3">
                    <div className="w-1.5 h-1.5 bg-amber-600 rounded-full" />
                    <span className="text-slate-700 font-medium">Sustainably sourced premium hardwoods</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-1.5 h-1.5 bg-amber-600 rounded-full" />
                    <span className="text-slate-700 font-medium">Custom-made designs for unique spaces</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-1.5 h-1.5 bg-amber-600 rounded-full" />
                    <span className="text-slate-700 font-medium">Lifetime warranty on structural frames</span>
                  </div>
                </div>
                <Button asChild className="bg-slate-900 hover:bg-amber-600 text-white rounded-none px-8 h-12">
                  <Link to="/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-24 bg-amber-50">
          <div className="container mx-auto px-6 text-center max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Join the Mopique Circle</h2>
            <p className="text-slate-600 mb-8">Subscribe to receive exclusive offers, interior design tips, and first access to new collections.</p>
            <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-6 py-3 bg-white border border-slate-200 focus:outline-none focus:border-amber-600"
              />
              <Button className="bg-slate-900 hover:bg-amber-600 text-white rounded-none px-8">
                Subscribe
              </Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-6">MOPIQUE</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Premium furniture for modern living. We bring elegance and comfort to every corner of your home.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-amber-500">Shop</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><Link to="/products" className="hover:text-white transition-colors">All Products</Link></li>
                <li><Link to="/products?cat=living" className="hover:text-white transition-colors">Living Room</Link></li>
                <li><Link to="/products?cat=bedroom" className="hover:text-white transition-colors">Bedroom</Link></li>
                <li><Link to="/products?cat=office" className="hover:text-white transition-colors">Office</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-amber-500">Support</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link to="/shipping" className="hover:text-white transition-colors">Shipping Policy</Link></li>
                <li><Link to="/returns" className="hover:text-white transition-colors">Returns & Exchanges</Link></li>
                <li><Link to="/faq" className="hover:text-white transition-colors">FAQs</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-amber-500">Visit Us</h4>
              <p className="text-slate-400 text-sm mb-4">
                123 Design District,<br />
                Nairobi, Kenya
              </p>
              <p className="text-slate-400 text-sm">
                Mon - Sat: 9am - 6pm<br />
                Sun: Closed
              </p>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-xs">© 2024 Mopique Elegant Furniture. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-slate-500 hover:text-white transition-colors text-xs">Instagram</a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors text-xs">Pinterest</a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors text-xs">Facebook</a>
            </div>
          </div>
        </div>
      </footer>
      
      <MadeWithDyad />
    </div>
  );
};

export default Index;