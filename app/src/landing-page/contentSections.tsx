import type { NavigationItem } from '../client/components/NavBar/NavBar';
import { DocsUrl, BlogUrl } from '../shared/common';
import daBoiAvatar from '../client/static/da-boi.webp';
import avatarPlaceholder from '../client/static/avatar-placeholder.webp';
import { 
  FaChartLine, 
  FaGithub, 
  FaMagnifyingGlass, 
  FaRobot, 
  FaLeaf, 
  FaCode,
  FaPlug,
  FaShieldHalved,
  FaBolt,
  FaGears,
  FaChartPie,
  FaUserGroup
} from 'react-icons/fa6';

export const features = [
  {
    name: 'AI-Powered Analysis',
    description: 'Automatically detect performance bottlenecks using advanced LLMs that understand your entire codebase, from AI-generated sections to legacy modules.',
    icon: <FaMagnifyingGlass />,
    href: DocsUrl,
  },
  {
    name: 'Smart Optimization',
    description: 'Get AI-generated optimizations that improve code performance while maintaining functionality, with automated testing and validation.',
    icon: <FaRobot />,
    href: DocsUrl,
  },
  {
    name: 'Performance Metrics',
    description: 'Comprehensive benchmarking with before/after comparisons, resource monitoring, and statistical analysis of improvements.',
    icon: <FaChartLine />,
    href: DocsUrl,
  },
  {
    name: 'GitHub Integration',
    description: 'Seamless integration with GitHub, GitLab, and Bitbucket for automated PR creation and code review workflow.',
    icon: <FaGithub />,
    href: DocsUrl,
  },
  {
    name: 'Green Computing',
    description: 'Track and reduce your carbon footprint with energy consumption estimates and eco-friendly optimization recommendations.',
    icon: <FaLeaf />,
    href: DocsUrl,
  },
  {
    name: 'IDE Plugins',
    description: 'VSCode and JetBrains plugins for inline optimization suggestions and quick-fix actions right in your editor.',
    icon: <FaCode />,
    href: DocsUrl,
  },
  {
    name: 'Plugin Architecture',
    description: 'Extend analysis, optimization, and reporting capabilities through our community SDK and marketplace.',
    icon: <FaPlug />,
    href: DocsUrl,
  },
  {
    name: 'Security First',
    description: 'Built-in security and compliance checks, including OWASP scanning and dependency auditing.',
    icon: <FaShieldHalved />,
    href: DocsUrl,
  },
  {
    name: 'Real-time Analysis',
    description: 'Instant feedback on code changes with early anomaly detection for memory leaks and thread contention.',
    icon: <FaBolt />,
    href: DocsUrl,
  },
  {
    name: 'Test Generation',
    description: 'Automated creation of unit, integration, and performance tests with edge-case discovery via fuzzing.',
    icon: <FaGears />,
    href: DocsUrl,
  },
  {
    name: 'Business Impact',
    description: 'Track cost savings, user experience improvements, and infrastructure efficiency gains with detailed ROI analysis.',
    icon: <FaChartPie />,
    href: DocsUrl,
  },
  {
    name: 'Community Driven',
    description: 'Share and discover optimization rules in our marketplace, with gamification and leaderboards for contributors.',
    icon: <FaUserGroup />,
    href: DocsUrl,
  }
];

export const systemArchitecture = [
  {
    title: 'Repository Integration',
    features: [
      'GitHub, GitLab & Bitbucket integrations',
      'Local & on-premise Git support',
      'Repository cloning and PR tracking',
      'Plugin SDK for SCM connectors',
      'Adaptive webhook throttling'
    ]
  },
  {
    title: 'Analysis Engine',
    features: [
      'Static & dynamic code analysis',
      'Dependency graph analysis',
      'Energy consumption estimation',
      'AI-driven hotspot prediction',
      'Hardware compatibility analysis'
    ]
  },
  {
    title: 'Test Generation',
    features: [
      'LLM-based test generation',
      'Edge-case discovery via fuzzing',
      'Chaos scenario scaffolding',
      'User-behavior simulation',
      'Mutation testing analysis'
    ]
  },
  {
    title: 'Optimization Engine',
    features: [
      'LLM-powered suggestions',
      'Pattern-based optimizations',
      'Green coding recommendations',
      'Rollback safety nets',
      'Security compliance checks'
    ]
  }
];

export const caseStudies = [
  {
    title: 'R Language Optimization',
    description: 'Minimal base function refactor of as.data.frame.list()',
    metrics: [
      '70% reduction in execution time',
      '85% less memory allocation',
      'Zero breaking changes',
      '10,000+ test cases validated'
    ]
  },
  {
    title: 'Python DataFrame Enhancement',
    description: 'Pre-instantiate Series objects before DataFrame construction',
    metrics: [
      '45% faster creation time',
      '60% reduction in memory usage',
      '30% fewer GC cycles',
      'Simplified conditional logic'
    ]
  },
  {
    title: 'Shopify Performance Boost',
    description: 'Theme code refactor and asset optimization',
    metrics: [
      '2s reduction in TTFB',
      '30% faster page loads',
      '3% revenue increase',
      '8% lower bounce rate'
    ]
  },
  {
    title: 'Slack Desktop Client',
    description: 'Optimized startup sequence and channel loading',
    metrics: [
      '95% reduction in API calls',
      '40% less JS processing',
      '2.5x longer GC intervals',
      'Reduced memory crashes'
    ]
  }
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
    answer: 'Code Optima uses advanced LLMs to analyze your entire codebase, detect performance bottlenecks, and generate optimized patches. It integrates with your existing workflow to automatically create pull requests with performance improvements, all while ensuring functionality is preserved through comprehensive testing.',
  },
  {
    id: 2,
    question: 'What programming languages are supported?',
    answer: 'We support a wide range of languages including Python, JavaScript/TypeScript, Java, C/C++, Go, and R. Our analysis engine adapts to each language\'s specific characteristics and best practices.',
  },
  {
    id: 3,
    question: 'How much does it cost?',
    answer: 'Code Optima offers a free plan for open-source projects and small teams. For larger teams and more advanced features, we have flexible pricing plans available on the GitHub Marketplace. Visit our marketplace page for more details.',
  },
  {
    id: 4,
    question: 'Is it safe to use AI-generated code optimizations?',
    answer: 'Absolutely! Code Optima includes rigorous benchmarking, testing, and validation to ensure optimizations maintain functionality. All changes are proposed via pull requests for your team to review, and our rollback safety nets ensure you can quickly revert any changes if needed.',
  },
  {
    id: 5,
    question: 'How does Code Optima help with environmental impact?',
    answer: 'We track energy consumption and CO₂ emissions for your codebase, providing recommendations to reduce your carbon footprint. Our optimizations focus on both performance and energy efficiency, helping you build more sustainable applications.',
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
