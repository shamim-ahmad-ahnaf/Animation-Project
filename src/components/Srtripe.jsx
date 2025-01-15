import React from 'react';

export default function Srtripe({ val }) {
  return (
    <a href={val.link} target="_blank" rel="noopener noreferrer">
      <div className="flex items-center justify-between px-6 py-4 transition duration-300 transform border-t-2 border-b-2 border-gray-300 rounded-lg shadow-lg cursor-pointer hover:scale-105 hover:shadow-xl hover:bg-gray-700">
        <img src={val.url} alt="" className="object-contain w-16 h-8 filter invert" />
        <span className="text-xl font-semibold text-white">{val.number}</span>
      </div>
    </a>
  );
}
