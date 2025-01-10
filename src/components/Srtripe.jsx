import React from 'react';

export default function Srtripe({ val }) {
  return (
    <div className="flex items-center justify-between px-4 py-2 border-t-2 border-b-2 border-zinc-700 rounded w-[180px] sm:w-[220px] lg:w-[250px]">
      <img src={val.url} alt="" className="object-contain w-20 h-8 filter invert" />
      <span className="font-semibold">{val.number}</span>
    </div>
  );
}
