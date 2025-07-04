-- CreateEnum
CREATE TYPE "JobStatus" AS ENUM ('QUEUED', 'RUNNING', 'COMPLETED', 'FAILED', 'CANCELLED', 'BUDGET_EXCEEDED', 'TIMEOUT');

-- CreateEnum
CREATE TYPE "JobPriority" AS ENUM ('LOW', 'MEDIUM', 'HIGH', 'URGENT');

-- CreateEnum
CREATE TYPE "AgentType" AS ENUM ('BUILDER', 'ANALYZER', 'REFACTORER', 'BENCHMARK_RUNNER', 'REVIEWER');

-- CreateEnum
CREATE TYPE "AgentStatus" AS ENUM ('PENDING', 'RUNNING', 'COMPLETED', 'FAILED', 'TIMEOUT', 'BUDGET_EXCEEDED');

-- CreateEnum
CREATE TYPE "PatchStatus" AS ENUM ('GENERATED', 'COMPILED', 'TESTED', 'BENCHMARKED', 'APPLIED', 'REJECTED');

-- CreateTable
CREATE TABLE "Repository" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "branch" TEXT NOT NULL DEFAULT 'main',
    "language" TEXT NOT NULL,
    "framework" TEXT,
    "maxSpendPerMonth" DOUBLE PRECISION NOT NULL DEFAULT 10.0,
    "maxConcurrency" INTEGER NOT NULL DEFAULT 2,
    "perfTargetPercent" DOUBLE PRECISION NOT NULL DEFAULT 5.0,
    "maxWallClockHours" DOUBLE PRECISION NOT NULL DEFAULT 2.0,
    "llmModel" TEXT NOT NULL DEFAULT 'gpt-4o-mini',

    CONSTRAINT "Repository_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OptimizationJob" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "completedAt" TIMESTAMP(3),
    "repositoryId" TEXT NOT NULL,
    "status" "JobStatus" NOT NULL DEFAULT 'QUEUED',
    "priority" "JobPriority" NOT NULL DEFAULT 'MEDIUM',
    "totalCostUsd" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "totalTokens" INTEGER NOT NULL DEFAULT 0,
    "totalCiMinutes" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "baselinePerformance" JSONB,
    "currentPerformance" JSONB,
    "targetImprovement" DOUBLE PRECISION NOT NULL DEFAULT 5.0,
    "actualImprovement" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "config" JSONB,
    "error" TEXT,

    CONSTRAINT "OptimizationJob_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AgentExecution" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "completedAt" TIMESTAMP(3),
    "jobId" TEXT NOT NULL,
    "agentType" "AgentType" NOT NULL,
    "status" "AgentStatus" NOT NULL DEFAULT 'PENDING',
    "costUsd" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "tokens" INTEGER NOT NULL DEFAULT 0,
    "executionTimeMs" INTEGER NOT NULL DEFAULT 0,
    "input" JSONB,
    "output" JSONB,
    "error" TEXT,
    "lastHeartbeat" TIMESTAMP(3),

    CONSTRAINT "AgentExecution_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CodePatch" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "jobId" TEXT NOT NULL,
    "filePath" TEXT NOT NULL,
    "originalCode" TEXT NOT NULL,
    "patchedCode" TEXT NOT NULL,
    "diff" TEXT NOT NULL,
    "compilationSuccess" BOOLEAN NOT NULL DEFAULT false,
    "testsPass" BOOLEAN NOT NULL DEFAULT false,
    "performanceImprovement" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "status" "PatchStatus" NOT NULL DEFAULT 'GENERATED',
    "appliedAt" TIMESTAMP(3),

    CONSTRAINT "CodePatch_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JobMetric" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "jobId" TEXT NOT NULL,
    "metricName" TEXT NOT NULL,
    "metricValue" DOUBLE PRECISION NOT NULL,
    "metricUnit" TEXT NOT NULL,
    "stage" TEXT NOT NULL,

    CONSTRAINT "JobMetric_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Repository_userId_name_key" ON "Repository"("userId", "name");

-- CreateIndex
CREATE INDEX "OptimizationJob_status_idx" ON "OptimizationJob"("status");

-- CreateIndex
CREATE INDEX "OptimizationJob_createdAt_idx" ON "OptimizationJob"("createdAt");

-- CreateIndex
CREATE INDEX "AgentExecution_jobId_idx" ON "AgentExecution"("jobId");

-- CreateIndex
CREATE INDEX "AgentExecution_agentType_idx" ON "AgentExecution"("agentType");

-- CreateIndex
CREATE INDEX "AgentExecution_status_idx" ON "AgentExecution"("status");

-- CreateIndex
CREATE INDEX "CodePatch_jobId_idx" ON "CodePatch"("jobId");

-- CreateIndex
CREATE INDEX "CodePatch_status_idx" ON "CodePatch"("status");

-- CreateIndex
CREATE INDEX "JobMetric_jobId_idx" ON "JobMetric"("jobId");

-- CreateIndex
CREATE INDEX "JobMetric_metricName_idx" ON "JobMetric"("metricName");

-- CreateIndex
CREATE INDEX "JobMetric_createdAt_idx" ON "JobMetric"("createdAt");

-- AddForeignKey
ALTER TABLE "Repository" ADD CONSTRAINT "Repository_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OptimizationJob" ADD CONSTRAINT "OptimizationJob_repositoryId_fkey" FOREIGN KEY ("repositoryId") REFERENCES "Repository"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AgentExecution" ADD CONSTRAINT "AgentExecution_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "OptimizationJob"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CodePatch" ADD CONSTRAINT "CodePatch_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "OptimizationJob"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JobMetric" ADD CONSTRAINT "JobMetric_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "OptimizationJob"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
