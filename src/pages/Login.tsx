"use client";

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import { MadeWithDyad } from "@/components/made-with-dyad";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="pt-24 flex items-center justify-center min-h-[calc(100vh-80px)]">
        <div className="w-full max-w-md p-8 bg-white shadow-xl rounded-sm">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-serif font-bold text-slate-900 mb-2">Welcome Back</h1>
            <p className="text-slate-500">Sign in to your Mopique account</p>
          </div>
          
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="name@example.com" className="rounded-none" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label htmlFor="password">Password</Label>
                <button type="button" className="text-xs text-amber-600 hover:underline">Forgot password?</button>
              </div>
              <Input id="password" type="password" className="rounded-none" />
            </div>
            
            <Button className="w-full bg-slate-900 hover:bg-amber-600 text-white rounded-none h-12">
              Sign In
            </Button>
          </form>
          
          <div className="mt-8 pt-6 border-t border-slate-100 text-center">
            <p className="text-slate-600 text-sm">
              Don't have an account?{' '}
              <Link to="/register" className="text-amber-600 font-bold hover:underline">
                Create one
              </Link>
            </p>
          </div>
        </div>
      </div>
      <MadeWithDyad />
    </div>
  );
};

export default Login;