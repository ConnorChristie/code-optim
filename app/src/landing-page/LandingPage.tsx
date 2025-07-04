import Waitlist from './components/Waitlist';
import { footerNavigation } from './contentSections';
import Footer from './components/Footer';
import Logo from '../client/components/Logo';
import Features from './components/Features';

export default function LandingPage() {
  return (
    <div className='w-full text-white'>
      <div className='mx-auto max-w-[90rem]'>
        <div className='pt-14'>
          <div className='py-24 sm:py-32'>
            <div className='mx-auto px-4 sm:px-6 lg:px-8'>
              <div className='mx-auto max-w-3xl text-center'>
                <div className='flex justify-center mb-8'>
                  <Logo />
                </div>
                <h1 className='text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 sm:text-6xl'>
                  Supercharge Your Code's Performance with AI
                </h1>
                <p className='mt-6 mx-auto max-w-2xl text-lg leading-8 text-gray-300'>
                  Code Optima is your AI-powered performance co-pilot that automatically detects and fixes bottlenecks, reducing costs and improving user experience. Stop wasting time on manual optimizations.
                </p>
                <div className='mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-x-12'>
                  <div className='p-6 rounded-2xl bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500 transition-colors duration-300'>
                    <div className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400'>25x</div>
                    <div className='mt-2 text-sm text-gray-400'>Average Cost Reduction</div>
                  </div>
                  <div className='p-6 rounded-2xl bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500 transition-colors duration-300'>
                    <div className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400'>30%</div>
                    <div className='mt-2 text-sm text-gray-400'>Performance Improvement</div>
                  </div>
                  <div className='p-6 rounded-2xl bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500 transition-colors duration-300'>
                    <div className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400'>0</div>
                    <div className='mt-2 text-sm text-gray-400'>Manual Effort Required</div>
                  </div>
                </div>
                <div className='mt-10 flex items-center justify-center gap-x-6'>
                  <Waitlist />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Features />
        <Footer footerNavigation={footerNavigation} />
      </div>
    </div>
  );
}
