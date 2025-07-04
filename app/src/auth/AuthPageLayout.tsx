import { ReactNode } from 'react';

export function AuthPageLayout({children} : {children: ReactNode }) {
  return (
    <div className='flex min-h-[calc(100vh-8rem)] flex-col justify-center pt-10 sm:px-6 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-md'>
        <div className='py-8 px-4 shadow-xl ring-1 ring-gray-800 sm:rounded-lg sm:px-10 bg-gray-900/50 backdrop-blur-lg'>
          <div className='-mt-8 text-white'>
            { children }
          </div>
        </div>
      </div>
    </div>
  );
}
