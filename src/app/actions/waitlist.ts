'use server';

import { prisma } from '@/lib/db';
import { z } from 'zod';

const waitlistSchema = z.object({
  email: z.string().email(),
  githubUrl: z.string().url().optional(),
});

type PrismaError = Error & { code?: string };

export async function addToWaitlist(data: { email: string; githubUrl?: string }) {
  try {
    // Validate input
    const validatedData = waitlistSchema.parse(data);

    // Add to database
    const entry = await prisma.waitlistEntry.create({
      data: validatedData,
    });

    return { success: true, data: entry };
  } catch (error) {
    console.error('Failed to add to waitlist:', error);
    
    if (error instanceof z.ZodError) {
      return { success: false, error: 'Invalid input data' };
    }
    
    // Check for unique constraint violation
    const prismaError = error as PrismaError;
    if (prismaError.code === 'P2002') {
      return { success: false, error: 'Email already registered' };
    }

    return { success: false, error: 'Failed to add to waitlist' };
  }
} 