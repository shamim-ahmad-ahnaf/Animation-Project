import React from 'react';
import Button from './Button';

export default function Product({ val, mover, count }) {
    return (
        <div className='w-11/12 py-20 mx-auto text-white h-[23rem]'>
            <div onMouseEnter={() => { mover(count) }} className='flex flex-col items-center justify-between max-w-screen-xl mx-auto sm:flex-row'>
                <h1 className='mb-5 text-4xl font-semibold sm:text-6xl sm:mb-0'>{val.title}</h1>
                <div className='w-full sm:w-1/3 dets'>
                    <p className='mb-5'>{val.description}</p>
                    <div className='flex flex-wrap items-center gap-5'>
                        {val.live && <Button />}
                        {val.case && <Button title="case Study" />}
                    </div>
                </div>
            </div>
        </div>
    );
}
