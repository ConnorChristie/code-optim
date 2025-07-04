import './Main.css';
import NavBar from './components/NavBar/NavBar';
import CookieConsentBanner from './components/cookie-consent/Banner';
import { appNavigationItems } from './components/NavBar/contentSections';
import { landingPageNavigationItems } from '../landing-page/contentSections';
import { useMemo, useEffect } from 'react';
import { routes } from 'wasp/client/router';
import { Outlet, useLocation } from 'react-router-dom';
import { useAuth } from 'wasp/client/auth';
import { useIsLandingPage } from './hooks/useIsLandingPage';

/**
 * use this component to wrap all child components
 * this is useful for templates, themes, and context
 */
export default function App() {
  const location = useLocation();
  const { data: user } = useAuth();
  const isLandingPage = useIsLandingPage();
  const navigationItems = isLandingPage ? landingPageNavigationItems : appNavigationItems;

  const shouldDisplayAppNavBar = useMemo(() => {
    return location.pathname !== routes.LoginRoute.build() && location.pathname !== routes.SignupRoute.build();
  }, [location]);

  const isAdminDashboard = useMemo(() => {
    return location.pathname.startsWith('/admin');
  }, [location]);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView();
      }
    }
  }, [location]);

  return (
    <div className='relative min-h-screen overflow-x-hidden'>
      {/* Main background */}
      <div className='fixed inset-0 bg-gradient-to-b from-black via-gray-900 to-black'></div>
      
      {/* Speed lines background effect - Layer 1 (subtle) */}
      <div className='fixed inset-0 overflow-hidden pointer-events-none opacity-40'>
        <div className='absolute inset-0 bg-[linear-gradient(45deg,transparent_0%,rgba(68,68,68,.1)_25%,rgba(68,68,68,.2)_50%,rgba(68,68,68,.1)_75%,transparent_100%)] bg-[length:300%_300%] animate-speed-lines-slow'></div>
      </div>
      
      {/* Speed lines background effect - Layer 2 (even more subtle) */}
      <div className='fixed inset-0 overflow-hidden pointer-events-none opacity-30'>
        <div className='absolute inset-0 bg-[linear-gradient(-45deg,transparent_0%,rgba(68,68,68,.05)_25%,rgba(68,68,68,.1)_50%,rgba(68,68,68,.05)_75%,transparent_100%)] bg-[length:200%_200%] animate-speed-lines'></div>
      </div>
      
      {/* Gradient orbs with increased blur */}
      <div className='fixed top-0 left-0 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[160px] -translate-x-1/2 -translate-y-1/2 pointer-events-none'></div>
      <div className='fixed top-0 right-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[160px] translate-x-1/2 -translate-y-1/2 pointer-events-none'></div>

      {/* Content */}
      <div className='relative flex min-h-screen flex-col'>
        {isAdminDashboard ? (
          <Outlet />
        ) : (
          <>
            {shouldDisplayAppNavBar && <NavBar navigationItems={navigationItems} />}
            <div className='relative flex-grow'>
              <Outlet />
            </div>
          </>
        )}
      </div>
      
      <CookieConsentBanner />
    </div>
  );
}
