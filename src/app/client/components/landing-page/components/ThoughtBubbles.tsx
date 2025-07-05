import React from 'react';

interface ThoughtBubbleProps {
  variant?: 'desktop' | 'mobile';
}

export function ThoughtBubbles({ variant = 'desktop' }: ThoughtBubbleProps) {
  if (variant === 'mobile') {
    return <MobileThoughtBubbles />;
  }
  return <DesktopThoughtBubbles />;
}

function DesktopThoughtBubbles() {
  return (
    <div className='relative h-full min-h-[600px]'>
      <div className='absolute top-0 right-0 w-72 transform rotate-3 hover:rotate-1 transition-transform duration-300'>
        <div className='relative'>
          <div className='p-6 rounded-[2rem] bg-gradient-to-br from-indigo-900/30 to-blue-900/30 backdrop-blur-lg border border-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300 shadow-xl'>
            <div className='flex items-start justify-between mb-3'>
              <h3 className='text-lg font-semibold'>Every Millisecond Counts</h3>
            </div>
            <blockquote className='text-sm text-gray-300 italic mb-3'>
              &quot;Amazon found that just 100ms of extra latency cost them 1% in sales. Speed isn&apos;t just UX—it&apos;s revenue.&quot;
            </blockquote>
            <div className='flex items-center justify-between'>
              <div className='text-xs text-gray-400 flex gap-3'>
                <span className='text-red-400'>+100ms</span>
                <span>→</span>
                <span className='text-red-400'>-1% sales</span>
              </div>
              <a href="https://nitropack.io/blog/post/web-performance-matters-case-studies" target="_blank" rel="noopener noreferrer" className='text-indigo-400 hover:text-indigo-300'>→</a>
            </div>
          </div>
          <div className='absolute -bottom-4 left-12 w-4 h-4 bg-gradient-to-br from-indigo-900/30 to-blue-900/30 rounded-full'></div>
          <div className='absolute -bottom-6 left-8 w-3 h-3 bg-gradient-to-br from-indigo-900/30 to-blue-900/30 rounded-full'></div>
        </div>
      </div>

      <div className='absolute top-48 -left-8 w-64 transform -rotate-6 hover:-rotate-3 transition-transform duration-300'>
        <div className='relative'>
          <div className='p-5 rounded-[2.5rem] bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-lg border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 shadow-xl'>
            <h3 className='text-base font-semibold mb-2'>Speed = Conversions</h3>
            <p className='text-sm text-gray-300'>
              0.1s faster load times boosted conversions by <span className='text-indigo-400'>10%</span> in travel and <span className='text-indigo-400'>8.4%</span> in e-commerce.
            </p>
          </div>
          <div className='absolute -bottom-3 right-16 w-3 h-3 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-full'></div>
        </div>
      </div>

      <div className='absolute bottom-20 right-4 w-56 transform rotate-2 hover:rotate-0 transition-transform duration-300'>
        <div className='relative'>
          <div className='p-5 rounded-[2rem] bg-gradient-to-br from-cyan-900/30 to-teal-900/30 backdrop-blur-lg border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 shadow-xl'>
            <p className='text-sm text-gray-300 font-medium'>
              Sub-<span className='text-indigo-400'>0.3s</span> response feels instant to users.
              <br />
              <br />
              <b>That&apos;s the difference between bounce and buy.</b>
            </p>
          </div>
        </div>
      </div>

      <div className='absolute bottom-0 left-8 w-60 transform -rotate-3 hover:-rotate-1 transition-transform duration-300'>
        <div className='relative'>
          <div className='p-6 rounded-[2.5rem] bg-gradient-to-br from-indigo-900/40 to-purple-900/40 backdrop-blur-lg border border-indigo-500/40 hover:border-indigo-400/60 transition-all duration-300 shadow-xl'>
            <h3 className='text-base font-semibold mb-2'>Checkout Speed Matters</h3>
            <p className='text-sm text-gray-300'>Every 100ms faster checkout flow = <span className='text-green-400'>+1.11%</span> conversion rate. Small changes, big impact.</p>
          </div>
          <div className='absolute -top-3 right-12 w-3 h-3 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 rounded-full'></div>
          <div className='absolute -top-5 right-16 w-2 h-2 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 rounded-full'></div>
        </div>
      </div>

      <div className='absolute top-32 right-32 w-2 h-2 bg-indigo-400/30 rounded-full animate-pulse'></div>
      <div className='absolute top-64 right-8 w-3 h-3 bg-purple-400/30 rounded-full animate-pulse' style={{ animationDelay: '200ms' }}></div>
      <div className='absolute bottom-48 right-48 w-2 h-2 bg-cyan-400/30 rounded-full animate-pulse' style={{ animationDelay: '400ms' }}></div>
    </div>
  );
}

