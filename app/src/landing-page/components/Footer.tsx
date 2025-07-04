import { FaGithub, FaXTwitter } from 'react-icons/fa6';
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
    <div className='mx-auto max-w-[90rem] px-6 lg:px-8'>
      <footer
        aria-labelledby='footer-heading'
        className='relative border-t border-gray-200/10 py-8'
      >
        <h2 id='footer-heading' className='sr-only'>
          Footer
        </h2>
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-8'>
            <Logo svgClassName='h-5 w-5' textClassName='text-base' />
          </div>
          <div className='flex items-center space-x-6'>
            <a href='#' className='text-gray-400 hover:text-gray-500'>
              <span className='sr-only'>Twitter</span>
              <FaXTwitter className='h-6 w-6' />
            </a>
            <a href='https://github.com/ConnorChristie/code-optima' className='text-gray-400 hover:text-gray-500'>
              <span className='sr-only'>GitHub</span>
              <FaGithub className='h-6 w-6' />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
