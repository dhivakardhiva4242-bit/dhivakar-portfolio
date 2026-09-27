import {
  PersonalInfo,
  SkillItem,
  LearningTopic,
  ProjectItem,
  EducationItem,
  CertificationItem,
  AchievementItem,
} from '../types/portfolio';

export const personalInfo: PersonalInfo = {
  name: 'Dhivakar',
  role: 'AI & Data Science Student',
  degree: 'B.Tech Artificial Intelligence & Data Science',
  college: 'Bannari Amman Institute of Technology (BIT)',
  collegeShort: 'BIT',
  location: 'Coimbatore, Tamil Nadu, India',
  email: 'dhivakardhiva4242@gmail.com',
  githubUsername: 'dhivakardhiva4242-bit',
  githubUrl: 'https://github.com/dhivakardhiva4242-bit',
  linkedinUsername: 'dhivakarb-ai',
  linkedinUrl: 'https://linkedin.com/in/dhivakarb-ai',
  bio: "First-year B.Tech student in Artificial Intelligence and Data Science at Bannari Amman Institute of Technology. Dedicated to mastering programming languages, data structures, algorithms, machine learning fundamentals, and modern software development.",
  status: 'Actively Learning & Building Foundations',
  careerInterests: [
    'AI/ML Engineering',
    'Software Development',
    'Data Science & Analytics',
    'Cloud Computing & Architecture',
  ],
};

export const skillsData: SkillItem[] = [
  // Programming
  {
    name: 'C Programming',
    category: 'programming',
    stage: 'Core Foundation',
    iconName: 'Code2',
    description: 'System-level fundamentals, pointers, memory allocation, and algorithmic basics.',
    topics: ['Syntax & Logic', 'Pointers & Memory', 'Functions & Recursion', 'Structures'],
  },
  {
    name: 'C++',
    category: 'programming',
    stage: 'Core Foundation',
    iconName: 'Cpu',
    description: 'Object-oriented programming, standard template library (STL), and competitive problem solving.',
    topics: ['OOP Principles', 'STL Vectors & Maps', 'Classes & Objects', 'Algorithm Implementations'],
  },
  {
    name: 'Java',
    category: 'programming',
    stage: 'Active Practice',
    iconName: 'Coffee',
    description: 'Strong object-oriented fundamentals, platform independence, and computational logic.',
    topics: ['Class Hierarchies', 'Inheritance & Polymorphism', 'Exception Handling', 'Collections Framework'],
  },
  {
    name: 'Python',
    category: 'programming',
    stage: 'Active Practice',
    iconName: 'Terminal',
    description: 'Versatile scripting, scripting data structures, numerical computing, and AI/ML foundations.',
    topics: ['Data Manipulation', 'File I/O', 'Modular Scripts', 'Algorithm Prototyping'],
  },
  // Web Development
  {
    name: 'HTML5',
    category: 'web',
    stage: 'Core Foundation',
    iconName: 'FileCode2',
    description: 'Semantic markup, accessibility, modern web structure, and responsive layout foundations.',
    topics: ['Semantic Elements', 'Web Accessibility', 'Forms & Validation', 'DOM Structure'],
  },
  {
    name: 'CSS3',
    category: 'web',
    stage: 'Core Foundation',
    iconName: 'Palette',
    description: 'Responsive styling, Flexbox, CSS Grid, media queries, and sleek modern UI design.',
    topics: ['Flexbox & Grid', 'Responsive Breakpoints', 'Transitions & Keyframes', 'Modern CSS Variables'],
  },
  {
    name: 'JavaScript',
    category: 'web',
    stage: 'Active Practice',
    iconName: 'Binary',
    description: 'Dynamic user interfaces, DOM manipulation, asynchronous patterns, and web interactivity.',
    topics: ['ES6+ Syntax', 'DOM Manipulation', 'Event Handling', 'Fetch & Async/Await'],
  },
  // AI & Data Science
  {
    name: 'AI & ML Fundamentals',
    category: 'ai-ml',
    stage: 'In Progress',
    iconName: 'BrainCircuit',
    description: 'Exploring machine learning concepts, classification, regression, model pipelines, and AI principles.',
    topics: ['Supervised Learning', 'Model Evaluation', 'Feature Engineering', 'Data Preprocessing'],
  },
  {
    name: 'Data Science Concepts',
    category: 'ai-ml',
    stage: 'In Progress',
    iconName: 'BarChart3',
    description: 'Statistical thinking, exploratory data analysis, dataset cleaning, and pattern recognition.',
    topics: ['Descriptive Statistics', 'Data Cleansing', 'Visual Insights', 'Pattern Identification'],
  },
  // Core Concepts
  {
    name: 'Data Structures & Algorithms',
    category: 'core',
    stage: 'Active Practice',
    iconName: 'GitBranch',
    description: 'Mastering arrays, strings, linked lists, stacks, queues, trees, searching, and sorting techniques.',
    topics: ['Arrays & Strings', 'Linked Lists & Stacks', 'Searching & Sorting', 'Time & Space Complexity'],
  },
  {
    name: 'Object-Oriented Programming',
    category: 'core',
    stage: 'Core Foundation',
    iconName: 'Layers',
    description: 'Designing modular, maintainable codebases utilizing encapsulation, inheritance, and abstraction.',
    topics: ['Encapsulation', 'Abstraction', 'Polymorphism', 'Design Patterns'],
  },
  {
    name: 'Algorithmic Problem Solving',
    category: 'core',
    stage: 'Active Practice',
    iconName: 'Compass',
    description: 'Deconstructing computational challenges, tracing edge cases, and crafting optimized solutions.',
    topics: ['Edge-Case Tracing', 'Recursion & Iteration', 'Dry-Running Logic', 'Optimization'],
  },
];

