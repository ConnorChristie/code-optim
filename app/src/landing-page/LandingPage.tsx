import Waitlist from './components/Waitlist';
import { footerNavigation } from './contentSections';
import Footer from './components/Footer';
import Logo from '../client/components/Logo';

export default function LandingPage() {
  return (
    <div className='bg-white dark:text-white dark:bg-boxdark-2'>
      <div className='relative isolate pt-14 w-full'>
        <div
          className='absolute top-0 right-0 -z-10 transform-gpu overflow-hidden w-full blur-3xl sm:top-0'
          aria-hidden='true'
        >
          <div
            className='aspect-[1020/880] w-[55rem] flex-none sm:right-1/4 sm:translate-x-1/2 dark:hidden bg-gradient-to-tr from-amber-400 to-purple-300 opacity-40'
            style={{
              clipPath: 'polygon(80% 20%, 90% 55%, 50% 100%, 70% 30%, 20% 50%, 50% 0)',
            }}
          />
        </div>
        <div
          className='absolute inset-x-0 top-[calc(100%-40rem)] sm:top-[calc(100%-65rem)] -z-10 transform-gpu overflow-hidden blur-3xl'
          aria-hidden='true'
        >
          <div
            className='relative aspect-[1020/880] sm:-left-3/4 sm:translate-x-1/4 dark:hidden bg-gradient-to-br from-amber-400 to-purple-300  opacity-50 w-[72.1875rem]'
            style={{
              clipPath: 'ellipse(80% 30% at 80% 50%)',
            }}
          />
        </div>
        <div className='py-24 sm:py-32'>
          <div className='mx-auto max-w-8xl px-6 lg:px-8'>
            <div className='lg:mb-18 mx-auto max-w-3xl text-center'>
              <div className='flex justify-center mb-8'>
                <Logo />
              </div>
              <h1 className='text-4xl font-bold text-gray-900 sm:text-6xl dark:text-white'>
                From Bottlenecks to Breakthroughs
              </h1>
              <p className='mt-6 mx-auto max-w-2xl text-lg leading-8 text-gray-600 dark:text-white'>
                Code Optima is an AI-powered GitHub extension that automatically finds and fixes performance bottlenecks
                in your code, so you can focus on building great features. Join our waitlist to get early access.
              </p>
              <div className='mt-10 flex items-center justify-center gap-x-6'>
                <Waitlist />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer footerNavigation={footerNavigation} />
    </div>
  );
}
