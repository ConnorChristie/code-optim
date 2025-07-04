import type { CustomizationOptions } from 'wasp/client/auth';

export const authAppearance: CustomizationOptions['appearance'] = {
  colors: {
    // Customize the social button text color
    socialButtonText: '#000000', // Black text for better visibility
    // You can also customize other colors if needed
    brand: '#5969b8', // Example brand color
    brandAccent: '#000000', // Example brand accent color
  },
}; 