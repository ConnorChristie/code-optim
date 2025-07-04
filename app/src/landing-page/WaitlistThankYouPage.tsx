import { Link } from 'react-router-dom';

const WaitlistThankYouPage = () => {
  return (
    <div className='flex flex-col items-center justify-center h-full pt-16'>
      <div className='max-w-md p-8 bg-white dark:bg-boxdark shadow-lg rounded-lg text-center'>
        <h1 className='text-3xl font-bold text-gray-900 dark:text-white mb-4'>Thank You!</h1>
        <p className='text-gray-700 dark:text-gray-300 mb-6'>
          You've been added to our waitlist. We'll be in touch soon!
        </p>
        <Link
          to='/'
          className='text-teal-500 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-600 font-semibold'
        >
          &larr; Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default WaitlistThankYouPage;
