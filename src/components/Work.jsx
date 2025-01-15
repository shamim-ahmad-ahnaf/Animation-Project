import React, { useState } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';

export default function Work() {
  const [image, setImage] = useState([
    {
      url: 'https://assets.awwwards.com/awards/submissions/2023/01/63c91d237468e623901138.png',
      top: '50%',
      left: '50%',
      isActive: false,
    },
    {
      url: 'https://assets.awwwards.com/awards/submissions/2024/02/65df1bfe6f766957984273.png',
      top: '56%',
      left: '44%',
      isActive: false,
    },
    {
      url: 'https://assets.awwwards.com/awards/submissions/2022/11/6363c945646f9974570236.png',
      top: '45%',
      left: '56%',
      isActive: false,
    },
    {
      url: 'https://assets.awwwards.com/awards/submissions/2022/10/63591a1ebddc9227208774.png',
      top: '60%',
      left: '53%',
      isActive: false,
    },
    {
      url: 'https://assets.awwwards.com/awards/submissions/2022/10/6357d93c253ca036595692.png',
      top: '43%',
      left: '40%',
      isActive: false,
    },
    {
      url: 'https://assets.awwwards.com/awards/submissions/2022/10/63450e17d43c9156312604.png',
      top: '65%',
      left: '52%',
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();

  scrollYProgress.on('change', (data) => {
    function imagesShow(arr) {
      setImage((prev) =>
        prev.map((item, index) => ({
          ...item,
          isActive: arr.includes(index), 
        }))
      );
    }

    switch (Math.floor(data * 100)) {
      case 0:
        imagesShow([]);
        break;
      case 1:
        imagesShow([0, 1]);
        break;
      case 2:
        imagesShow([0, 1, 2]);
        break;
      case 3:
        imagesShow([0, 1, 2, 3]);
        break;
      case 6:
        imagesShow([0, 1, 2, 3, 4]);
        break;
      case 8:
        imagesShow([0, 1, 2, 3, 4, 5]);
        break;
      default:
        break;
    }
  });

  return (
    <div className="w-full bg-gray-900 pb-28 pt-36">
      <div className="relative w-11/12 max-w-screen-xl mx-auto text-center">
        <h1 className="text-[30vw] leading-none font-bold tracking-tight select-none text-yellow-600">Work</h1>

        <div className="absolute top-0 w-full h-full">
          {image.map(
            (img, index) =>
              img.isActive && (
                <motion.img
                  key={index}
                  src={img.url}
                  className="absolute w-64 md:w-80 lg:w-96"
                  style={{
                    top: img.top,
                    left: img.left,
                    transform: 'translate(-50%, -50%)', 
                    opacity: img.isActive ? 1 : 0,
                    transition: 'opacity 0.5s ease',
                  }}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
}
