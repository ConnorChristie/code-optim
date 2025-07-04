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
              <div className='grid grid-cols-1 lg:grid-cols-5 gap-8'>
                <div className='lg:col-span-3'>
                  <div className='mx-auto text-center lg:text-left'>
                    <div className='flex justify-center lg:justify-start mb-8'>
                      <Logo />
                    </div>
                    <span className='inline-block px-4 py-1 mb-4 rounded-full text-sm font-semibold bg-indigo-600/20 text-indigo-300 backdrop-blur-lg'>Concept Stage</span>
                    <h1 className='text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 sm:text-7xl'>
                      Autonomous Code Optimization<br className='hidden sm:block' /> Powered by AI
                    </h1>
                    <p className='mt-6 mx-auto lg:mx-0 max-w-2xl text-lg leading-8 text-gray-300'>
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
                    <p className='mt-4 text-center lg:text-left text-xs text-gray-500 italic'>*Illustrative examples—actual results vary.</p>
                    <div className='mt-10 flex items-center justify-center lg:justify-start'>
                      <Waitlist />
                    </div>
                  </div>
                </div>
                <div className='lg:col-span-2 space-y-6'>
                  <div className='relative h-full min-h-[600px]'>
                    {/* First thought bubble - top right */}
                    <div className='absolute top-0 right-0 w-72 transform rotate-3 hover:rotate-1 transition-transform duration-300'>
                      <div className='relative'>
                        <div className='p-6 rounded-[2rem] bg-gradient-to-br from-indigo-900/30 to-blue-900/30 backdrop-blur-lg border border-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300 shadow-xl'>
                          <div className='flex items-start justify-between mb-3'>
                            <h3 className='text-lg font-semibold'>Slow builds killing productivity</h3>
                          </div>
                          <blockquote className='text-sm text-gray-300 italic mb-3'>
                            "Every code change means a coffee break. Our team was wasting hours daily just waiting for builds to finish."
                          </blockquote>
                          <div className='flex items-center justify-between'>
                            <div className='text-xs text-gray-400 flex gap-3'>
                              <span className='text-red-400'>175s</span>
                              <span>→</span>
                              <span className='text-green-400'>9.1s</span>
                            </div>
                            <a href="https://sharnoff.io/blog/why-rust-compiler-slow" target="_blank" rel="noopener noreferrer" className='text-indigo-400 hover:text-indigo-300 text-sm'>→</a>
                          </div>
                        </div>
                        {/* Thought bubble tail */}
                        <div className='absolute -bottom-4 left-12 w-4 h-4 bg-gradient-to-br from-indigo-900/30 to-blue-900/30 rounded-full'></div>
                        <div className='absolute -bottom-6 left-8 w-3 h-3 bg-gradient-to-br from-indigo-900/30 to-blue-900/30 rounded-full'></div>
                      </div>
                    </div>

                    {/* Second thought bubble - middle left */}
                    <div className='absolute top-48 -left-8 w-64 transform -rotate-6 hover:-rotate-3 transition-transform duration-300'>
                      <div className='relative'>
                        <div className='p-5 rounded-[2.5rem] bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-lg border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 shadow-xl'>
                          <h3 className='text-base font-semibold mb-2'>Tired of slow code?</h3>
                          <p className='text-sm text-gray-300'>
                            Let us pinpoint bottlenecks, fix them, and prove the savings all while you build new <span className='text-indigo-400'>features</span>.
                          </p>
                        </div>
                        {/* Thought bubble tail */}
                        <div className='absolute -bottom-3 right-16 w-3 h-3 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-full'></div>
                      </div>
                    </div>

                    {/* Third thought bubble - bottom right */}
                    <div className='absolute bottom-20 right-4 w-56 transform rotate-2 hover:rotate-0 transition-transform duration-300'>
                      <div className='relative'>
                        <div className='p-5 rounded-[2rem] bg-gradient-to-br from-cyan-900/30 to-teal-900/30 backdrop-blur-lg border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 shadow-xl'>
                          <p className='text-sm text-gray-300 font-medium'>
                            It's time to spend <b>less</b> time waiting for slow code, slow websites, and slow apps.
                            <br />
                            <br />
                            <b>Ain't nobody got <span className='text-indigo-400'>time</span> for that.</b>
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Fourth thought bubble - share your story */}
                    <div className='absolute bottom-0 left-8 w-60 transform -rotate-3 hover:-rotate-1 transition-transform duration-300'>
                      <div className='relative'>
                        <div className='p-6 rounded-[2.5rem] bg-gradient-to-br from-indigo-900/40 to-purple-900/40 backdrop-blur-lg border border-indigo-500/40 hover:border-indigo-400/60 transition-all duration-300 shadow-xl'>
                          <h3 className='text-base font-semibold mb-2'><span className='text-red-400'>Time</span> vs <span className='text-green-400'>Money</span></h3>
                          <p>Every second saved compounds into massive cost reductions at scale down the line.</p>
                        </div>
                        {/* Thought bubble tail */}
                        <div className='absolute -top-3 right-12 w-3 h-3 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 rounded-full'></div>
                        <div className='absolute -top-5 right-16 w-2 h-2 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 rounded-full'></div>
                      </div>
                    </div>

                    {/* Floating idea particles */}
                    <div className='absolute top-32 right-32 w-2 h-2 bg-indigo-400/30 rounded-full animate-pulse'></div>
                    <div className='absolute top-64 right-8 w-3 h-3 bg-purple-400/30 rounded-full animate-pulse' style={{ animationDelay: '200ms' }}></div>
                    <div className='absolute bottom-48 right-48 w-2 h-2 bg-cyan-400/30 rounded-full animate-pulse' style={{ animationDelay: '400ms' }}></div>
                  </div>
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
        <div className='mt-24 py-16 border-t border-gray-800'>
          <div className='mx-auto max-w-4xl text-center px-4 sm:px-6 lg:px-8'>
            <h2 className='text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 sm:text-4xl'>
              Inspiration & Insights
            </h2>
            <p className='mt-4 text-lg leading-8 text-gray-300'>
              Discover the stories and insights that inspired Code Optima's mission to revolutionize code optimization.
            </p>
          </div>
          <div className='mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2 px-4 sm:px-6 lg:px-8'>
            <div className='p-8 rounded-2xl bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500 transition-colors duration-300'>
              <div className='flex items-start justify-between'>
                <div>
                  <h3 className='text-xl font-semibold mb-2'>Go Performance Tuning Journey</h3>
                  <p className='text-sm text-gray-400 mb-4'>By Renaldi Purwanto - 2025</p>
                </div>
                <a href="https://blog.devgenius.io/from-slow-to-snappy-go-performance-tuning-tips-that-actually-work-1c6d2d9ba959" target="_blank" rel="noopener noreferrer" className='text-indigo-400 hover:text-indigo-300'>Read More →</a>
              </div>
              <blockquote className='text-gray-300 italic mb-4'>
                "Tackling bottlenecks using Go's profiling tools, we optimized code paths, goroutines, and memory usage, turning sluggish behavior into lightning fast performance."
              </blockquote>
              <div className='mt-6 flex flex-wrap gap-2'>
                <span className='px-3 py-1 rounded-full text-xs font-medium bg-indigo-900/50 text-indigo-300'>Go</span>
                <span className='px-3 py-1 rounded-full text-xs font-medium bg-indigo-900/50 text-indigo-300'>Performance</span>
                <span className='px-3 py-1 rounded-full text-xs font-medium bg-indigo-900/50 text-indigo-300'>Profiling</span>
              </div>
            </div>
            <div className='p-8 rounded-2xl bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500 transition-colors duration-300'>
              <div className='flex items-start justify-between'>
                <div>
                  <h3 className='text-xl font-semibold mb-2'>Scaling Billion-Row Dashboards</h3>
                  <p className='text-sm text-gray-400 mb-4'>By Harness Team - 2025</p>
                </div>
                <a href="https://www.harness.io/blog/optimizing-query-performance-for-large-datasets-powering-dashboards" target="_blank" rel="noopener noreferrer" className='text-indigo-400 hover:text-indigo-300'>Read More →</a>
              </div>
              <blockquote className='text-gray-300 italic mb-4'>
                "Facing massive dashboards backed by a 3 TB, 4 billion-row TimescaleDB table, we reengineered performance through daily/weekly aggregations."
              </blockquote>
              <div className='mt-6 flex flex-wrap gap-2'>
                <span className='px-3 py-1 rounded-full text-xs font-medium bg-indigo-900/50 text-indigo-300'>SQL</span>
                <span className='px-3 py-1 rounded-full text-xs font-medium bg-indigo-900/50 text-indigo-300'>TimescaleDB</span>
                <span className='px-3 py-1 rounded-full text-xs font-medium bg-indigo-900/50 text-indigo-300'>Aggregation</span>
              </div>
            </div>
            <div className='p-8 rounded-2xl bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500 transition-colors duration-300'>
              <div className='flex items-start justify-between'>
                <div>
                  <h3 className='text-xl font-semibold mb-2'>.NET Performance Series</h3>
                  <p className='text-sm text-gray-400 mb-4'>By NashTech Global - 2025</p>
                </div>
                <a href="https://blog.nashtechglobal.com/performance-optimization-techniques-for-net-applications" target="_blank" rel="noopener noreferrer" className='text-indigo-400 hover:text-indigo-300'>Read More →</a>
              </div>
              <blockquote className='text-gray-300 italic mb-4'>
                "A multi-part walkthrough improving .NET memory usage, asynchronous I/O, and resource cleanup using techniques like memory pooling and BenchmarkDotNet."
              </blockquote>
              <div className='mt-6 flex flex-wrap gap-2'>
                <span className='px-3 py-1 rounded-full text-xs font-medium bg-indigo-900/50 text-indigo-300'>.NET</span>
                <span className='px-3 py-1 rounded-full text-xs font-medium bg-indigo-900/50 text-indigo-300'>Memory</span>
                <span className='px-3 py-1 rounded-full text-xs font-medium bg-indigo-900/50 text-indigo-300'>Async</span>
              </div>
            </div>
            <div className='p-8 rounded-2xl bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500 transition-colors duration-300'>
              <div className='flex items-start justify-between'>
                <div>
                  <h3 className='text-xl font-semibold mb-2'>Cloud Performance Guide</h3>
                  <p className='text-sm text-gray-400 mb-4'>By Sedai - 2025</p>
                </div>
                <a href="https://www.sedai.io/blog/software-performance-optimization-expert-guide" target="_blank" rel="noopener noreferrer" className='text-indigo-400 hover:text-indigo-300'>Read More →</a>
              </div>
              <blockquote className='text-gray-300 italic mb-4'>
                "Expert guide tackles performance across the entire stack: code, resource management, metrics/SLOs, and DevOps integration with AI-driven tuning."
              </blockquote>
              <div className='mt-6 flex flex-wrap gap-2'>
                <span className='px-3 py-1 rounded-full text-xs font-medium bg-indigo-900/50 text-indigo-300'>Cloud</span>
                <span className='px-3 py-1 rounded-full text-xs font-medium bg-indigo-900/50 text-indigo-300'>AI</span>
                <span className='px-3 py-1 rounded-full text-xs font-medium bg-indigo-900/50 text-indigo-300'>DevOps</span>
              </div>
              <div className='mt-4 text-sm text-gray-400'>
                <div className='flex items-center gap-4'>
                  <div className='flex items-center gap-1'>
                    <span>Performance Gain:</span>
                    <span className='text-green-400'>+75%</span>
                  </div>
                  <div className='flex items-center gap-1'>
                    <span>Cost Reduction:</span>
                    <span className='text-green-400'>-50%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer footerNavigation={footerNavigation} />
      </div>
    </div>
  );
}
