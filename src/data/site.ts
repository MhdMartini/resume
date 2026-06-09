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
      'Built reinforcement-learning agents and environments for cooperative multi-agent search-and-rescue, and YOLO-based object-detection training/inference pipelines with generative data augmentation.',
  },
];

export type Education = { degree: string; org: string; meta: string };

export const education: Education[] = [
  { degree: 'M.S. Computer Engineering', org: 'UMass Lowell', meta: 'GPA 4.0 · 2022' },
  { degree: 'B.S. Electrical Engineering', org: 'UMass Lowell', meta: 'GPA 3.8 · 2021' },
];

export type Recognition = {
  rank: string; // headline result, e.g. "Top 6%"
  title: string;
  meta: string; // year / scope
  metric: string; // short highlighted differentiator
  blurb: string;
  tags: string[];
  links: { label: string; href: string }[];
};

export const recognition: Recognition[] = [
  {
    rank: 'Top 6%',
    title: 'Kaggle · House Prices: Advanced Regression Techniques',
    meta: '2022',
    metric: 'Single model · no ensembling',
    blurb:
      'Landed in the top 6% with one tuned CatBoost regressor — no stacking or blending. The lift came from feature work, not model count: domain-aware ordinal encoding of the quality ladders, a model-based imputer for missing numerics, and degree-2 polynomial interactions over hand-built signals like age-at-sale and area aggregates.',
    tags: ['CatBoost', 'Feature engineering', 'Polynomial interactions', 'Model-based imputation', 'GridSearchCV'],
    links: [
      {
        label: 'Notebook',
        href: 'https://www.kaggle.com/code/mohamedmartini/house-price-prediction-top-6-no-ensemble',
      },
      {
        label: 'Competition',
        href: 'https://www.kaggle.com/competitions/house-prices-advanced-regression-techniques',
      },
    ],
  },
];

export type Certification = {
  title: string;
  issuer: string;
  meta: string; // scope / year
  file: string; // path under public/ — opens the PDF
};

export const certifications: Certification[] = [
  {
    title: 'Advanced Learning Algorithms',
    issuer: 'DeepLearning.AI · Stanford',
    meta: '2022',
    file: '/certificates/advanced-learning-algorithms.pdf',
  },
  {
    title: 'Data Engineering, Big Data & ML on GCP',
    issuer: 'Google Cloud',
    meta: 'Specialization · 5 courses · 2022',
    file: '/certificates/data-engineering-ml-gcp.pdf',
  },
  {
    title: 'Retrieval Augmented Generation (RAG)',
    issuer: 'DeepLearning.AI',
    meta: '2026',
    file: '/certificates/retrieval-augmented-generation.pdf',
  },
];

export type SkillGroup = { label: string; items: string[] };

export const skills: SkillGroup[] = [
  { label: 'Programming Languages', items: ['Python', 'SQL', 'C / C++', 'Dart'] },
  {
    label: 'ML & Deep Learning',
    items: ['TensorFlow', 'PyTorch', 'Pandas', 'NumPy', 'scikit-learn', 'OpenCV', 'Model Optimization'],
  },
  {
    label: 'GenAI & LLM',
    items: ['LangChain', 'LangGraph', 'RAG', 'HuggingFace', 'Weaviate', 'pgvector'],
  },
  {
    label: 'Data & Cloud',
    items: ['Apache Beam', 'BigQuery', 'PySpark', 'Airflow', 'Kafka', 'Postgres', 'Pub/Sub', 'GCP', 'Cloud Run', 'Cloud Functions', 'Model Registry', 'Artifact Registry', 'GCS', 'IAM', 'Cloud Logging', 'Cloud Trace'],
  },
  {
    label: 'Backend & DevOps',
    items: ['FastAPI', 'REST', 'gRPC', 'WebSockets', 'SSE', 'Docker', 'Docker Compose', 'GitHub Actions', 'OpenTelemetry', 'uv workspaces'],
  },
];

export type Testimonial = {
  quote: string[]; // one entry per paragraph
  name: string;
  relationship: string;
  company: string;
  profile: string; // LinkedIn URL — links the name for verifiability
};

// Ordered as displayed. Sourced from LinkedIn recommendations.
export const testimonials: Testimonial[] = [
  {
    quote: [
      'I had the pleasure of working with Mohamed for over three years at Pison Technology, where he served as a Machine Learning Engineer within the ML team of the Algorithm Division that I led.',
      'During that time, Mohamed played an important role in the development of our EMG-based machine learning algorithms and supporting software tooling. He consistently demonstrated strong technical skills in machine learning, cloud computing, and software development, while maintaining a practical, results-oriented mindset.',
      'One of Mohamed’s standout qualities is his responsiveness and reliability. He consistently delivered high-quality work on schedule and could always be counted on to take ownership of his assignments. He is highly self-motivated, learns quickly, and proactively seeks solutions to challenging technical problems.',
      'Beyond his technical capabilities, Mohamed is a positive and collaborative teammate. He is approachable, friendly, and works well with colleagues across functions. Most importantly, he conducts himself with professionalism and integrity, earning the trust and respect of those around him.',
      'I would highly recommend Mohamed to any organization seeking a talented machine learning engineer with strong technical expertise, a great work ethic, and excellent character. I am confident he will be a valuable asset to any team he joins.',
    ],
    name: 'Xiaofeng Tan',
    relationship: 'Manager',
    company: 'Pison Technology',
    profile: 'https://www.linkedin.com/in/xiaofeng-tan-0a832369/',
  },
  {
    quote: [
      'I had the pleasure of working with Mo at Pison and can confidently say he’s one of the most thoughtful engineers I’ve worked with.',
      'Mo has a strong ability to understand the larger system, navigate trade-offs, and consistently deliver high-quality work. His solutions are well-reasoned, practical, and built with care.',
      'What I appreciated most, though, was how easy he is to work with. Mo is humble, even-keeled, and collaborative. No matter the challenge or pressure, he brings a calm presence and thoughtful perspective that helps teams make better decisions.',
      'He’s the kind of engineer you trust with important problems and foundational systems. Any team would be fortunate to have him.',
    ],
    name: 'Mike Kowalczyk',
    relationship: 'Colleague',
    company: 'Pison Technology',
    profile: 'https://www.linkedin.com/in/mike-kowalczyk-78592839/',
  },
  {
    quote: [
      'I worked closely with Mo on several projects including machine learning infrastructure and pipelines as well as data science modeling.',
      'One of the projects I was impressed with was his design and development of a custom ML pipeline that simply took YAML files with high-level instructions and converted them to full ML pipelines that ran in one line. The impressive part was the easy integration with existing Pison custom preprocessing functions and model. It allowed the Data Science team to be much more efficient and let us focus on the actual experiments and development.',
    ],
    name: 'Sam Kovaly',
    relationship: 'Teammate',
    company: 'Pison Technology',
    profile: 'https://www.linkedin.com/in/sam-kovaly-101/',
  },
  {
    quote: [
      'I highly recommend Mo. Not only does he have an impressive breadth of knowledge (from ML to life sciences), but he is also an exceptional collaborator and mentor.',
      'Mo and I worked together on several projects, and throughout that time he consistently demonstrated both technical expertise and a genuine willingness to help others grow. As a data analyst from a non-technical background, I greatly appreciated the time he took out of his busy schedule to review the structure and efficiency of my code! This feedback was not required for the project and was offered purely to help me grow as a programmer.',
    ],
    name: 'Katherine Fronczak',
    relationship: 'Colleague',
    company: 'Pison Technology',
    profile: 'https://www.linkedin.com/in/katherine-fronczak/',
  },
];
