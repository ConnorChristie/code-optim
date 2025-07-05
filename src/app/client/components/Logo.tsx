import React from 'react';

interface LogoProps {
  svgClassName?: string;
  textClassName?: string;
}

export default function Logo({ svgClassName = '', textClassName = 'text-2xl' }: LogoProps = {}) {
  return (
    <div className="flex items-center">
      <span className={`font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 ${textClassName}`}>
        Code Optima
      </span>
    </div>
  );
} 