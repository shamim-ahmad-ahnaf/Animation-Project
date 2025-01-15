import React from 'react';
import Srtripe from './Srtripe';

export default function App() {
  const data = [
    { 
      url: "https://cdn.prod.website-files.com/64f8f2818d8314c16c584367/64f8f2818d8314c16c584424_mondaycom-black.svg", 
      number: 48,
      link: "https://www.monday.com" 
    },
    { 
      url: "https://www.f-cdn.com/assets/main/en/assets/freelancer-logo-light.svg", 
      number: 2, 
      link: "https://www.freelancer.com"
    },
    { 
      url: "https://cdn.prod.website-files.com/64f8f2818d8314c16c584367/64f8f2818d8314c16c584421_Dropbox-black.svg", 
      number: 11, 
      link: "https://www.dropbox.com"
    },
    { 
      url: "https://cdn.prod.website-files.com/64f8f2818d8314c16c584367/64f8f2818d8314c16c584426_Upwork-black.svg", 
      number: 48, 
      link: "https://www.upwork.com"
    },
    { 
      url: "https://cdn.prod.website-files.com/64f8f2818d8314c16c584367/64f8f2818d8314c16c5843b5_logo-ncr.svg", 
      number: 2, 
      link: "https://www.guru.com"
    },
    { 
      url: "https://cdn.prod.website-files.com/64f8f2818d8314c16c584367/6513721385cccf8c5e238fdd_Name%3DABM%20Industries%2C%20Mode%3DDark.svg", 
      number: 11, 
      link: "https://www.peopleperhour.com"
    }
  ];

  return (
    <div className="w-full px-4 py-2 mt-24">
    <h1 className="text-4xl font-bold text-center text-orange-400 mb-28">Freelance Platforms to Boost Your Career</h1>
      <div className="grid grid-cols-2 gap-4 mx-auto sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {data.map((elem, index) => (
          <a 
            key={index} 
            href={elem.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-between px-6 py-4 transition duration-300 transform border-t-2 border-b-2 border-gray-300 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl"
          >
            <img src={elem.url} alt="" className="object-contain w-16 h-8 filter invert" />
            <span className="text-xl font-semibold text-white">{elem.number}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
