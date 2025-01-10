import React from 'react';
import Srtripe from './Srtripe';

export default function App() {
  const data = [
    { url: "https://cdn.prod.website-files.com/64f8f2818d8314c16c584367/64f8f2818d8314c16c584424_mondaycom-black.svg", number: 48 },
    { url: "https://cdn.prod.website-files.com/64f8f2818d8314c16c584367/64f8f2818d8314c16c584422_Discord-black.svg", number: 2 },
    { url: "https://cdn.prod.website-files.com/64f8f2818d8314c16c584367/64f8f2818d8314c16c584421_Dropbox-black.svg", number: 11 },
    { url: "https://cdn.prod.website-files.com/64f8f2818d8314c16c584367/64f8f2818d8314c16c584426_Upwork-black.svg", number: 48 },
    { url: "https://cdn.prod.website-files.com/64f8f2818d8314c16c584367/64f8f2818d8314c16c5843b5_logo-ncr.svg", number: 2 },
    { url: "https://cdn.prod.website-files.com/64f8f2818d8314c16c584367/6513721385cccf8c5e238fdd_Name%3DABM%20Industries%2C%20Mode%3DDark.svg", number: 11 }
  ];

  return (
    <div className="w-full px-4 py-2 mt-24">
      <div className="grid grid-cols-2 gap-4 mx-auto sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {data.map((elem, index) => (
          <Srtripe key={index} val={elem} />
        ))}
      </div>
    </div>
  );
}
