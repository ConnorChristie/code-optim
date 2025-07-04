import Waitlist from './components/Waitlist';
import { footerNavigation } from './contentSections';
import Footer from './components/Footer';
import Logo from '../client/components/Logo';

export default function LandingPage() {
  return (
    <div className='w-full text-white'>
      <div className='mx-auto max-w-[90rem]'>
        <div className='pt-10'>
          <div className='py-16 sm:py-24'>
            <div className='mx-auto px-4 sm:px-6 lg:px-8'>
              <div className='mx-auto max-w-3xl text-center'>
                <div className='flex justify-center mb-8'>
                  <Logo />
                </div>
                <span className='inline-block px-4 py-1 mb-4 rounded-full text-sm font-semibold bg-indigo-600/20 text-indigo-300 backdrop-blur-lg'>Concept Stage</span>
                <h1 className='text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 sm:text-7xl'>
                  Autonomous Code Optimization<br className='hidden sm:block' /> Powered by AI
                </h1>
                <p className='mt-6 mx-auto max-w-2xl text-lg leading-8 text-gray-300'>
                  We're building an AI agent that hunts performance bottlenecks, rewrites the slow bits for you, and proves the savings—before you ever hit deploy. Sign up today to help shape the future and secure early access.
                </p>
                <div className='mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-x-12'>
                  <div className='p-6 rounded-2xl bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500 transition-colors duration-300'>
                    <div className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400'>40%</div>
                    <div className='mt-2 text-sm text-gray-400'>Lower&nbsp;Cloud&nbsp;Spend* when tuned for next-gen hardware</div>
                  </div>
                  <div className='p-6 rounded-2xl bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500 transition-colors duration-300'>
                    <div className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400'>25%</div>
                    <div className='mt-2 text-sm text-gray-400'>Shorter&nbsp;p95&nbsp;Latency* if CPU-bound</div>
                  </div>
                  <div className='p-6 rounded-2xl bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500 transition-colors duration-300'>
                    <div className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400'>50h</div>
                    <div className='mt-2 text-sm text-gray-400'>User&nbsp;Time&nbsp;Saved* / 1M requests (100 ms trimmed)</div>
                  </div>
                </div>
                <p className='mt-4 text-center text-xs text-gray-500 italic'>*Illustrative examples—actual results vary.</p>
                <div className='mt-10 flex items-center justify-center'>
                  <Waitlist />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-24 py-16 border-t border-gray-800'>
          <div className='mx-auto max-w-4xl text-center px-4 sm:px-6 lg:px-8'>
            <h2 className='text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 sm:text-4xl'>
              Code Optima is Coming
            </h2>
            <p className='mt-4 text-lg leading-8 text-gray-300'>
              We are still in the concept phase, but our vision is bold: an autonomous AI that optimizes your codebase, slashes costs, and elevates user experiences—all without manual refactors.
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
        <div className='mt-24 py-16 border-t border-gray-800'>
          <div className='mx-auto max-w-4xl text-center px-4 sm:px-6 lg:px-8'>
            <h2 className='text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 sm:text-4xl'>
              Real-World Use Cases
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
              <p className='text-sm text-gray-400'>Every pull request gets an Optimization Score with inline fixes before your code hits production.</p>
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
        <div className='mt-24 py-16 border-t border-gray-800'>
          <div className='mx-auto max-w-4xl text-center px-4 sm:px-6 lg:px-8'>
            <h2 className='text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 sm:text-4xl'>
              How Code Optima Works
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
        <Footer footerNavigation={footerNavigation} />
      </div>
    </div>
  );
}
