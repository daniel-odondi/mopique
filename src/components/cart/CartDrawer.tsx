"use client";

import React from 'react';
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetFooter 
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/store/useCartStore';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
  const { items, updateQuantity, removeItem, getTotal, getItemCount } = useCartStore();

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-md flex flex-col p-0">
        <SheetHeader className="p-6 border-b">
          <SheetTitle className="flex items-center gap-2 font-serif text-2xl">
            <ShoppingBag size={24} />
            Your Cart ({getItemCount()})
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-hidden">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center p-8 text-center">
              <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-4">
                <ShoppingBag className="text-slate-300" size={40} />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">Your cart is empty</h3>
              <p className="text-slate-500 mb-8">Looks like you haven't added any masterpieces to your collection yet.</p>
              <Button 
                onClick={onClose}
                className="bg-slate-900 hover:bg-amber-600 text-white rounded-none px-8"
              >
                Start Shopping
              </Button>
            </div>
          ) : (
            <ScrollArea className="h-full p-6">
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-24 h-24 bg-slate-100 overflow-hidden flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h4 className="font-serif font-bold text-slate-900">{item.name}</h4>
                          <button 
                            onClick={() => removeItem(item.id)}
                            className="text-slate-400 hover:text-red-500 transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                        <p className="text-xs text-slate-500 uppercase tracking-wider">{item.category}</p>
                      </div>
                      
                      <div className="flex justify-between items-center mt-2">
                        <div className="flex items-center border border-slate-200">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-slate-50 text-slate-600"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-slate-50 text-slate-600"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <p className="font-bold text-amber-700">Ksh {(item.price * item.quantity).toLocaleString()}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          )}
        </div>

        {items.length > 0 && (
          <SheetFooter className="p-6 border-t bg-slate-50 flex-col sm:flex-col gap-4">
            <div className="w-full space-y-2">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal</span>
                <span>Ksh {getTotal().toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Shipping</span>
                <span className="text-green-600 font-medium">Calculated at checkout</span>
              </div>
              <Separator className="my-2" />
              <div className="flex justify-between text-xl font-serif font-bold text-slate-900">
                <span>Total</span>
                <span>Ksh {getTotal().toLocaleString()}</span>
              </div>
            </div>
            <Button className="w-full bg-slate-900 hover:bg-amber-600 text-white rounded-none h-14 text-lg">
              Proceed to Checkout
            </Button>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;