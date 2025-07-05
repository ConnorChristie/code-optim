'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { addToWaitlist } from '@/app/actions/waitlist';

const Waitlist = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [githubUrl, setGithubUrl] = useState('');
  const [showGithubField, setShowGithubField] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await addToWaitlist({ email, githubUrl });
      router.push('/waitlist-thank-you');
    } catch (err: any) {
      console.error(err);
      window.alert('Error: ' + err.message);
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='w-full max-w-md'>
      <div className='flex flex-col gap-y-3'>
        <div 
          className='transform transition-all duration-300 ease-in-out'
        >
          <div className='flex gap-x-3 p-1.5 rounded-2xl bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500 transition-all duration-300 focus-within:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/20'>
            <input
              className='flex-1 bg-transparent border-0 text-white placeholder-gray-400 px-3 py-2.5 text-sm focus:outline-none focus:ring-0 outline-none ring-0 appearance-none transition-all duration-300'
              type='email'
              placeholder='Enter your email'
              aria-label='Email address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setShowGithubField(true)}
              required
            />
          </div>
        </div>
        <div 
          className={`transform transition-all duration-500 ease-out overflow-hidden ${
            showGithubField 
              ? 'max-h-[60px] opacity-100' 
              : 'max-h-0 opacity-0'
          }`}
        >
          <div className='flex gap-x-3 p-1.5 rounded-2xl bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500 transition-all duration-300 focus-within:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/20'>
            <input
              className='flex-1 bg-transparent border-0 text-white placeholder-gray-400 px-3 py-2.5 text-sm focus:outline-none focus:ring-0 outline-none ring-0 appearance-none transition-all duration-300'
              type='url'
              placeholder='Which project do you want to optimize? (optional)'
              aria-label='GitHub project URL'
              value={githubUrl}
              onChange={(e) => setGithubUrl(e.target.value)}
            />
          </div>
        </div>
        <button
          className={`rounded-xl bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 text-white px-5 py-2.5 text-sm font-semibold shadow-sm transition-all duration-300 transform hover:scale-102 hover:shadow-lg hover:shadow-indigo-500/30 active:scale-98 ${
            isSubmitting ? 'animate-pulse cursor-not-allowed opacity-75' : 'hover:opacity-90'
          }`}
          type='submit'
          disabled={isSubmitting}
        >
          <span className='flex items-center justify-center gap-2'>
            {isSubmitting ? (
              <>
                <svg className='animate-spin h-4 w-4' viewBox='0 0 24 24'>
                  <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' fill='none' />
                  <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z' />
                </svg>
                <span>Joining...</span>
              </>
            ) : (
              'Join Waitlist'
            )}
          </span>
        </button>
      </div>
    </form>
  );
};

export default Waitlist;
