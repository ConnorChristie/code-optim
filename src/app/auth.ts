import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle({ client: sql });

export const { handlers, signIn, signOut, auth } = NextAuth(() =>{
  return {
    adapter: DrizzleAdapter(db as any),
    providers: [GitHub],
    debug: process.env.NODE_ENV === 'development',
    session: {
      strategy: 'jwt'
    }
  };
})
