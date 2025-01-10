import React, { useState } from 'react';
import Product from './Product';
import { motion } from 'framer-motion';

export default function Products() {
    const products = [
        {
            title: "Arqitel",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            live: true,
            case: false,
            videoSrc: "public/y2mate.com - Nature status  whatsapp status morning short_360.mp4",
        },
        {
            title: "TTR",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            live: true,
            case: false,
            videoSrc: "public/y2mate.com - Beautiful Nature Whatsapp Status Green Environment Video New Movie Scene Jungle Status HD Shorts_720pHF.mp4",
        },
        {
            title: "YIR 2022",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            live: true,
            case: true,
            videoSrc: "public/y2mate.com - Nature view  Summer rain Rain weather  Nature 4k videos  short video_720p.mp4",
        },
        {
            title: "Yahoo!",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            live: true,
            case: true,
            videoSrc: "public/y2mate.com - The view   sunset  nature  hills shorts aesthetic songs scenery_720pHF.mp4",
        },
    ];

    const [pos, setPos] = useState(0);
    const mover = (val) => {
        setPos(val);
    };

    return (
        <div className="relative px-5 mt-32 sm:px-0">
            {products.map((val, index) => (
                <Product key={index} val={val} mover={mover} count={index} />
            ))}
            <div className="absolute top-0 w-full h-full pointer-events-none">
                <motion.div
                    initial={{ y: pos * 23, x: "-50%" }}
                    animate={{ y: pos * 23 + `rem` }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
                    className="w-[32rem] h-[23rem] bg-white absolute left-[44%] transform -translate-x-1/2 overflow-hidden"
                >
                    {products.map((product, index) => (
                        index === pos && (
                            <video
                                key={index}
                                className="absolute top-0 left-0 object-cover w-full h-full"
                                autoPlay
                                loop
                                muted
                                playsInline
                                style={{ pointerEvents: "none" }}
                            >
                                <source src={product.videoSrc} type="video/mp4" />
                            </video>
                        )
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
