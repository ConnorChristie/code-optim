import { NextResponse } from 'next/server';
import { z } from 'zod';
import { Prisma, PrismaClient } from '@prisma/client';

const waitlistSchema = z.object({
  email: z.string().email(),
  githubUrl: z.string().url().optional(),
  name: z.string().optional(),
  company: z.string().optional(),
  githubUsername: z.string().optional(),
});

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validatedData = waitlistSchema.parse(body);

    const entry = await prisma.waitlistEntry.create({
      data: validatedData,
    });

    return NextResponse.json({ success: true, entry });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, error: 'Invalid data provided' }, { status: 400 });
    }
    
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
      return NextResponse.json({ success: false, error: 'Email already registered' }, { status: 409 });
    }

    console.error('Waitlist signup error:', error);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
} 