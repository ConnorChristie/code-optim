import { testimonials } from '../contentSections';
import Section from './Section';

export default function Testimonials() {
  return (
    <Section className='py-24 sm:py-32'>
      <div className='mx-auto max-w-2xl lg:text-center'>
        <h2 className='text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400'>Testimonials</h2>
        <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white'>
          Loved by developers from all over the world
        </p>
      </div>
      <div className='mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none'>
        <div className='-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3'>
          {testimonials.map((testimonial) => (
            <div key={testimonial.author.handle} className='pt-8 sm:inline-block sm:w-full sm:px-4'>
              <figure className='rounded-2xl bg-gray-50 p-8 text-sm leading-6 dark:bg-boxdark dark:border dark:border-strokedark'>
                <blockquote className='text-gray-900 dark:text-white'>
                  <p>{`“${testimonial.body}”`}</p>
                </blockquote>
                <figcaption className='mt-6 flex items-center gap-x-4'>
                  <img className='h-10 w-10 rounded-full bg-gray-50' src={testimonial.author.imageUrl} alt='' />
                  <div>
                    <div className='font-semibold text-gray-900 dark:text-white'>{testimonial.author.name}</div>
                    <div className='text-gray-600 dark:text-gray-400'>{`@${testimonial.author.handle}`}</div>
                  </div>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
} 