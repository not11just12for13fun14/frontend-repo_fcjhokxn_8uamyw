import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-16 border-t bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-gray-600">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-black text-white font-bold">E</span>
            <span className="text-lg font-semibold tracking-tight text-gray-900">EcoMart</span>
          </div>
          <p className="mt-3">Quality products at fair prices. Sustainable choices, delivered fast.</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">Shop</h4>
          <ul className="mt-3 space-y-2">
            <li>New Arrivals</li>
            <li>Best Sellers</li>
            <li>Gift Cards</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">Company</h4>
          <ul className="mt-3 space-y-2">
            <li>About Us</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">Support</h4>
          <ul className="mt-3 space-y-2">
            <li>Help Center</li>
            <li>Shipping</li>
            <li>Returns</li>
          </ul>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-gray-500">© {new Date().getFullYear()} EcoMart. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
