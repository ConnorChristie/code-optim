import React from 'react';

export default function Section({
  className,
  children,
  id,
}: {
  className?: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <div id={id} className={`relative ${className}`}>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>{children}</div>
    </div>
  );
} 