// All page content lives here. Edit this file to update the portfolio —
// the components are content-agnostic.

export const profile = {
  name: 'Mohamed Martini',
  firstName: 'Mohamed',
  lastName: 'Martini',
  role: 'Machine Learning Engineer',
  // Hero one-liner.
  tagline:
    'I own ML end-to-end — from research-grade modeling to reliable, scalable, and maintainable products.',
  location: 'New Hampshire, US',
  available: true,
  availabilityLabel: 'Available for MLE roles',
  // Used in <meta> description / SEO.
  metaDescription:
    'Mohamed Martini — Machine Learning Engineer. Full-cycle ML: 1,200+ experiments and custom model architectures at Pison, and AI products shipped on iOS & Android through Lever AI.',
} as const;

export const links = {
  email: 'mhdmart1@gmail.com',
  github: 'https://github.com/MhdMartini',
  linkedin: 'https://linkedin.com/in/mohamed-martini',
  website: 'https://leverai.tech',
  resume: '/resume.pdf',
} as const;

export type Metric = { prefix?: string; value: number; suffix?: string; label: string };

export const metrics: Metric[] = [
  { prefix: '+', value: 15, suffix: '%', label: 'macro F1 gain on sleep-staging' },
  { value: 190, suffix: '×', label: 'faster batch ETL pipeline' },
  { value: 2, label: 'apps live on iOS & Android' },
];

export type ProjectStatus = 'shipped' | 'progress' | 'rnd';

export type Project = {
  name: string;
  status: ProjectStatus;
  statusLabel: string;
  description: string;
  metric: string; // short highlighted result line
  stack: string[];
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    name: 'Guesstimate',
    status: 'shipped',
    statusLabel: 'Shipped · iOS + Android',
    description:
      'An LLM-native numerical estimation game. A generative ETL pipeline produces 1,000+ semantically-unique questions; a multiplayer mode stays consistent via atomic Firestore transactions, with end-to-end distributed tracing across the Flutter client and FastAPI backend.',
    metric: '1,000+ generated questions · full OpenTelemetry tracing',
    stack: ['FastAPI', 'LangChain', 'Postgres + pgvector', 'Firestore', 'OpenTelemetry', 'Flutter'],
    links: [
      { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=tech.leverai.guesstimate' },
      { label: 'App Store', href: 'https://apps.apple.com/ca/app/guesstimate-not-trivia/id6756033242' },
    ],
  },
  {
    name: 'Sanad',
    status: 'progress',
    statusLabel: 'In progress',
    description:
      "A temporal legal citator and RAG system over 300k Syrian gazette scans — tracking statutory amendments and repeals like a Shepard's for Syrian law. A custom right-to-left OCR re-orderer and a 3-engine consensus pipeline turn noisy two-column Arabic scans into machine-readable, citable text.",
    metric: 'OCR character error 53.8 → 13.1',
    stack: ['RAG', 'OCR / Cloud Vision', 'Knowledge Graph', 'pgvector', 'Constrained decoding'],
  },
  {
    name: 'RenoVision Bot',
    status: 'rnd',
    statusLabel: 'R&D · Architecture',
    description:
      'A vision-first RAG advisor: photograph a DIY problem and get grounded answers with per-claim citations. Unifies text, image and video-frame embeddings in one retrieval space, with trust-tiered sources and safety-critical escalation for electrical, gas and structural work.',
    metric: 'Multimodal retrieval · per-claim citations',
    stack: ['Vision RAG', 'Multimodal embeddings', 'Voyage', 'Citations API', 'Postgres'],
  },
  {
    name: 'ThermoPulse',
    status: 'progress',
    statusLabel: 'In progress',
    description:
      'An industrial cold-chain monitoring system: streaming sensor telemetry, time-series analytics, and early fault detection to catch refrigeration failures before product spoils.',
    metric: 'Time-series analytics · early fault detection',
    stack: ['Time-series', 'Anomaly detection', 'IoT telemetry'],
  },
];

export type Experience = {
  date: string;
  role: string;
  org: string;
  orgMeta?: string;
  summary: string;
  highlights?: string[];
};

export const experience: Experience[] = [
  {
    date: 'Jul 2025 — Present',
    role: 'Founder & Principal Engineer',
    org: 'Lever AI',
    orgMeta: 'AI-powered, data-driven software',
    summary:
      'Founded an LLC building AI-powered software and SaaS, shipping production systems end-to-end with full architectural ownership.',
    highlights: [
      'Shipped Guesstimate to both app stores; incubating Sanad, ThermoPulse and RenoVision Bot.',
      'LLM-native ETL pipeline generating 1,000+ semantically-unique questions with embedding-based dedup and grounded answering.',
      'Cross-service observability via end-to-end distributed tracing, correlating Flutter events to FastAPI spans.',
      'GitFlow CI/CD with automated unit, integration and smoke tests across dev/prod deployments.',
    ],
  },
  {
    date: 'Oct 2022 — Jul 2025',
    role: 'Machine Learning Engineer III',
    org: 'Pison Technology',
    orgMeta: '2 yrs 10 mos · promoted MLE → MLE III',
    summary:
      'Owned the full cycle of biosignal ML products — from experimentation and custom architectures to deployment and drift monitoring.',
    highlights: [
      'Ran 1,200+ TensorFlow experiments for sleep-stage classification, improving baseline macro F1 by 15%.',
      'Mitigated class imbalance with cost-sensitive and contrastive losses; designed a custom gating layer for feature mining that cut the feature set by an order of magnitude.',
      'Sped a batch Apache Beam ETL pipeline by 190×; led BigQuery adoption with query-driven partitioning & clustering.',
      'Implemented a domain-invariant adversarial classification network in PyTorch from its original manuscript; Cythonized bottlenecks for real-time gesture detection.',
    ],
  },
  {
    date: 'Jan 2021 — Jun 2022',
    role: 'Research Assistant',
    org: 'University of Massachusetts Lowell',
    summary:
      'Built reinforcement-learning agents and environments for cooperative multi-agent search-and-rescue, and object-detection training/inference pipelines with generative data augmentation.',
  },
];

export type Education = { degree: string; org: string; meta: string };

export const education: Education[] = [
  { degree: 'M.S. Computer Engineering', org: 'UMass Lowell', meta: 'GPA 4.0 · 2022' },
  { degree: 'B.S. Electrical Engineering', org: 'UMass Lowell', meta: 'GPA 3.8 · 2021' },
];

export type SkillGroup = { label: string; items: string[] };

export const skills: SkillGroup[] = [
  { label: 'Languages', items: ['Python', 'SQL', 'C / C++', 'Dart'] },
  {
    label: 'AI / ML',
    items: ['TensorFlow', 'PyTorch', 'Pandas', 'NumPy', 'scikit-learn', 'Model Optimization', 'LangChain', 'LangGraph', 'RAG', 'HuggingFace'],
  },
  {
    label: 'Data & Cloud',
    items: ['Apache Beam', 'BigQuery', 'PySpark', 'Airflow', 'Kafka', 'Pub/Sub', 'Postgres', 'pgvector', 'Weaviate', 'GCP', 'Cloud Run', 'Cloud Functions', 'GCS', 'Model Registry', 'Artifact Registry', 'IAM', 'Cloud Logging', 'Cloud Trace'],
  },
  {
    label: 'Backend & Architecture',
    items: ['FastAPI', 'REST', 'gRPC', 'WebSockets', 'SSE'],
  },
  {
    label: 'Infra & CI/CD',
    items: ['Docker', 'Docker Compose', 'GitHub Actions', 'OpenTelemetry', 'uv workspaces'],
  },
];
