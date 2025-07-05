'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/client/components/ui/accordion"
import { Badge } from "@/app/client/components/ui/badge"

type OptimizationSuggestion = {
  id: string
  hotspotId: string
  refactoringSteps: string[]
  risks: string[]
  testingRecommendations: string[]
  estimatedImprovement: number
}

const mockSuggestions: OptimizationSuggestion[] = [
  {
    id: '1',
    hotspotId: 'src/components/DataGrid.tsx:45-67',
    refactoringSteps: [
      'Create a Set to store unique values',
      'Replace inner loop with Set.has() lookup',
      'Update dependencies to reflect data structure change',
    ],
    risks: [
      'May affect order of elements if order is important',
      'Increased memory usage for large datasets',
    ],
    testingRecommendations: [
      'Add unit tests for edge cases with duplicates',
      'Benchmark with large datasets',
      'Verify order-dependent functionality',
    ],
    estimatedImprovement: 75.0,
  },
  {
    id: '2',
    hotspotId: 'src/utils/dataProcessing.ts:23-35',
    refactoringSteps: [
      'Implement request caching using Map',
      'Add debounce wrapper for API calls',
      'Update component lifecycle hooks',
    ],
    risks: [
      'Stale data if cache invalidation not handled properly',
      'Memory leaks if cache size not bounded',
    ],
    testingRecommendations: [
      'Test cache hit/miss scenarios',
      'Verify debounce timing',
      'Monitor memory usage over time',
    ],
    estimatedImprovement: 45.0,
  },
]

export function OptimizationSuggestions() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {mockSuggestions.map((suggestion) => (
        <AccordionItem key={suggestion.id} value={suggestion.id}>
          <AccordionTrigger className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="font-medium">{suggestion.hotspotId}</span>
              <Badge variant="outline" className="ml-2">
                +{suggestion.estimatedImprovement}% improvement
              </Badge>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 p-4">
              <div>
                <h4 className="font-medium mb-2">Refactoring Steps</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {suggestion.refactoringSteps.map((step, index) => (
                    <li key={index} className="text-sm">{step}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Risks</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {suggestion.risks.map((risk, index) => (
                    <li key={index} className="text-sm text-red-600">{risk}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Testing Recommendations</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {suggestion.testingRecommendations.map((rec, index) => (
                    <li key={index} className="text-sm">{rec}</li>
                  ))}
                </ul>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
} 