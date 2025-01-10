import React from 'react';
import { BsArrowRightCircleFill } from "react-icons/bs";

export default function Card({ width, start, para, hover }) {
    return (
        <div
            className={`p-5 rounded-xl bg-zinc-800 hover:${hover} ${width} min-h-[30rem] flex flex-col justify-between`}
        >
            {/* Upper Section */}
            <div className='w-full'>
                <div className='flex items-center justify-between w-full'>
                    <h2 className='text-base font-medium md:text-lg'>Up Next: Culture</h2>
                    <BsArrowRightCircleFill className='text-lg md:text-xl' />
                </div>
                <h1 className='mt-6 text-2xl font-medium md:mt-10 md:text-4xl'>
                    Who we are
                </h1>
            </div>

            {/* Lower Section */}
            <div className='w-full'>
                {start && (
                    <>
                        <h2 className='text-4xl font-bold tracking-tight md:text-6xl'>
                            Start a Project
                        </h2>
                        <button className='px-4 py-2 mt-6 text-sm border-2 rounded-full md:mt-8 md:text-base'>
                            Contact Us
                        </button>
                    </>
                )}

                {para && (
                    <p className='mt-4 text-xs font-medium md:text-sm text-zinc-400'>
                        Lorem ipsum dolor sit amet consectetur.
                    </p>
                )}
            </div>
        </div>
    );
}
