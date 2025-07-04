import { FaGithub, FaTwitter } from 'react-icons/fa';
import Logo from '../../client/components/Logo';

interface NavigationItem {
  name: string;
  href: string;
};

export default function Footer({ footerNavigation }: {
  footerNavigation: {
    app: NavigationItem[]
    company: NavigationItem[]
  }
}) {
  return (
    <div className='mx-auto max-w-7xl px-6 lg:px-8'>
      <footer
        aria-labelledby='footer-heading'
        className='relative border-t border-gray-900/10 dark:border-gray-200/10 py-12 sm:mt-16'
      >
        <h2 id='footer-heading' className='sr-only'>
          Footer
        </h2>
        <div className='xl:grid xl:grid-cols-3 xl:gap-8'>
          <div className='space-y-8'>
            <Logo />
            <p className='text-sm leading-6 text-gray-600 dark:text-gray-400'>
              AI-powered code optimization for modern engineering teams.
            </p>
            <div className='flex space-x-6'>
              <a href='#' className='text-gray-400 hover:text-gray-500'>
                <span className='sr-only'>Twitter</span>
                <FaTwitter className='h-6 w-6' />
              </a>
              <a href='#' className='text-gray-400 hover:text-gray-500'>
                <span className='sr-only'>GitHub</span>
                <FaGithub className='h-6 w-6' />
              </a>
            </div>
          </div>
          <div className='mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0'>
            <div className='md:grid md:grid-cols-2 md:gap-8'>
              <div>
                <h3 className='text-sm font-semibold leading-6 text-gray-900 dark:text-white'>App</h3>
                <ul role='list' className='mt-6 space-y-4'>
                  {footerNavigation.app.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className='text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-white'>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='mt-10 md:mt-0'>
                <h3 className='text-sm font-semibold leading-6 text-gray-900 dark:text-white'>Company</h3>
                <ul role='list' className='mt-6 space-y-4'>
                  {footerNavigation.company.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className='text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-white'>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24'>
          <p className='text-xs leading-5 text-gray-500'>&copy; 2024 Code Optima, Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
