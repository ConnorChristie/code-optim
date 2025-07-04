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
      <div className='flex items-center border-b border-teal-500 py-2'>
        <input
          className='appearance-none bg-transparent border-none w-full text-white placeholder-gray-400 mr-3 py-1 px-2 leading-tight focus:outline-none focus:ring-0'
          type='email'
          placeholder='Enter your email'
          aria-label='Email address'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className='flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded'
          type='submit'
        >
          Join Waitlist
        </button>
      </div>
    </form>
  );
};

export default Waitlist;
