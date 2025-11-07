import React from 'react';
import { Star } from 'lucide-react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="group rounded-xl border bg-white p-4 transition-shadow hover:shadow-lg">
      <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-sm font-medium text-gray-900 line-clamp-1">{product.name}</h3>
          <div className="mt-1 flex items-center gap-1 text-amber-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className={`h-4 w-4 ${i < Math.round(product.rating) ? 'fill-amber-400' : ''}`} />
            ))}
            <span className="ml-1 text-xs text-gray-500">({product.reviews})</span>
          </div>
          <p className="mt-2 text-lg font-semibold">${product.price.toFixed(2)}</p>
        </div>
        <button
          onClick={() => onAddToCart(product)}
          className="mt-1 inline-flex items-center rounded-md bg-black px-3 py-2 text-sm font-medium text-white hover:bg-gray-900"
        >
          Add
        </button>
      </div>
      {product.badge && (
        <span className="mt-3 inline-block rounded-full bg-green-100 px-2.5 py-1 text-xs font-medium text-green-700">
          {product.badge}
        </span>
      )}
    </div>
  );
};

export default ProductCard;
