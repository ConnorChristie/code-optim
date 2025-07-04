import { logoCloud } from '../contentSections';
import Section from './Section';

export default function LogoCloud() {
  return (
    <Section className='py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <h2 className='text-center text-lg font-semibold leading-8 text-gray-900 dark:text-white'>
          Trusted by the world's most innovative teams
        </h2>
        <div className='mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5'>
          {logoCloud.map((company) => (
            <div key={company} className='flex justify-center items-center h-12'>
              <p className='text-gray-500 dark:text-gray-400'>{company}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
} 