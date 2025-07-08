import "dotenv/config"
import postgres from "postgres"
import { drizzle } from "drizzle-orm/postgres-js"
import { prompts } from "../src/schema"

async function main() {
  const sql = postgres(process.env.DATABASE_URL!, { max: 1 })
  const db = drizzle(sql)

  // initial prompt for the analyzer
  const analyzerPrompt = `Analyze this codebase for performance bottlenecks and inefficiencies.
Prefer optimizations that a user can feel and avoid optimizations that have negligible impact.

Focus on identifying:
1. Algorithmic inefficiencies (O(n²) when O(n) is possible)
2. Resource-intensive operations (nested loops, redundant computations)
3. Memory management issues
4. Unnecessary computations
5. I/O bottlenecks
6. Data structure misuse

For each hotspot you find, provide:
- File path and line numbers
- Severity score (0-1, where 1 is most severe)
- Description of the issue
- Suggested fix
- Estimated performance improvement percentage

Respond strictly in JSON following this schema: HOTSPOT_SCHEMA.`

  await db
    .insert(prompts)
    .values({ name: "analyzer", version: 1, content: analyzerPrompt })
    .onConflictDoNothing()

  console.log("✅ Prompts seeded")
  await sql.end()
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
}) 