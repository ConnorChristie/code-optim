import React from 'react';

interface LogoProps {
  svgClassName?: string;
  textClassName?: string;
}

export default function Logo({ svgClassName = 'h-12 w-12', textClassName = 'text-4xl' }: LogoProps = {}) {
  return (
    <div className='flex items-center space-x-2'>
      <svg
        className={`${svgClassName} text-indigo-600`}
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
        />
      </svg>
      <span className={`${textClassName} font-bold text-white`}>Code Optima</span>
    </div>
  );
} 