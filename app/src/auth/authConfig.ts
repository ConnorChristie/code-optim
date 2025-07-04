import { config } from 'wasp/client';

export const authConfig = {
  gitHubSignInUrl: `${config.apiUrl}/auth/github/login`,
  googleSignInUrl: `${config.apiUrl}/auth/google/login`,
}; 