export const currentLearningList: LearningTopic[] = [
  {
    title: 'C & C++ Deep Dive',
    category: 'Low-Level & Memory',
    focusArea: 'Pointers, dynamic memory management, STL containers, and algorithm performance.',
    status: 'In Progress',
    tools: ['GCC Compiler', 'GDB', 'Modern C++20'],
  },
  {
    title: 'Data Structures & Algorithms',
    category: 'Core Computer Science',
    focusArea: 'Linear & non-linear structures, recursion, binary search, sorting algorithms, and complexity analysis.',
    status: 'In Progress',
    tools: ['C++', 'Python', 'LeetCode Practice'],
  },
  {
    title: 'Java Fundamentals & OOP',
    category: 'Software Engineering',
    focusArea: 'Robust class design, interfaces, abstract classes, collections, and modular programming.',
    status: 'In Progress',
    tools: ['OpenJDK', 'IntelliJ / VS Code', 'OOP Design'],
  },
  {
    title: 'Python for AI & Data',
    category: 'AI / Data Science',
    focusArea: 'NumPy arrays, Pandas data manipulation, exploratory data analysis, and mathematical foundations for ML.',
    status: 'In Progress',
    tools: ['Python 3.12', 'Jupyter Notebooks', 'NumPy / Pandas'],
  },
  {
    title: 'Web Engineering Basics',
    category: 'Frontend Development',
    focusArea: 'Modern responsive web layouts, interactive JavaScript, DOM APIs, and component architecture.',
    status: 'In Progress',
    tools: ['HTML5', 'CSS3 / Tailwind', 'Modern JavaScript'],
  },
  {
    title: 'Cloud Computing Foundations',
    category: 'Cloud & Infrastructure',
    focusArea: 'Cloud paradigms, compute instances, object storage, virtualization, and deployment basics.',
    status: 'In Progress',
    tools: ['Cloud Concepts', 'Linux CLI', 'Git Version Control'],
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: 'project-1',
    title: 'AI / ML Predictive Model',
    tagline: 'Supervised Learning & Exploratory Data Analysis Pipeline',
    description:
      'Upcoming machine learning application focusing on data preprocessing, feature engineering, and predictive classification using statistical models.',
    category: 'AI & Data Science',
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn', 'Matplotlib'],
    status: 'In Development',
    highlights: [
      'Data cleaning and missing value imputation pipeline',
      'Evaluation metrics including precision, recall, and accuracy',
      'Interactive visualization of decision boundaries and features',
    ],
    githubUrl: 'https://github.com/dhivakardhiva4242-bit',
    liveUrl: '#',
    isPlaceholder: true,
  },
  {
    id: 'project-2',
    title: 'DSA Visualizer & Algorithm Workbench',
    tagline: 'Interactive Exploration of Sorting, Searching & Graph Traversal',
    description:
      'A software tool built to visualize data structure operations, step-by-step sorting routines, and search algorithms to deepen algorithmic intuition.',
    category: 'Algorithms & Software',
    technologies: ['C++', 'JavaScript', 'HTML5 Canvas', 'CSS Grid'],
    status: 'In Development',
    highlights: [
      'Visual step-by-step execution of quicksort, mergesort, and binary search',
      'Time complexity comparison with animated comparison bars',
      'Interactive array input and custom dataset generator',
    ],
    githubUrl: 'https://github.com/dhivakardhiva4242-bit',
    liveUrl: '#',
    isPlaceholder: true,
  },
  {
    id: 'project-3',
    title: 'Student Academic Portal & Task Manager',
    tagline: 'Modern Web Utility for Study Schedules & Resource Tracking',
    description:
      'A responsive web application designed for engineering students to track assignment milestones, coursework resources, and programming problem logs.',
    category: 'Web Development',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'Local Storage', 'REST APIs'],
    status: 'Planned',
    highlights: [
      'Dynamic schedule organizer with persistent browser storage',
      'Clean responsive layout optimized across mobile and desktop',
      'Modular component structure for seamless future backend integration',
    ],
    githubUrl: 'https://github.com/dhivakardhiva4242-bit',
    liveUrl: '#',
    isPlaceholder: true,
  },
  {
    id: 'project-4',
    title: 'C/C++ System Utility & File Parser',
    tagline: 'Command-Line Data Processing & Memory-Efficient Analysis Tool',
    description:
      'A command-line program engineered in C/C++ to process structured log files, calculate statistical summaries, and demonstrate low-level memory control.',
    category: 'Systems & Core',
    technologies: ['C', 'C++', 'File I/O', 'Dynamic Memory', 'CLI'],
    status: 'Planned',
    highlights: [
      'Custom buffer allocation for rapid file ingestion',
      'Hash table implementation for keyword frequency counts',
      'Clean error handling for malformed input files',
    ],
    githubUrl: 'https://github.com/dhivakardhiva4242-bit',
    liveUrl: '#',
    isPlaceholder: true,
  },
];

