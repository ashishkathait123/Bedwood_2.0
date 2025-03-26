import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const sortOptions = [
  { value: '1', label: 'Price (Low to High)' },
  { value: '-1', label: 'Price (High to Low)' }
];

const layoutOptions = ['1x1', '2x2', '3x3', '4x4'];

const ListHeader = ({ selectedSortOption, onSortChange, selectedLayout, onLayoutChange }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sort, setSort] = useState(searchParams.get('sort') || selectedSortOption);
  const [layout, setLayout] = useState(selectedLayout);

  useEffect(() => {
    setSearchParams((prev) => {
      prev.set('sort', sort);
      return prev;
    });
  }, [sort, setSearchParams]);

  const handleSortChange = (e) => {
    const newSort = e.target.value;
    setSort(newSort);
    onSortChange(newSort);
  };

  const handleLayoutChange = (layoutOption) => {
    setLayout(layoutOption);
    onLayoutChange(layoutOption);
  };

  return (
    <div className="sticky top-0 bg-orange-50 shadow-md z-30 p-4 flex flex-col md:flex-row justify-between items-center gap-4">
      {/* Sort Selection */}
      <div className="flex items-center space-x-2">
        <label htmlFor="sort" className="text-black text-sm">Sort by:</label>
        <select
          id="sort"
          value={sort}
          onChange={handleSortChange}
          className="px-4 py-2 rounded-lg bg-white border text-gray-800 text-sm"
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>

      {/* Layout Options */}
      <div className="flex items-center gap-2 overflow-x-auto">
        {layoutOptions.map((option) => (
          <button
            key={option}
            onClick={() => handleLayoutChange(option)}
            className={`px-2 py-2 border rounded-lg text-xs ${layout === option ? 'bg-orange-200' : 'bg-white'} text-black`}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Catalog Link */}
      <Link to="/catalogs" className="group relative">
        <button className="bg-white border md:w-10 md:h-10 h-8 w-8 flex justify-center items-center rounded-lg hover:text-orange-500 hover:translate-y-1 transition-transform duration-300">
          <svg className="w-6 h-6" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" strokeLinejoin="round" strokeLinecap="round" />
          </svg>
        </button>
        <span className="absolute w-20 text-center -bottom-12 left-[50%] -translate-x-[50%] origin-bottom tracking-wider z-20 scale-0 px-1 rounded-lg bg-white text-orange-500 py-2 text-sm transition-transform duration-300 ease-in-out group-hover:scale-100">
          Catalog
        </span>
      </Link>
    </div>
  );
};

export default ListHeader;
