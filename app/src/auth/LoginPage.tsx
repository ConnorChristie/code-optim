import { AuthPageLayout } from './AuthPageLayout';
import { authConfig } from './authConfig';
import { FaGithub, FaGoogle } from 'react-icons/fa';

export default function Login() {
  return (
    <AuthPageLayout>
      <div className='w-full max-w-md space-y-8 px-4 pt-6'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold tracking-tight'>
            Get Started!
          </h2>
        </div>

        <div className='mt-8 space-y-4'>
          <a
            href={authConfig.gitHubSignInUrl}
            className='group relative flex w-full justify-center items-center gap-2 rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800 disabled:opacity-50 disabled:cursor-not-allowed'
          >
            <FaGithub className="w-5 h-5" />
            Sign in with GitHub
          </a>

          <a
            href={authConfig.googleSignInUrl}
            className='group relative flex w-full justify-center items-center gap-2 rounded-md bg-white border border-gray-300 px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-300 disabled:opacity-50 disabled:cursor-not-allowed'
          >
            <FaGoogle className="w-5 h-5 text-red-500" />
            Sign in with Google
          </a>
        </div>
      </div>
    </AuthPageLayout>
  );
}
