import { useNavigate } from 'react-router-dom';
import { useAction } from 'wasp/client/operations';
import { useState } from 'react';
import { addToWaitlist } from 'wasp/client/operations';

const Waitlist = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const addToWaitlistMutation = useAction(addToWaitlist);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await addToWaitlistMutation({ email });
      navigate('/waitlist-thank-you');
    } catch (err: any) {
      console.error(err);
      window.alert('Error: ' + err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='w-full max-w-md'>
      <div className='flex gap-x-4 p-2 rounded-2xl bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500 transition-colors duration-300'>
        <input
          className='flex-1 bg-transparent border-0 text-white placeholder-gray-400 px-4 py-2 text-sm focus:outline-none focus:ring-0'
          type='email'
          placeholder='Enter your email'
          aria-label='Email address'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className='rounded-xl bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 text-white px-6 py-2 text-sm font-semibold shadow-sm hover:opacity-90 transition-opacity duration-300'
          type='submit'
        >
          Join Waitlist
        </button>
      </div>
    </form>
  );
};

export default Waitlist;
