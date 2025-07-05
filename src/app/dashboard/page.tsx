import { Card, CardContent, CardHeader, CardTitle } from "@/app/client/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/client/components/ui/tabs"
import { 
  HotspotsList,
  OptimizationMetrics,
  PerformanceChart,
  OptimizationSuggestions,
  PerformanceBreakdownChart,
  CostCarbonChart
} from "./components/index"

export default function DashboardPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400">Dashboard</h2>
      </div>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="bg-gray-900/50 backdrop-blur-lg border border-gray-800">
          <TabsTrigger value="overview" className="text-gray-300 hover:text-gray-200 data-[state=active]:bg-indigo-600/20 data-[state=active]:text-indigo-300">Overview</TabsTrigger>
          <TabsTrigger value="hotspots" className="text-gray-300 hover:text-gray-200 data-[state=active]:bg-indigo-600/20 data-[state=active]:text-indigo-300">Active Investigations</TabsTrigger>
          <TabsTrigger value="improvements" className="text-gray-300 hover:text-gray-200 data-[state=active]:bg-indigo-600/20 data-[state=active]:text-indigo-300">Past Improvements</TabsTrigger>
          <TabsTrigger value="impact" className="text-gray-300 hover:text-gray-200 data-[state=active]:bg-indigo-600/20 data-[state=active]:text-indigo-300">Impact</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500/50 transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">
                  Total Hotspots
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-indigo-400">12</div>
                <p className="text-xs text-gray-400">
                  +2 since last scan
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500/50 transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">
                  Performance Improvement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-400">+24.3%</div>
                <p className="text-xs text-gray-400">
                  +5.1% from previous
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500/50 transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">
                  Files Analyzed
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-400">342</div>
                <p className="text-xs text-gray-400">
                  89% of codebase
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500/50 transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">
                  Optimizations Applied
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-cyan-400">8</div>
                <p className="text-xs text-gray-400">
                  67% success rate
                </p>
              </CardContent>
            </Card>
          </div>
          {/* New KPI grid */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {/* Active Optimization Runs */}
            <Card className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500/50 transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">
                  Active Runs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-400">3</div>
                <p className="text-xs text-gray-400">
                  realtime jobs
                </p>
              </CardContent>
            </Card>
            {/* Success / Error Rate */}
            <Card className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500/50 transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">
                  Success Rate
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-400">92%</div>
                <p className="text-xs text-gray-400">
                  last 50 runs
                </p>
              </CardContent>
            </Card>
            {/* Avg Δ Performance */}
            <Card className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500/50 transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">
                  Avg Δ Performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-orange-400">+13.7%</div>
                <p className="text-xs text-gray-400">
                  vs baseline
                </p>
              </CardContent>
            </Card>
            {/* Avg Δ Cost per Run */}
            <Card className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500/50 transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">
                  Avg Δ Cost / Run
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-red-400">-$4.20</div>
                <p className="text-xs text-gray-400">
                  savings per run
                </p>
              </CardContent>
            </Card>
            {/* Token Spend Today */}
            <Card className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500/50 transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">
                  Token Spend Today
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-yellow-400">$1.83</div>
                <p className="text-xs text-gray-400">
                  LLM usage cost
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4 bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-gray-300">Performance Overview</CardTitle>
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
          <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-7">
            <Card className="col-span-7 bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-gray-300">Performance Breakdown</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <PerformanceBreakdownChart />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="improvements" className="space-y-4">
          {/* KPI Metrics Grid - Improvements */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {/* Total Optimizations */}
            <Card className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500/50 transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">
                  Total Optimizations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-indigo-400">128</div>
                <p className="text-xs text-gray-400">
                  all time
                </p>
              </CardContent>
            </Card>

            {/* Top Optimization */}
            <Card className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500/50 transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">
                  Top Optimization
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-400">+42% perf</div>
                <p className="text-xs text-gray-400">
                  Async I/O refactor
                </p>
              </CardContent>
            </Card>

            {/* Most Recent Optimization */}
            <Card className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500/50 transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">
                  Most Recent
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-yellow-400">2h ago</div>
                <p className="text-xs text-gray-400">
                  Query index addition
                </p>
              </CardContent>
            </Card>

            {/* Most Optimized Category */}
            <Card className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500/50 transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">
                  Most Optimized Category
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-teal-400">DB Queries</div>
                <p className="text-xs text-gray-400">
                  highest impact
                </p>
              </CardContent>
            </Card>

            {/* Most Frequent Optimization Category */}
            <Card className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500/50 transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">
                  Most Frequent Category
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-pink-400">Memory</div>
                <p className="text-xs text-gray-400">
                  38 optimizations
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Impact Over Time Chart */}
          <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-7">
            <Card className="col-span-7 bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-gray-300">Optimization Impact Over Time</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <PerformanceChart />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="hotspots" className="space-y-4">
          <Card className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500/50 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-gray-300">Active Investigations</CardTitle>
            </CardHeader>
            <CardContent>
              <HotspotsList />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="impact" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500/50 transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">
                  Cloud Cost Savings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-400">$1,250</div>
                <p className="text-xs text-gray-400">
                  Last 30 days
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500/50 transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">
                  CO₂ Reduced
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-400">135 kg</div>
                <p className="text-xs text-gray-400">
                  Equivalent to 6 trees / month
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500/50 transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">
                  Cost per Request
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-indigo-400">$0.002</div>
                <p className="text-xs text-gray-400">
                  ↓ 22% vs. baseline
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500/50 transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">
                  Carbon per Request
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-cyan-400">0.0003 kg</div>
                <p className="text-xs text-gray-400">
                  ↓ 18% vs. baseline
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-7">
            <Card className="col-span-7 bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-gray-300">Cost & Carbon Over Time</CardTitle>
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