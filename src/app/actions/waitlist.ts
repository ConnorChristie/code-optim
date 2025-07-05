'use server';

interface WaitlistEntry {
  email: string;
  githubUrl?: string;
}

export async function addToWaitlist({ email, githubUrl }: WaitlistEntry) {
  // TODO: Implement actual waitlist functionality
  // For now, just simulate a delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Return success
  return { success: true };
} 