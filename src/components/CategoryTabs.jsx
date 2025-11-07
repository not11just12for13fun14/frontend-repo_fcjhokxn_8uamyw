import React from 'react';

const CategoryTabs = ({ categories, selected, onSelect }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {['All', ...categories].map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`rounded-full border px-4 py-2 text-sm transition-colors ${
            selected === cat
              ? 'bg-black text-white border-black'
              : 'bg-white text-gray-700 hover:bg-gray-50'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
