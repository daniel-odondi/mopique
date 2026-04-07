"use client";

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import { MadeWithDyad } from "@/components/made-with-dyad";

const About = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="pt-24">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-serif font-bold text-slate-900 mb-8">Our Story</h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-12">
              Mopique was founded on the belief that every home deserves to be a sanctuary of elegance and comfort. 
              What started as a small workshop in Nairobi has grown into a premier destination for high-quality, 
              handcrafted furniture.
            </p>
            <img 
              src="https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=1000&auto=format&fit=crop" 
              alt="Workshop" 
              className="w-full rounded-lg shadow-xl mb-12"
            />
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">Our Commitment</h2>
            <p className="text-slate-600 leading-relaxed">
              We source only the finest sustainable hardwoods and work with master artisans who bring decades 
              of experience to every piece. Our commitment to quality means that when you buy from Mopique, 
              you're investing in a piece that will last for generations.
            </p>
          </div>
        </div>
      </div>
      <MadeWithDyad />
    </div>
  );
};

export default About;