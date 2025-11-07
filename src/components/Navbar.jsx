import React from 'react';
import { ShoppingCart, Search, User } from 'lucide-react';

const Navbar = ({ cartCount = 0 }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-black text-white font-bold">E</span>
            <span className="text-lg font-semibold tracking-tight">EcoMart</span>
          </div>

          <div className="hidden md:flex flex-1 max-w-xl mx-6">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full rounded-md border border-gray-300 pl-10 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-black/60"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative inline-flex items-center gap-2 rounded-md border px-3 py-2 hover:bg-gray-50">
              <ShoppingCart className="h-5 w-5" />
              <span className="hidden sm:inline">Cart</span>
              {cartCount > 0 && (
                <span className="absolute -right-2 -top-2 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-black px-1 text-xs font-medium text-white">
                  {cartCount}
                </span>
              )}
            </button>
            <button className="inline-flex items-center gap-2 rounded-md border px-3 py-2 hover:bg-gray-50">
              <User className="h-5 w-5" />
              <span className="hidden sm:inline">Account</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
