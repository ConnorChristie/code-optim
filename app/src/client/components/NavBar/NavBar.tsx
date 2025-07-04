import { Link as ReactRouterLink } from 'react-router-dom';
import { Link as WaspRouterLink, routes } from 'wasp/client/router';
import { useAuth } from 'wasp/client/auth';
import { useState, Dispatch, SetStateAction } from 'react';
import { Dialog } from '@headlessui/react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { HiBars3 } from 'react-icons/hi2';
import logo from '../../static/logo.webp';
import DropdownUser from '../../../user/DropdownUser';
import { UserMenuItems } from '../../../user/UserMenuItems';
import { useIsLandingPage } from '../../hooks/useIsLandingPage';
import { cn } from '../../cn';
import Logo from '../Logo';

export interface NavigationItem {
  name: string;
  to: string;
}

const NavLogo = () => <img className='h-8 w-8' src={logo} alt='Code Optima App' />;

export default function AppNavBar({ navigationItems }: { navigationItems: NavigationItem[] }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isLandingPage = useIsLandingPage();

  const { data: user, isLoading: isUserLoading } = useAuth();
  return (
    <header
      className={cn('absolute inset-x-0 top-0 z-50 bg-gray-900/50 backdrop-blur-lg border-b border-gray-800', {
        'shadow sticky': !isLandingPage,
      })}
    >
      <nav className='max-w-7xl mx-auto flex items-center justify-between px-6 py-4 lg:px-8' aria-label='Global'>
        <div className='flex items-center lg:flex-1'>
          <WaspRouterLink
            to={routes.LandingPageRoute.to}
            className='flex items-center -m-1.5 p-1.5 text-white duration-300 ease-in-out hover:text-indigo-400'
          >
            <Logo svgClassName="h-5 w-5" textClassName="text-base" />
          </WaspRouterLink>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-300 hover:text-white'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Open main menu</span>
            <HiBars3 className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>
        <div className='hidden lg:flex lg:gap-x-12'>{renderNavigationItems(navigationItems)}</div>
        <div className='hidden lg:flex lg:flex-1 gap-3 justify-end items-center'>
          {isUserLoading ? null : !user ? (
            <WaspRouterLink 
              to={routes.LoginRoute.to} 
              className='text-sm font-semibold leading-6 ml-3 text-gray-300 hover:text-white transition-colors duration-300'
            >
              <div className='flex items-center'>
                Log in
              </div>
            </WaspRouterLink>
          ) : (
            <div className='ml-3'>
              <DropdownUser user={user} />
            </div>
          )}
        </div>
      </nav>
      <Dialog as='div' className='lg:hidden' open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className='fixed inset-0 z-50' />
        <Dialog.Panel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900/95 backdrop-blur-lg px-6 py-6 sm:max-w-sm border-l border-gray-800'>
          <div className='flex items-center justify-between'>
            <WaspRouterLink to={routes.LandingPageRoute.to} className='-m-1.5 p-1.5'>
              <span className='sr-only'>Code Optima</span>
              <Logo svgClassName="h-8 w-8" textClassName="text-2xl" />
            </WaspRouterLink>
            <button
              type='button'
              className='-m-2.5 rounded-md p-2.5 text-gray-300 hover:text-white'
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className='sr-only'>Close menu</span>
              <AiFillCloseCircle className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-800'>
              <div className='space-y-2 py-6'>{renderNavigationItems(navigationItems, setMobileMenuOpen)}</div>
              <div className='py-6'>
                {isUserLoading ? null : !user ? (
                  <WaspRouterLink to={routes.LoginRoute.to}>
                    <div className='flex justify-end items-center text-gray-300 hover:text-white transition-colors duration-300'>
                      Log in
                    </div>
                  </WaspRouterLink>
                ) : (
                  <UserMenuItems user={user} setMobileMenuOpen={setMobileMenuOpen} />
                )}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

function renderNavigationItems(
  navigationItems: NavigationItem[],
  setMobileMenuOpen?: Dispatch<SetStateAction<boolean>>
) {
  const menuStyles = cn({
    '-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-300 hover:text-white hover:bg-gray-800/50':
      !!setMobileMenuOpen,
    'text-sm font-semibold leading-6 text-gray-300 duration-300 ease-in-out hover:text-white':
      !setMobileMenuOpen,
  });

  return navigationItems.map((item) => {
    return (
      <ReactRouterLink
        to={item.to}
        key={item.name}
        className={menuStyles}
        onClick={setMobileMenuOpen && (() => setMobileMenuOpen(false))}
      >
        {item.name}
      </ReactRouterLink>
    );
  });
}
