import React from 'react';

export default function Marquee({ imagesurl, direction }) {
  return (
    <div className="relative w-full overflow-hidden whitespace-nowrap">
      <div
        className={`flex ${
          direction === 'right' ? 'animate-marquee-right' : 'animate-marquee-left'
        }`}
        style={{ width: 'calc(200%)' }}
      >
        {/* প্রথম সেট */}
        {imagesurl.map((url, index) => (
          <img
            key={`set1-${index}`}
            className="flex-shrink-0 object-contain w-32 h-32 mx-4"
            src={url}
            alt=""
          />
        ))}

        {/* দ্বিতীয় সেট */}
        {imagesurl.map((url, index) => (
          <img
            key={`set2-${index}`}
            className="flex-shrink-0 object-contain w-32 h-32 mx-4"
            src={url}
            alt=""
          />
        ))}
      </div>
    </div>
  );
}
