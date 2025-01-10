import React from 'react';

export default function Footer() {
    return (
        <div className='w-11/12 mx-auto'>
            <div className='flex flex-col max-w-screen-xl gap-10 py-10 mx-auto md:flex-row md:gap-32'>
                {/* Logo Section */}
                <div className='text-center basis-1/2 md:text-left'>
                    <h1 className='font-semibold leading-relaxed tracking-tighter text-6xl md:text-[12rem]'>refokus.</h1>
                </div>

                {/* Content Section */}
                <div className='flex flex-wrap gap-8 md:flex-nowrap basis-1/2'>
                    {/* Social Links Column 1 */}
                    <div className='basis-1/2'>
                        <h5 className='mb-4 text-lg md:mb-8 md:text-xl text-zinc-500'>Socials</h5>
                        {["Instagram", "Twitter (X?)", "Linkedin"].map((item, index) => (
                            <a key={index} className='block mt-2 text-zinc-500 hover:text-zinc-700'>
                                {item}
                            </a>
                        ))}
                    </div>

                    {/* Social Links Column 2 */}
                    <div className='basis-1/2'>
                        <h5 className='mb-4 text-lg md:mb-8 md:text-xl text-zinc-500'>Socials</h5>
                        {["Instagram", "Twitter (X?)", "Linkedin"].map((item, index) => (
                            <a key={index} className='block mt-2 text-zinc-500 hover:text-zinc-700'>
                                {item}
                            </a>
                        ))}
                    </div>

                    {/* Description and Image Section */}
                    <div className='text-center basis-full md:basis-1/2 md:text-right'>
                        <p className='text-sm md:text-base text-zinc-600'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur tempora eligendi error nemo facilis dolor obcaecati reprehenderit!
                        </p>
                        <img
                            className='w-24 mx-auto mt-4 md:w-32 md:mt-10 md:mx-0'
                            src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66bd4a1138d6a32addf4b6b2_premium_partner_badge_enterprise_blue.webp"
                            alt="Partner Badge"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
