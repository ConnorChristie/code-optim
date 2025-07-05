import { z } from 'zod'

// Enums for consistent string literals
export const HotspotCategory = z.enum(['Database', 'API', 'Algorithm', 'Memory', 'IO'])
export const HotspotPriority = z.enum(['Low', 'Medium', 'High', 'Critical'])
export const HotspotStatus = z.enum(['active', 'in_progress', 'completed', 'cancelled'])

export const OptimizationType = z.enum(['refactor', 'config', 'dependency', 'architecture'])
export const OptimizationStatus = z.enum(['pending', 'applied', 'failed', 'rolled_back'])

export const OptimizationRunStatus = z.enum(['pending', 'running', 'completed', 'failed'])

export const MetricCategory = z.enum(['performance', 'cost', 'environment'])
export const ImpactPeriod = z.enum(['daily', 'weekly', 'monthly'])

// Base schemas
export const HotspotSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  filePath: z.string(),
  lineNumber: z.number().nullable(),
  category: HotspotCategory,
  priority: HotspotPriority,
  status: HotspotStatus,
  severity: z.number().min(0).max(1),
  impact: z.number().min(0).max(1),
  estimatedSavings: z.number().nullable(),
  repoUrl: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
  resolvedAt: z.date().nullable(),
})

export const OptimizationSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  category: HotspotCategory,
  type: OptimizationType,
  status: OptimizationStatus,
  beforeCode: z.string().nullable(),
  afterCode: z.string().nullable(),
  filePath: z.string(),
  lineNumber: z.number().nullable(),
  performanceGain: z.number().nullable(),
  costSavings: z.number().nullable(),
  carbonReduction: z.number().nullable(),
  executionTime: z.number().nullable(),
  repoUrl: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
  appliedAt: z.date().nullable(),
  hotspotId: z.string().nullable(),
})

export const OptimizationRunSchema = z.object({
  id: z.string(),
  jobId: z.string(),
  repoUrl: z.string(),
  status: OptimizationRunStatus,
  startedAt: z.date(),
  completedAt: z.date().nullable(),
  failedAt: z.date().nullable(),
  errorMessage: z.string().nullable(),
  hotspotsFound: z.number(),
  optimizationsApplied: z.number(),
  totalImprovements: z.number().nullable(),
})

export const MetricSchema = z.object({
  id: z.string(),
  name: z.string(),
  value: z.number(),
  unit: z.string(),
  category: MetricCategory,
  timestamp: z.date(),
  repoUrl: z.string().nullable(),
  metadata: z.record(z.any()).nullable(),
})

export const ImpactSchema = z.object({
  id: z.string(),
  period: ImpactPeriod,
  periodStart: z.date(),
  periodEnd: z.date(),
  costSavings: z.number(),
  carbonReduction: z.number(),
  performanceGain: z.number(),
  requestCostReduction: z.number(),
  responseTimeReduction: z.number(),
  energySavings: z.number(),
  treesEquivalent: z.number(),
  roi: z.number(),
  uptime: z.number(),
  tokenSpend: z.number(),
  activeJobs: z.number(),
})

// API Request/Response schemas
export const KpiMetricsResponseSchema = z.object({
  activeHotspots: z.number(),
  performanceGain: z.number(),
  costSavings: z.number(),
  successRate: z.number(),
})

export const HotspotSummaryResponseSchema = z.object({
  inProgress: z.number(),
  completed: z.number(),
  highPriority: z.number(),
  avgResolution: z.number(),
})

export const OptimizationSummaryResponseSchema = z.object({
  totalApplied: z.number(),
  bestResult: z.number(),
  thisWeek: z.number(),
  topCategory: z.string(),
  avgImpact: z.number(),
})

export const ImpactSummaryResponseSchema = z.object({
  monthlySavings: z.number(),
  co2Reduction: z.number(),
  requestCost: z.number(),
  responseTime: z.number(),
  activeRuns: z.number(),
  tokenSpend: z.number(),
  roi: z.number(),
  treesSaved: z.number(),
  uptime: z.number(),
})

export const PerformanceDataPointSchema = z.object({
  date: z.string(),
  value: z.number(),
})

export const PerformanceChartResponseSchema = z.object({
  data: z.array(PerformanceDataPointSchema),
})

export const HotspotCategoryDataSchema = z.object({
  name: z.string(),
  value: z.number(),
  color: z.string(),
})

export const HotspotCategoriesResponseSchema = z.object({
  categories: z.array(HotspotCategoryDataSchema),
})

export const OptimizationRequestSchema = z.object({
  repoUrl: z.string().url(),
  config: z.record(z.any()).optional(),
})

export const OptimizationJobResponseSchema = z.object({
  jobId: z.string(),
  status: OptimizationRunStatus,
  message: z.string(),
})

// Query parameter schemas
export const DateRangeQuerySchema = z.object({
  range: z.enum(['7d', '30d', '90d', '180d', '12mo']).optional().default('30d'),
})

export const PaginationQuerySchema = z.object({
  page: z.coerce.number().min(1).optional().default(1),
  limit: z.coerce.number().min(1).max(100).optional().default(10),
})

export const HotspotsQuerySchema = PaginationQuerySchema.extend({
  status: HotspotStatus.optional(),
  category: HotspotCategory.optional(),
  priority: HotspotPriority.optional(),
})

export const OptimizationsQuerySchema = PaginationQuerySchema.extend({
  status: OptimizationStatus.optional(),
  category: HotspotCategory.optional(),
  sortBy: z.enum(['createdAt', 'appliedAt', 'performanceGain', 'costSavings']).optional().default('createdAt'),
  sortOrder: z.enum(['asc', 'desc']).optional().default('desc'),
})

// TypeScript type exports
export type Hotspot = z.infer<typeof HotspotSchema>
export type Optimization = z.infer<typeof OptimizationSchema>
export type OptimizationRun = z.infer<typeof OptimizationRunSchema>
export type Metric = z.infer<typeof MetricSchema>
export type Impact = z.infer<typeof ImpactSchema>

export type KpiMetricsResponse = z.infer<typeof KpiMetricsResponseSchema>
export type HotspotSummaryResponse = z.infer<typeof HotspotSummaryResponseSchema>
export type OptimizationSummaryResponse = z.infer<typeof OptimizationSummaryResponseSchema>
export type ImpactSummaryResponse = z.infer<typeof ImpactSummaryResponseSchema>
export type PerformanceChartResponse = z.infer<typeof PerformanceChartResponseSchema>
export type HotspotCategoriesResponse = z.infer<typeof HotspotCategoriesResponseSchema>
export type OptimizationRequest = z.infer<typeof OptimizationRequestSchema>
export type OptimizationJobResponse = z.infer<typeof OptimizationJobResponseSchema>

export type DateRangeQuery = z.infer<typeof DateRangeQuerySchema>
export type PaginationQuery = z.infer<typeof PaginationQuerySchema>
export type HotspotsQuery = z.infer<typeof HotspotsQuerySchema>
export type OptimizationsQuery = z.infer<typeof OptimizationsQuerySchema>

// Error response schema
export const ErrorResponseSchema = z.object({
  error: z.string(),
  message: z.string(),
  statusCode: z.number(),
})

export type ErrorResponse = z.infer<typeof ErrorResponseSchema> 