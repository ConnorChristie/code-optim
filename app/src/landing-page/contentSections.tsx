import type { NavigationItem } from '../client/components/NavBar/NavBar';
import { DocsUrl, BlogUrl } from '../shared/common';
import daBoiAvatar from '../client/static/da-boi.webp';
import avatarPlaceholder from '../client/static/avatar-placeholder.webp';
import { FaChartLine, FaGithub, FaMagnifyingGlass, FaRobot } from 'react-icons/fa6';

export const landingPageNavigationItems: NavigationItem[] = [
  { name: 'Features', to: '#features' },
  { name: 'Documentation', to: DocsUrl },
  { name: 'Blog', to: BlogUrl },
];

export const features = [
  {
    name: 'AI-Powered Hot-spot Detection',
    description: 'Automatically identify performance bottlenecks in your code using advanced profiling and AI analysis.',
    icon: <FaMagnifyingGlass />,
    href: DocsUrl,
  },
  {
    name: 'Smart Patch Generation',
    description: 'Get AI-generated optimizations that improve code performance while maintaining functionality.',
    icon: <FaRobot />,
    href: DocsUrl,
  },
  {
    name: 'Automated Benchmarking',
    description: 'Continuous performance monitoring with automatic benchmarking to catch regressions early.',
    icon: <FaChartLine />,
    href: DocsUrl,
  },
  {
    name: 'GitHub Integration',
    description: 'Seamless integration with GitHub for automated PR creation and code review workflow.',
    icon: <FaGithub />,
    href: DocsUrl,
  },
];

export const testimonials = [
  {
    body: 'Code Optima has been a game-changer for our team. We\'re shipping faster and our code is more performant than ever before. The AI-powered suggestions are incredibly accurate.',
    author: {
      name: 'Sarah, Lead Developer at Acme Inc.',
      handle: 'sarah_dev',
      imageUrl: avatarPlaceholder,
    },
  },
  {
    body: 'I was skeptical about AI-generated code, but Code Optima proved me wrong. The patches are clean, easy to understand, and have significantly improved our application\'s response times.',
    author: {
      name: 'Mike, CTO at Innovate LLC',
      handle: 'mike_cto',
      imageUrl: daBoiAvatar,
    },
  },
  {
    body: 'The GitHub integration is seamless. It fits right into our existing workflow and has saved us countless hours of manual performance tuning.',
    author: {
      name: 'Emily, Software Engineer at TechCorp',
      handle: 'emily_swe',
      imageUrl: avatarPlaceholder,
    },
  },
];

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
    answer: 'Code Optima offers a free plan for open-source projects and small teams. For larger teams and more advanced features, we have flexible pricing plans available on the GitHub Marketplace. Visit our marketplace page for more details.',
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
    { name: 'Terms of Service', href: '#' },
  ],
  company: [
    { name: 'Privacy', href: '#' },
    { name: 'Terms of Service', href: '#' },
  ],
};

export const logoCloud = [
  'Transistor',
  'Tuple',
  'Statamic',
  'Reform',
  'SavvyCal',
  'Statamic',
];