function MobileThoughtBubbles() {
  return (
    <div className='space-y-6 px-4'>
      <div className='transform hover:scale-[1.02] transition-transform duration-300'>
        <div className='relative'>
          <div className='p-6 rounded-[2rem] bg-gradient-to-br from-indigo-900/30 to-blue-900/30 backdrop-blur-lg border border-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300 shadow-xl'>
            <div className='flex items-start justify-between mb-3'>
              <h3 className='text-lg font-semibold'>Every Millisecond Counts</h3>
            </div>
            <blockquote className='text-sm text-gray-300 italic mb-3'>
              &quot;Amazon found that just 100ms of extra latency cost them 1% in sales. Speed isn&apos;t just UX—it&apos;s revenue.&quot;
            </blockquote>
            <div className='flex items-center justify-between'>
              <div className='text-xs text-gray-400 flex gap-3'>
                <span className='text-red-400'>+100ms</span>
                <span>→</span>
                <span className='text-red-400'>-1% sales</span>
              </div>
              <a href="https://nitropack.io/blog/post/web-performance-matters-case-studies" target="_blank" rel="noopener noreferrer" className='text-indigo-400 hover:text-indigo-300'>→</a>
            </div>
          </div>
        </div>
      </div>

      <div className='transform hover:scale-[1.02] transition-transform duration-300'>
        <div className='relative'>
          <div className='p-5 rounded-[2.5rem] bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-lg border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 shadow-xl'>
            <h3 className='text-base font-semibold mb-2'>Speed = Conversions</h3>
            <p className='text-sm text-gray-300'>
              0.1s faster load times boosted conversions by <span className='text-indigo-400'>10%</span> in travel and <span className='text-indigo-400'>8.4%</span> in e-commerce.
            </p>
          </div>
        </div>
      </div>

      <div className='transform hover:scale-[1.02] transition-transform duration-300'>
        <div className='relative'>
          <div className='p-5 rounded-[2rem] bg-gradient-to-br from-cyan-900/30 to-teal-900/30 backdrop-blur-lg border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 shadow-xl'>
            <p className='text-sm text-gray-300 font-medium'>
              Sub-<span className='text-indigo-400'>0.3s</span> response feels instant to users.
              <br />
              <br />
              <b>That&apos;s the difference between bounce and buy.</b>
            </p>
          </div>
        </div>
      </div>

      <div className='transform hover:scale-[1.02] transition-transform duration-300'>
        <div className='relative'>
          <div className='p-6 rounded-[2.5rem] bg-gradient-to-br from-indigo-900/40 to-purple-900/40 backdrop-blur-lg border border-indigo-500/40 hover:border-indigo-400/60 transition-all duration-300 shadow-xl'>
            <h3 className='text-base font-semibold mb-2'>Checkout Speed Matters</h3>
            <p className='text-sm text-gray-300'>Every 100ms faster checkout flow = <span className='text-green-400'>+1.11%</span> conversion rate. Small changes, big impact.</p>
          </div>
        </div>
      </div>
    </div>
  );
} 