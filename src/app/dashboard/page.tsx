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
          <TabsTrigger value="hotspots" className="text-gray-300 hover:text-gray-200 data-[state=active]:bg-indigo-600/20 data-[state=active]:text-indigo-300">Hotspots</TabsTrigger>
          <TabsTrigger value="optimizations" className="text-gray-300 hover:text-gray-200 data-[state=active]:bg-indigo-600/20 data-[state=active]:text-indigo-300">Optimizations</TabsTrigger>
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
        <TabsContent value="hotspots" className="space-y-4">
          <Card className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500/50 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-gray-300">Performance Hotspots</CardTitle>
            </CardHeader>
            <CardContent>
              <HotspotsList />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="optimizations" className="space-y-4">
          <Card className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-indigo-500/50 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-gray-300">Optimization Suggestions</CardTitle>
            </CardHeader>
            <CardContent>
              <OptimizationSuggestions />
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