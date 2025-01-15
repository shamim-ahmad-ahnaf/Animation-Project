import React from 'react';
import Card from './Card';

export default function Cards() {
    return (
        <div className='w-11/12 mx-auto'>
            <div className='flex flex-col max-w-screen-xl gap-4 py-12 mx-auto md:flex-row md:gap-8 md:py-24'>
              
                <Card width={"basis-full md:basis-1/3"} start={false} para={true} />

                <Card width={"basis-full md:basis-2/3"} start={true} para={false} hover={"bg-violet-600"} />
            </div>
        </div>
    );
}
