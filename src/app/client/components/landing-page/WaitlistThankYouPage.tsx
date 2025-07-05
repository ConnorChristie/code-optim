import Link from 'next/link';

const WaitlistThankYouPage = () => {
  return (
    <div className='flex flex-col items-center justify-center h-full pt-16'>
      <div className='max-w-md p-8 bg-gray-900/50 backdrop-blur-lg border border-gray-800 rounded-2xl text-center'>
        <h1 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 mb-4'>Thank You!</h1>
        <p className='text-gray-300 mb-6'>
          You&apos;ve been added to our waitlist. We&apos;ll be in touch soon!
        </p>
        <Link
          href='/'
          className='text-indigo-400 hover:text-indigo-300 font-semibold'
        >
          &larr; Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default WaitlistThankYouPage;
