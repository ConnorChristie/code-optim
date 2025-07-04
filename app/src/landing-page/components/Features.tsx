import { features } from '../contentSections';
import Section from './Section';

export default function Features() {
  return (
    <Section className='py-12 sm:py-16' id='features'>
      <div className='mx-auto max-w-2xl lg:text-center'>
        <h2 className='text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400'>Deploy faster</h2>
        <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white'>
          Everything you need to optimize your code
        </p>
        <p className='mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400'>
          Code Optima provides a complete suite of tools to help you find and fix performance bottlenecks in your code, so you can ship faster and more reliable applications.
        </p>
      </div>

      <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl'>
        <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16'>
          {features.map((feature) => (
            <div key={feature.name} className='relative pl-16'>
              <dt className='text-base font-semibold leading-7 text-gray-900 dark:text-white'>
                <div className='absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600'>
                  <span className='text-2xl'>{feature.icon}</span>
                </div>
                {feature.name}
              </dt>
              <dd className='mt-2 text-base leading-7 text-gray-600 dark:text-gray-400'>{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
} 