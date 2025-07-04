import { faqs } from '../contentSections';
import Section from './Section';

export default function FAQ() {
  return (
    <Section className='py-24 sm:py-32' id='faq'>
      <div className='mx-auto max-w-4xl divide-y divide-gray-900/10 dark:divide-white/10'>
        <h2 className='text-2xl font-bold leading-10 tracking-tight text-gray-900 dark:text-white'>
          Frequently asked questions
        </h2>
        <dl className='mt-10 space-y-6 divide-y divide-gray-900/10 dark:divide-white/10'>
          {faqs.map((faq) => (
            <div key={faq.id} className='pt-6'>
              <dt>
                <div className='flex w-full items-start justify-between text-left text-gray-900 dark:text-white'>
                  <span className='text-base font-semibold leading-7'>{faq.question}</span>
                </div>
              </dt>
              <dd className='mt-2 pr-12'>
                <p className='text-base leading-7 text-gray-600 dark:text-gray-400'>{faq.answer}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
} 