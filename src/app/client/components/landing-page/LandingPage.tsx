import Footer from './components/Footer';
import Logo from '../Logo';
import { ThoughtBubbles } from './components/ThoughtBubbles';
import Waitlist from './components/Waitlist';

export default function LandingPage() {
  return (
    <div className='w-full text-white'>
      <div className='mx-auto'>
        <div className='pt-6 sm:pt-10'>
          <div className='py-12 sm:py-16'>
            <div className='mx-auto px-4 sm:px-6 lg:px-8'>
              <div className='grid grid-cols-1 lg:grid-cols-5 gap-8'>
                <div className='lg:col-span-3'>
                  <div className='mx-auto text-center lg:text-left'>
                    <div className='flex justify-center lg:justify-start mb-8'>
                      <Logo />
                    </div>
                    <span className='inline-block px-4 py-1 mb-4 rounded-full text-sm font-semibold bg-indigo-600/20 text-indigo-300 backdrop-blur-lg'>Ready to Accelerate?</span>
                    <h1 className='text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 sm:text-7xl'>
                      Let&apos;s Make the Internet<br className='hidden sm:block' /> Blazing Fast!
                    </h1>
                    <p className='mt-6 mx-auto lg:mx-0 max-w-2xl text-lg leading-8 text-gray-300'>
                      We believe your time is priceless! Code Optima is your AI co-pilot that hunts down performance slowpokes, fixes them in a flash, and rockets your app to warp speed—while you focus on what you love.
                    </p>
                    <div className='mt-10'>
                      <Waitlist />
                    </div>
                  </div>
                </div>
                <div className='lg:col-span-2 space-y-6'>
                  <div className='hidden lg:block'>
                    <ThoughtBubbles variant='desktop' />
                  </div>
                  <div className='lg:hidden'>
                    <ThoughtBubbles variant='mobile' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-12 sm:mt-24 py-12 sm:py-16 border-t border-gray-800'>
          <div className='mx-auto max-w-4xl text-center px-4 sm:px-6 lg:px-8'>
            <h2 className='text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 sm:text-4xl'>
              Time is Your Most Valuable Asset
            </h2>
            <p className='mt-4 text-lg leading-8 text-gray-300'>
              Every millisecond saved is a moment gained. Our autonomous AI slices loading times, slashes cloud costs, and hands you back hours of precious dev time—all while dazzling your users with instant experiences.
            </p>
          </div>
          <div className='mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 px-4 sm:px-6 lg:px-8'>
            <div className='p-6 rounded-2xl bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500 transition-colors duration-300'>
              <h3 className='text-xl font-semibold mb-2'>Analysis Engine</h3>
              <p className='text-sm text-gray-400'>Profiling and dependency graphs reveal hidden hotspots and energy drains.</p>
            </div>
            <div className='p-6 rounded-2xl bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500 transition-colors duration-300'>
              <h3 className='text-xl font-semibold mb-2'>Optimization Engine</h3>
              <p className='text-sm text-gray-400'>LLM-powered transformations deliver safe, high-impact refactors automatically.</p>
            </div>
            <div className='p-6 rounded-2xl bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500 transition-colors duration-300'>
              <h3 className='text-xl font-semibold mb-2'>Benchmarking System</h3>
              <p className='text-sm text-gray-400'>Before-and-after metrics prove every improvement with statistical confidence.</p>
            </div>
            <div className='p-6 rounded-2xl bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500 transition-colors duration-300'>
              <h3 className='text-xl font-semibold mb-2'>Results Dashboard</h3>
              <p className='text-sm text-gray-400'>Translate speed gains into cost savings, carbon reductions, and happy users.</p>
            </div>
          </div>
          <div className='mt-12 flex items-center justify-center'>
            <Waitlist />
          </div>
        </div>
        <div className='mt-12 sm:mt-24 py-12 sm:py-16 border-t border-gray-800'>
          <div className='mx-auto max-w-4xl text-center px-4 sm:px-6 lg:px-8'>
            <h2 className='text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 sm:text-4xl'>
              Mind-Blowing Ways
              <br />
              Teams Will Win with Code Optima
            </h2>
            <p className='mt-4 text-lg leading-8 text-gray-300'>
              A sneak peek at how teams will put Code Optima to work once we launch.
            </p>
          </div>
          <div className='mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-6 lg:px-8'>
            <div className='p-6 rounded-2xl bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500 transition-colors duration-300'>
              <h3 className='text-xl font-semibold mb-2'>Hot-Spot Detection & Auto-Refactor</h3>
              <p className='text-sm text-gray-400'>Identify inefficient code paths and auto-apply streaming or memoized alternatives, cutting CPU and RAM usage dramatically.</p>
            </div>
            <div className='p-6 rounded-2xl bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500 transition-colors duration-300'>
              <h3 className='text-xl font-semibold mb-2'>SQL Query Slim-Down</h3>
              <p className='text-sm text-gray-400'>Kill N+1 issues, add smart indexes, and drop query latency from seconds to milliseconds—automatically.</p>
            </div>
            <div className='p-6 rounded-2xl bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500 transition-colors duration-300'>
              <h3 className='text-xl font-semibold mb-2'>Dependency & Bundle Trim</h3>
              <p className='text-sm text-gray-400'>Purge unused packages and split heavy modules, shrinking your bundle and accelerating page loads.</p>
            </div>
            <div className='p-6 rounded-2xl bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500 transition-colors duration-300'>
              <h3 className='text-xl font-semibold mb-2'>Memory-Safe Concurrency</h3>
              <p className='text-sm text-gray-400'>Patch goroutine or thread leaks and introduce lock-free patterns for rock-solid stability under load.</p>
            </div>
            <div className='p-6 rounded-2xl bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500 transition-colors duration-300'>
              <h3 className='text-xl font-semibold mb-2'>Continuous PR Guardrails</h3>
              <p className='text-sm text-gray-400'>Want to make sure new code doesn&apos;t cause performance regressions? Code Optima analyzes each pull request to ensure that doesn&apos;t happen.</p>
            </div>
            <div className='p-6 rounded-2xl bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500 transition-colors duration-300'>
              <h3 className='text-xl font-semibold mb-2'>Test Generation & Validation</h3>
              <p className='text-sm text-gray-400'>Auto-generate performance benchmarks and fuzz tests to prove each refactor is faster and safe.</p>
            </div>
          </div>
          <div className='mt-12 flex items-center justify-center'>
            <Waitlist />
          </div>
        </div>
        <div className='mt-12 sm:mt-24 py-12 sm:py-16 border-t border-gray-800'>
          <div className='mx-auto max-w-4xl text-center px-4 sm:px-6 lg:px-8'>
            <h2 className='text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 sm:text-4xl'>
              Under the Hood: The AI Power Loop
            </h2>
            <p className='mt-4 text-lg leading-8 text-gray-300'>
              An AI-driven feedback loop that finds the slow spots, tests them, fixes them, and proves it.
            </p>
          </div>
          <div className='mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 px-4 sm:px-6 lg:px-8'>
            <div className='p-6 rounded-2xl bg-gray-900/50 backdrop-blur-lg border border-gray-800'>
              <h3 className='text-xl font-semibold mb-2'>Observe & Detect</h3>
              <p className='text-sm text-gray-400'>LLMs analyze traces, logs, and metrics from Datadog, CloudWatch & more to flag hot&nbsp;spots.</p>
            </div>
            <div className='p-6 rounded-2xl bg-gray-900/50 backdrop-blur-lg border border-gray-800'>
              <h3 className='text-xl font-semibold mb-2'>Generate Tests</h3>
              <p className='text-sm text-gray-400'>AI writes focused unit & perf tests around the flagged code to lock in a baseline.</p>
            </div>
            <div className='p-6 rounded-2xl bg-gray-900/50 backdrop-blur-lg border border-gray-800'>
              <h3 className='text-xl font-semibold mb-2'>Optimize & Re-Test</h3>
              <p className='text-sm text-gray-400'>The model proposes refactors, applies them in a branch, then reruns the same tests.</p>
            </div>
            <div className='p-6 rounded-2xl bg-gray-900/50 backdrop-blur-lg border border-gray-800'>
              <h3 className='text-xl font-semibold mb-2'>Report & Iterate</h3>
              <p className='text-sm text-gray-400'>Side-by-side dashboards show gains; the loop continues until targets are met.</p>
            </div>
          </div>
          <div className='mt-12 flex items-center justify-center'>
            <Waitlist />
          </div>
        </div>
        <div className='mt-12 sm:mt-24 py-12 sm:py-16 border-t border-gray-800'>
          <div className='mx-auto max-w-4xl text-center px-4 sm:px-6 lg:px-8'>
            <h2 className='text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 sm:text-4xl'>
              Fueling Our Mission
            </h2>
            <p className='mt-4 text-lg leading-8 text-gray-300'>
              Discover the stories and insights that inspired Code Optima&apos;s mission to revolutionize code optimization.
            </p>
          </div>
          <div className='mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2 px-4 sm:px-6 lg:px-8'>
            <div className='p-8 rounded-2xl bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500 transition-colors duration-300'>
              <div className='flex items-start justify-between'>
                <div>
                  <h3 className='text-xl font-semibold mb-2'>Page Speed Impact on Conversions</h3>
                  <p className='text-sm text-gray-400 mb-4'>By NitroPack with Google - 2024</p>
                </div>
                <a href="https://nitropack.io/blog/post/how-page-speed-affects-conversion" target="_blank" rel="noopener noreferrer" className='text-indigo-400 hover:text-indigo-300'>Read More →</a>
              </div>
              <blockquote className='text-gray-300 italic mb-4'>
                &quot;Joint research with Google revealed that just 0.1s faster load times increased conversions by 10% in travel, 8.4% in e-commerce, and 3.6% in luxury sectors.&quot;
              </blockquote>
              <div className='mt-6 flex flex-wrap gap-2'>
                <span className='px-3 py-1 rounded-full text-xs font-medium bg-indigo-900/50 text-indigo-300'>Web Vitals</span>
                <span className='px-3 py-1 rounded-full text-xs font-medium bg-indigo-900/50 text-indigo-300'>Conversion</span>
                <span className='px-3 py-1 rounded-full text-xs font-medium bg-indigo-900/50 text-indigo-300'>UX</span>
              </div>
            </div>
            <div className='p-8 rounded-2xl bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500 transition-colors duration-300'>
              <div className='flex items-start justify-between'>
                <div>
                  <h3 className='text-xl font-semibold mb-2'>Web Performance in 2024</h3>
                  <p className='text-sm text-gray-400 mb-4'>By Shopify Performance - 2024</p>
                </div>
                <a href="https://performance.shopify.com/blogs/blog/why-web-performance-still-matters" target="_blank" rel="noopener noreferrer" className='text-indigo-400 hover:text-indigo-300'>Read More →</a>
              </div>
              <blockquote className='text-gray-300 italic mb-4'>
                &quot;Sub-0.3s response feels instant to users. Yelp saw a 15% conversion lift after making their First Contentful Paint 45% faster. Speed isn&apos;t just UX—it&apos;s equity.&quot;
              </blockquote>
              <div className='mt-6 flex flex-wrap gap-2'>
                <span className='px-3 py-1 rounded-full text-xs font-medium bg-indigo-900/50 text-indigo-300'>Psychology</span>
                <span className='px-3 py-1 rounded-full text-xs font-medium bg-indigo-900/50 text-indigo-300'>Accessibility</span>
                <span className='px-3 py-1 rounded-full text-xs font-medium bg-indigo-900/50 text-indigo-300'>Business</span>
              </div>
            </div>
            <div className='p-8 rounded-2xl bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500 transition-colors duration-300'>
              <div className='flex items-start justify-between'>
                <div>
                  <h3 className='text-xl font-semibold mb-2'>22 Performance Case Studies</h3>
                  <p className='text-sm text-gray-400 mb-4'>By NitroPack - 2023</p>
                </div>
                <a href="https://nitropack.io/blog/post/web-performance-matters-case-studies" target="_blank" rel="noopener noreferrer" className='text-indigo-400 hover:text-indigo-300'>Read More →</a>
              </div>
              <blockquote className='text-gray-300 italic mb-4'>
                &quot;Amazon found 100ms slower = 1% less sales. Walmart saw 100ms faster = 1% more revenue. Firefox gained 15% more downloads after cutting 2s load time.&quot;
              </blockquote>
              <div className='mt-6 flex flex-wrap gap-2'>
                <span className='px-3 py-1 rounded-full text-xs font-medium bg-indigo-900/50 text-indigo-300'>ROI</span>
                <span className='px-3 py-1 rounded-full text-xs font-medium bg-indigo-900/50 text-indigo-300'>Enterprise</span>
                <span className='px-3 py-1 rounded-full text-xs font-medium bg-indigo-900/50 text-indigo-300'>Revenue</span>
              </div>
              <div className='mt-4 text-sm text-gray-400'>
                <div className='flex items-center gap-4'>
                  <div className='flex items-center gap-1'>
                    <span>Time Impact:</span>
                    <span className='text-red-400'>-100ms</span>
                  </div>
                  <div className='flex items-center gap-1'>
                    <span>Revenue Impact:</span>
                    <span className='text-green-400'>+1%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='p-8 rounded-2xl bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500 transition-colors duration-300'>
              <div className='flex items-start justify-between'>
                <div>
                  <h3 className='text-xl font-semibold mb-2'>Checkout Speed Study</h3>
                  <p className='text-sm text-gray-400 mb-4'>By Cloudflare Learning - 2024</p>
                </div>
                <a href="https://www.cloudflare.com/learning/performance/more/website-performance-conversion-rates/" target="_blank" rel="noopener noreferrer" className='text-indigo-400 hover:text-indigo-300'>Read More →</a>
              </div>
              <blockquote className='text-gray-300 italic mb-4'>
                &quot;Mobify&apos;s research revealed every 100ms faster checkout flow translated to 1.11% higher conversion rate. Speed is directly tied to revenue.&quot;
              </blockquote>
              <div className='mt-6 flex flex-wrap gap-2'>
                <span className='px-3 py-1 rounded-full text-xs font-medium bg-indigo-900/50 text-indigo-300'>E-commerce</span>
                <span className='px-3 py-1 rounded-full text-xs font-medium bg-indigo-900/50 text-indigo-300'>Conversion</span>
                <span className='px-3 py-1 rounded-full text-xs font-medium bg-indigo-900/50 text-indigo-300'>Checkout</span>
              </div>
              <div className='mt-4 text-sm text-gray-400'>
                <div className='flex items-center gap-4'>
                  <div className='flex items-center gap-1'>
                    <span>Speed Gain:</span>
                    <span className='text-green-400'>-100ms</span>
                  </div>
                  <div className='flex items-center gap-1'>
                    <span>Conversion Lift:</span>
                    <span className='text-green-400'>+1.11%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
