import {
  boolean,
  timestamp,
  pgTable,
  text,
  primaryKey,
  integer,
  index,
  uniqueIndex,
  doublePrecision,
  jsonb,
} from "drizzle-orm/pg-core"
import type { AdapterAccountType } from "@auth/core/adapters"

export const users = pgTable("user", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text("name"),
  email: text("email").unique(),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  image: text("image"),
})
 
export const accounts = pgTable(
  "account",
  {
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    type: text("type").$type<AdapterAccountType>().notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("providerAccountId").notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: text("token_type"),
    scope: text("scope"),
    id_token: text("id_token"),
    session_state: text("session_state"),
  },
  (account) => [
    {
      compoundKey: primaryKey({
        columns: [account.provider, account.providerAccountId],
      }),
    },
  ]
)
 
export const sessions = pgTable("session", {
  sessionToken: text("sessionToken").primaryKey(),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  expires: timestamp("expires", { mode: "date" }).notNull(),
})
 
export const verificationTokens = pgTable(
  "verificationToken",
  {
    identifier: text("identifier").notNull(),
    token: text("token").notNull(),
    expires: timestamp("expires", { mode: "date" }).notNull(),
  },
  (verificationToken) => [
    {
      compositePk: primaryKey({
        columns: [verificationToken.identifier, verificationToken.token],
      }),
    },
  ]
)
 
export const authenticators = pgTable(
  "authenticator",
  {
    credentialID: text("credentialID").notNull().unique(),
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    providerAccountId: text("providerAccountId").notNull(),
    credentialPublicKey: text("credentialPublicKey").notNull(),
    counter: integer("counter").notNull(),
    credentialDeviceType: text("credentialDeviceType").notNull(),
    credentialBackedUp: boolean("credentialBackedUp").notNull(),
    transports: text("transports"),
  },
  (authenticator) => [
    {
      compositePK: primaryKey({
        columns: [authenticator.userId, authenticator.credentialID],
      }),
    },
  ]
)

// -----------------------------
// Additional tables migrated from Prisma schema
// -----------------------------

export const waitlistEntries = pgTable("waitlistEntry", {
  id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
  email: text("email").notNull().unique(),
  githubUrl: text("githubUrl"),
  createdAt: timestamp("createdAt", { mode: "date" }).defaultNow(),
  updatedAt: timestamp("updatedAt", { mode: "date" }).defaultNow(),
})

export const hotspots = pgTable(
  "hotspot",
  {
    id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
    title: text("title").notNull(),
    description: text("description").notNull(),
    filePath: text("filePath").notNull(),
    lineNumber: integer("lineNumber"),
    category: text("category").notNull(),
    priority: text("priority").notNull(),
    status: text("status").notNull(),
    severity: doublePrecision("severity").notNull(),
    impact: doublePrecision("impact").notNull(),
    estimatedSavings: doublePrecision("estimatedSavings"),
    repoUrl: text("repoUrl"),
    createdAt: timestamp("createdAt", { mode: "date" }).defaultNow(),
    updatedAt: timestamp("updatedAt", { mode: "date" }).defaultNow(),
    resolvedAt: timestamp("resolvedAt", { mode: "date" }),
  },
  (table) => [
    index("hotspot_status_idx").on(table.status),
    index("hotspot_priority_idx").on(table.priority),
    index("hotspot_category_idx").on(table.category),
    index("hotspot_createdAt_idx").on(table.createdAt),
  ]
)

export const optimizations = pgTable(
  "optimization",
  {
    id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
    title: text("title").notNull(),
    description: text("description").notNull(),
    category: text("category").notNull(),
    type: text("type").notNull(),
    status: text("status").notNull(),
    beforeCode: text("beforeCode"),
    afterCode: text("afterCode"),
    filePath: text("filePath").notNull(),
    lineNumber: integer("lineNumber"),
    performanceGain: doublePrecision("performanceGain"),
    costSavings: doublePrecision("costSavings"),
    carbonReduction: doublePrecision("carbonReduction"),
    executionTime: integer("executionTime"),
    repoUrl: text("repoUrl"),
    hotspotId: text("hotspotId").references(() => hotspots.id, { onDelete: "set null" }),
    createdAt: timestamp("createdAt", { mode: "date" }).defaultNow(),
    updatedAt: timestamp("updatedAt", { mode: "date" }).defaultNow(),
    appliedAt: timestamp("appliedAt", { mode: "date" }),
  },
  (table) => [
    index("optimization_status_idx").on(table.status),
    index("optimization_category_idx").on(table.category),
    index("optimization_createdAt_idx").on(table.createdAt),
    index("optimization_appliedAt_idx").on(table.appliedAt),
  ]
)

export const optimizationRuns = pgTable(
  "optimizationRun",
  {
    id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
    jobId: text("jobId").notNull().unique(),
    repoUrl: text("repoUrl").notNull(),
    status: text("status").notNull(),
    startedAt: timestamp("startedAt", { mode: "date" }).defaultNow(),
    completedAt: timestamp("completedAt", { mode: "date" }),
    failedAt: timestamp("failedAt", { mode: "date" }),
    errorMessage: text("errorMessage"),
    hotspotsFound: integer("hotspotsFound").default(0).notNull(),
    optimizationsApplied: integer("optimizationsApplied").default(0).notNull(),
    totalImprovements: doublePrecision("totalImprovements"),
  },
  (table) => [
    index("optimizationRun_status_idx").on(table.status),
    index("optimizationRun_startedAt_idx").on(table.startedAt),
    index("optimizationRun_repoUrl_idx").on(table.repoUrl),
  ]
)

export const metrics = pgTable(
  "metric",
  {
    id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
    name: text("name").notNull(),
    value: doublePrecision("value").notNull(),
    unit: text("unit").notNull(),
    category: text("category").notNull(),
    timestamp: timestamp("timestamp", { mode: "date" }).defaultNow(),
    repoUrl: text("repoUrl"),
    metadata: jsonb("metadata").$type<Record<string, unknown>>(),
  },
  (table) => [
    index("metric_name_idx").on(table.name),
    index("metric_timestamp_idx").on(table.timestamp),
    index("metric_category_idx").on(table.category),
  ]
)

export const impacts = pgTable(
  "impact",
  {
    id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
    period: text("period").notNull(),
    periodStart: timestamp("periodStart", { mode: "date" }).notNull(),
    periodEnd: timestamp("periodEnd", { mode: "date" }).notNull(),
    costSavings: doublePrecision("costSavings"),
    carbonReduction: doublePrecision("carbonReduction"),
    performanceGain: doublePrecision("performanceGain"),
    requestCostReduction: doublePrecision("requestCostReduction"),
    responseTimeReduction: doublePrecision("responseTimeReduction"),
    energySavings: doublePrecision("energySavings"),
    treesEquivalent: doublePrecision("treesEquivalent"),
    roi: doublePrecision("roi"),
    uptime: doublePrecision("uptime"),
    tokenSpend: doublePrecision("tokenSpend"),
    activeJobs: integer("activeJobs"),
  },
  (table) => [
    index("impact_period_idx").on(table.period),
    index("impact_periodStart_idx").on(table.periodStart),
    uniqueIndex("impact_period_periodStart_unique").on(
      table.period,
      table.periodStart,
    ),
  ]
)