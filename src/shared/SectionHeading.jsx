import React from 'react';

const SectionHeading = ({ title, subtitle }) => {
    return (
        <div>
            <h1 className='text-3xl md:text-4xl text-center font-bold text-white '>{title}</h1>
            <p className='text-center my-2 text-gray-600 font-semibold'>{subtitle}</p>
        </div>
    );
};

export default SectionHeading;