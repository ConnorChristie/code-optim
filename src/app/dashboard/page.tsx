'use client'

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/client/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/client/components/ui/tabs"
import { 
  HotspotsList,
  OptimizationMetrics,
  PerformanceChart,
  OptimizationSuggestions,
  PerformanceBreakdownChart,
  CostCarbonChart,
  OptimizationHistory
} from "./components/index"

export default function DashboardPage() {
  const [isHotspotExpanded, setIsHotspotExpanded] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const handleHotspotExpandChange = (expanded: boolean) => {
    setIsAnimating(true)
    setIsHotspotExpanded(expanded)
    // Reset animation state after transition completes
    setTimeout(() => setIsAnimating(false), 600)
  }

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400">Dashboard</h2>
      </div>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="bg-gray-900/50 backdrop-blur-lg border border-gray-800">
          <TabsTrigger value="overview" className="text-gray-300 hover:text-gray-200 data-[state=active]:bg-indigo-600/20 data-[state=active]:text-indigo-300">Overview</TabsTrigger>
          <TabsTrigger value="hotspots" className="text-gray-300 hover:text-gray-200 data-[state=active]:bg-indigo-600/20 data-[state=active]:text-indigo-300">Hotspots</TabsTrigger>
          <TabsTrigger value="optimizations" className="text-gray-300 hover:text-gray-200 data-[state=active]:bg-indigo-600/20 data-[state=active]:text-indigo-300">Optimizations</TabsTrigger>
          <TabsTrigger value="impact" className="text-gray-300 hover:text-gray-200 data-[state=active]:bg-indigo-600/20 data-[state=active]:text-indigo-300">Impact & Savings</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          {/* Primary KPIs */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500/50 transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">
                  Active Hotspots
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-indigo-400">12</div>
                <p className="text-xs text-gray-400">
                  +2 from last scan
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500/50 transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">
                  Performance Gain
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-400">+24.3%</div>
                <p className="text-xs text-gray-400">
                  Overall improvement
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500/50 transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">
                  Cost Savings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-400">$1,250</div>
                <p className="text-xs text-gray-400">
                  Last 30 days
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500/50 transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">
                  Success Rate
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-cyan-400">92%</div>
                <p className="text-xs text-gray-400">
                  Last 50 runs
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Performance Charts */}
          <div 
            className={`
              grid grid-cols-1 transition-[grid-template-columns,gap] duration-500 ease-in-out
              ${isHotspotExpanded ? 'gap-0 lg:gap-0' : 'gap-4'}
            `}
            style={{
              gridTemplateColumns: '1fr',
              ['--lg-grid-cols' as any]: isHotspotExpanded ? '0fr 1fr' : '1fr 0.75fr'
            }}
          >
            {/* Performance Trends - Shrinks as Hotspot Categories grows */}
            <div className={`
              ${isHotspotExpanded ? 'hidden lg:block' : ''}
              overflow-hidden
              transition-all duration-500 ease-in-out
            `}>
              <Card 
                className={`
                  bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500/50
                  transition-all duration-500 ease-in-out
                  ${isHotspotExpanded ? 'lg:opacity-0' : 'lg:opacity-100'}
                `}
              >
                <CardHeader>
                  <CardTitle className="text-gray-300">Performance Trends</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <PerformanceChart />
                </CardContent>
              </Card>
            </div>

            {/* Hotspot Categories - Grows and pushes Performance Trends */}
            <Card 
              className={`
                bg-gray-900/50 backdrop-blur-lg border border-gray-800 
                transition-all duration-500 ease-in-out gap-0
                ${isHotspotExpanded 
                  ? 'hover:border-indigo-500/30' 
                  : 'hover:border-indigo-500/50'
                }
              `}
            >
              <CardHeader 
                className={`
                  transition-all duration-300
                  ${isHotspotExpanded ? 'pb-2' : ''}
                `}
              >
                <CardTitle className="text-gray-300">Hotspot Categories</CardTitle>
              </CardHeader>
              <CardContent 
                className={`
                  pl-2 transition-all duration-300
                  ${isHotspotExpanded ? 'p-0' : ''}
                `}
              >
                <PerformanceBreakdownChart 
                  isExpanded={isHotspotExpanded}
                  onExpandChange={handleHotspotExpandChange}
                />
              </CardContent>
            </Card>
          </div>

          <style jsx>{`
            @media (min-width: 1024px) {
              div[style*="--lg-grid-cols"] {
                grid-template-columns: var(--lg-grid-cols) !important;
              }
            }
          `}</style>
        </TabsContent>
        
        <TabsContent value="hotspots" className="space-y-4">
          {/* Hotspot Summary Cards */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500/50 transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">
                  In Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-yellow-400">3</div>
                <p className="text-xs text-gray-400">
                  Active investigations
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500/50 transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">
                  Completed
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-400">8</div>
                <p className="text-xs text-gray-400">
                  This month
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500/50 transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">
                  High Priority
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-red-400">4</div>
                <p className="text-xs text-gray-400">
                  Need attention
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500/50 transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">
                  Avg Resolution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-400">3.2 days</div>
                <p className="text-xs text-gray-400">
                  Time to optimize
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Hotspots List */}
          <Card className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500/50 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-gray-300">Active Hotspot Investigations</CardTitle>
            </CardHeader>
            <CardContent>
              <HotspotsList />
            </CardContent>
          </Card>
          
          {/* Optimization Suggestions */}
          <Card className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500/50 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-gray-300">Suggested Optimizations</CardTitle>
            </CardHeader>
            <CardContent>
              <OptimizationSuggestions />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="optimizations" className="space-y-4">
          {/* Optimization Summary */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            <Card className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500/50 transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">
                  Total Applied
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-indigo-400">128</div>
                <p className="text-xs text-gray-400">
                  All time
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500/50 transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">
                  Best Result
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-400">+42%</div>
                <p className="text-xs text-gray-400">
                  Async I/O refactor
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500/50 transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">
                  This Week
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-yellow-400">7</div>
                <p className="text-xs text-gray-400">
                  Optimizations
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500/50 transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">
                  Top Category
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-cyan-400">Database</div>
                <p className="text-xs text-gray-400">
                  38% of total
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500/50 transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">
                  Avg Impact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-orange-400">+13.7%</div>
                <p className="text-xs text-gray-400">
                  Per optimization
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Charts */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4 bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-gray-300">Optimization History</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <PerformanceChart />
              </CardContent>
            </Card>
            <Card className="col-span-3 bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-gray-300">Recent Optimizations</CardTitle>
              </CardHeader>
              <CardContent>
                <OptimizationMetrics />
              </CardContent>
            </Card>
          </div>
          
          {/* Optimization History Table */}
          <Card className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500/50 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-gray-300">Optimization History</CardTitle>
            </CardHeader>
            <CardContent>
              <OptimizationHistory />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="impact" className="space-y-4">
          {/* Impact Summary */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500/50 transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">
                  Monthly Savings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-400">$1,250</div>
                <p className="text-xs text-gray-400">
                  Cloud costs reduced
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500/50 transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">
                  CO₂ Reduction
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-400">135 kg</div>
                <p className="text-xs text-gray-400">
                  Monthly reduction
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500/50 transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">
                  Request Cost
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-indigo-400">-22%</div>
                <p className="text-xs text-gray-400">
                  $0.002 per request
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500/50 transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">
                  Response Time
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-cyan-400">-31%</div>
                <p className="text-xs text-gray-400">
                  Avg 180ms faster
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Secondary Metrics */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            <Card className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500/50 transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">
                  Active Runs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-400">3</div>
                <p className="text-xs text-gray-400">
                  Real-time jobs
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500/50 transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">
                  Token Spend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-yellow-400">$1.83</div>
                <p className="text-xs text-gray-400">
                  Today's LLM cost
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500/50 transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">
                  ROI
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-400">684%</div>
                <p className="text-xs text-gray-400">
                  Return on investment
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500/50 transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">
                  Trees Saved
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-teal-400">6</div>
                <p className="text-xs text-gray-400">
                  Equivalent per month
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500/50 transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">
                  Uptime
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-pink-400">99.9%</div>
                <p className="text-xs text-gray-400">
                  Since optimizations
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Cost & Environmental Impact Chart */}
          <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-7">
            <Card className="col-span-7 bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-gray-300">Cost & Carbon Impact Over Time</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <CostCarbonChart />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
} 