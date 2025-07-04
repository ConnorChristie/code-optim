import type { NavigationItem } from '../client/components/NavBar/NavBar';
import { routes } from 'wasp/client/router';
import { DocsUrl, BlogUrl } from '../shared/common';
import daBoiAvatar from '../client/static/da-boi.webp';
import avatarPlaceholder from '../client/static/avatar-placeholder.webp';

export const landingPageNavigationItems: NavigationItem[] = [
  { name: 'Features', to: '#features' },
  { name: 'Documentation', to: DocsUrl },
  { name: 'Blog', to: BlogUrl },
];

export const features = [
  {
    name: 'AI-Powered Hot-spot Detection',
    description: 'Automatically identify performance bottlenecks in your code using advanced profiling and AI analysis.',
    icon: '🔍',
    href: DocsUrl,
  },
  {
    name: 'Smart Patch Generation',
    description: 'Get AI-generated optimizations that improve code performance while maintaining functionality.',
    icon: '🤖',
    href: DocsUrl,
  },
  {
    name: 'Automated Benchmarking',
    description: 'Continuous performance monitoring with automatic benchmarking to catch regressions early.',
    icon: '📊',
    href: DocsUrl,
  },
  {
    name: 'GitHub Integration',
    description: 'Seamless integration with GitHub for automated PR creation and code review workflow.',
    icon: '🔄',
    href: DocsUrl,
  },
];

export const testimonials = [];

export const faqs = [
  {
    id: 1,
    question: 'How does Code Optima work?',
    answer: 'Code Optima uses AI to analyze your codebase, detect performance bottlenecks, and generate optimized patches. It integrates with your GitHub workflow to automatically create pull requests with performance improvements.',
  },
  {
    id: 2,
    question: 'What programming languages are supported?',
    answer: 'Initially, we support Python and Go codebases, with more languages coming soon.',
  },
  {
    id: 3,
    question: 'How much does it cost?',
    answer: 'Pricing will be announced at launch. Join our waitlist to be notified and get early access pricing.',
  },
  {
    id: 4,
    question: 'Is it safe to use AI-generated code optimizations?',
    answer: 'Yes! Code Optima includes rigorous benchmarking and testing to ensure optimizations maintain functionality. All changes are proposed via pull requests for your team to review.',
  },
];

export const footerNavigation = {
  app: [
    { name: 'Documentation', href: DocsUrl },
    { name: 'Blog', href: BlogUrl },
  ],
  company: [
    { name: 'Privacy', href: '#' },
    { name: 'Terms of Service', href: '#' },
  ],
};
