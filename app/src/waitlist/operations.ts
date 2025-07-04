import { type WaitlistEntry } from 'wasp/entities';
import { HttpError } from 'wasp/server';
import { type AddToWaitlist } from 'wasp/server/operations';

export const addToWaitlist: AddToWaitlist<
  { email: string; githubUrl?: string },
  WaitlistEntry
> = async ({ email, githubUrl }, context) => {
  if (!email) {
    throw new HttpError(400, 'Email is required');
  }

  const existingEntry = await context.entities.WaitlistEntry.findUnique({
    where: { email },
  });

  if (existingEntry) {
    throw new HttpError(400, 'You are already on the waitlist');
  }

  return context.entities.WaitlistEntry.create({
    data: { 
      email,
      githubUrl,
    },
  });
};
