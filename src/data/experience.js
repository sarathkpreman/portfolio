import { FaBrain } from 'react-icons/fa6';
import { FiLayers, FiMonitor } from 'react-icons/fi';

export const experienceCards = [
  {
    id: 1,
    period: '2026 — NOW',
    status: 'current',
    icon: FaBrain,

    title: 'AI & PRODUCTION ENGINEERING',
    subtitle: 'SELF-DIRECTED ENGINEERING',

    description:
      'Advancing towards production-grade software engineering by combining full-stack development, backend systems, and AI application development.',

    tags: [
      'NESTJS',
      'TYPESCRIPT',
      'PYTHON',
      'MACHINE LEARNING',
      'SYSTEM DESIGN',
      'CLOUD',
    ],

    highlights: [
      'Designing scalable backend architectures',
      'Building AI-powered application workflows',
      'Exploring production practices and system design',
    ],

    accent: 'purple',
  },

  {
    id: 2,
    period: '2025 — 2026',
    status: 'completed',
    icon: FiLayers,

    title: 'FULL-STACK APPLICATION DEVELOPMENT',
    subtitle: 'INDEPENDENT PROJECTS',

    description:
      'Built modern full-stack applications focusing on frontend architecture, backend APIs, databases, authentication, and real-world product workflows.',

    tags: [
      'REACT',
      'NESTJS',
      'POSTGRESQL',
      'DOCKER',
      'GCP',
    ],

    highlights: [
      'Developed production-style applications',
      'Implemented authentication and database systems',
      'Built REST APIs and application workflows',
    ],

    accent: 'orange',
  },

  {
    id: 3,
    period: '2024 — 2025',
    status: 'completed',
    icon: FiMonitor,

    title: 'SOFTWARE ENGINEERING FOUNDATION',
    subtitle: 'BIGBINARY ACADEMY',

    description:
      'Completed intensive full-stack development training focused on Ruby on Rails, React, databases, and professional software engineering practices.',

    tags: [
      'RUBY ON RAILS',
      'REACT',
      'JAVASCRIPT',
      'SQL',
      'GIT',
    ],

    highlights: [
      'Built full-stack applications using Rails and React',
      'Learned MVC architecture and API development',
      'Practiced clean code and engineering workflows',
    ],

    accent: 'teal',
  },
];