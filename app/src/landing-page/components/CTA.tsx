import { GithubMarketplaceUrl } from '../../shared/common';
import { FaGithub } from 'react-icons/fa';

export default function CTA() {
  return (
    <div className='mt-10 flex items-center justify-center gap-x-6'>
      <a
        href={GithubMarketplaceUrl}
        className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
      >
        <div className='flex items-center gap-x-2'>
          <FaGithub className='h-5 w-5' />
          <span>Install from GitHub Marketplace</span>
        </div>
      </a>
    </div>
  );
} 