export const educationData: EducationItem = {
  degree: 'B.Tech in Artificial Intelligence & Data Science',
  institution: 'Bannari Amman Institute of Technology (BIT)',
  location: 'Sathyamangalam / Coimbatore, Tamil Nadu, India',
  status: 'Currently Pursuing (First Year Undergraduate)',
  period: '2025 – 2029',
  specialization: 'Artificial Intelligence, Machine Learning & Computational Data Science',
  keyAreas: [
    'Programming Fundamentals (C, C++, Java, Python)',
    'Data Structures & Algorithm Design',
    'Discrete Mathematics & Linear Algebra for AI',
    'Object-Oriented Software Principles',
    'Database Systems & Web Technologies',
    'Foundations of Machine Learning & Statistics',
  ],
};

export const certificationsData: CertificationItem[] = [
  {
    id: 'cert-1',
    title: 'Python for Data Science & AI Foundations',
    issuer: 'Certification in Progress / Planned Target',
    status: 'Upcoming / In Preparation',
    targetDate: '2026',
    description:
      'Foundational certification covering scientific Python, numerical computation with NumPy, data structures, and baseline algorithmic scripting.',
    topics: ['Python Programming', 'NumPy & Pandas', 'Data Analysis Fundamentals'],
    isPlaceholder: true,
  },
  {
    id: 'cert-2',
    title: 'Data Structures & Algorithms Specialization',
    issuer: 'Academic & Online Learning Track',
    status: 'Upcoming / In Preparation',
    targetDate: '2026',
    description:
      'Structured curriculum focusing on linear data structures, tree hierarchies, recursion, dynamic programming basics, and asymptotic analysis.',
    topics: ['Asymptotic Analysis', 'Recursion & Trees', 'Sorting & Searching Algorithms'],
    isPlaceholder: true,
  },
  {
    id: 'cert-3',
    title: 'Cloud Computing & Infrastructure Fundamentals',
    issuer: 'Cloud Foundation Track (AWS / Azure / GCP)',
    status: 'Upcoming / In Preparation',
    targetDate: '2026 - 2027',
    description:
      'Introductory credential targeting core cloud concepts, virtual machines, cloud storage, networking, and deployment pipelines.',
    topics: ['Cloud Architecture', 'Compute & Storage', 'Identity & Security Basics'],
    isPlaceholder: true,
  },
];

export const achievementsData: AchievementItem[] = [
  {
    id: 'achieve-1',
    title: 'College & Inter-Collegiate Hackathons',
    category: 'Hackathon',
    status: 'Active Goal & Upcoming Registrations',
    description:
      'Preparing to participate in upcoming national and regional student hackathons in AI, machine learning, and rapid web prototyping.',
    focus: 'Real-World Problem Solving, Rapid Prototyping & Team Collaboration',
    isPlaceholder: true,
  },
  {
    id: 'achieve-2',
    title: 'Competitive Coding & Algorithmic Challenges',
    category: 'Competition',
    status: 'Ongoing Daily Practice',
    description:
      'Active problem solving across coding platforms (LeetCode, HackerRank) focusing on fundamental data structures, loops, and condition logic.',
    focus: 'Time Complexity Optimization & Clean Code Discipline',
    isPlaceholder: true,
  },
  {
    id: 'achieve-3',
    title: 'BIT AI & Data Science Student Community Initiatives',
    category: 'Tech Club',
    status: 'Active Participation',
    description:
      'Engaging with campus technical clubs, peer study groups, and hands-on workshops at Bannari Amman Institute of Technology.',
    focus: 'Peer Learning, Technical Seminars & Collaborative Development',
    isPlaceholder: true,
  },
];
