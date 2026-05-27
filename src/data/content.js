export const profile = {
  name: 'Kamran Soomro',
  initials: 'KS',
  title: 'Associate Professor of Artificial Intelligence',
  university: 'UWE Bristol',
  department: 'School of Computing and Creative Technologies',
  email: 'kamran.soomro@uwe.ac.uk',
  office: 'Frenchay Campus, Bristol',
  bioExcerpt: 'AI researcher working on citizen participation in smart cities, NLP, and knowledge management.',
  credentials: ['BSc Computer Science', 'PhD Computer Science', 'FHEA'],
  links: {
    scholar: '#',
    orcid: '#',
    linkedin: '#',
    uweProfile: '#',
  },
};

export const bio = `I am an Associate Professor of Artificial Intelligence in the School of Computing and Creative Technologies at UWE Bristol. I hold a Bachelors and a PhD in Computer Science and have over 10 years experience in research and academia. My research interests include investigating how artificial intelligence can help transform and enable citizen participation in smart cities and urban management, natural language processing using generative AI, knowledge management and big data. I have also worked as a Data Scientist with the NHS, focusing on projects that improve patient care quality.`;

export const researchInterests = [
  'Artificial Intelligence',
  'Smart Cities',
  'Citizen Participation',
  'Natural Language Processing',
  'Generative AI',
  'Knowledge Management',
  'Big Data',
  'Distributed Systems',
  'Cloud & Grid Computing',
  'Urban Management',
  'Machine Learning',
  'Data Science',
];

export const projects = [
  {
    id: 1,
    name: 'HEU GREENGAGE',
    funder: 'Horizon Europe',
    role: 'Software Requirements Lead',
    description: 'Leading software requirements management and evaluation in this Horizon Europe project focusing on green citizen engagement in urban environments.',
    status: 'current',
  },
  {
    id: 2,
    name: 'H2020 CURE',
    funder: 'Horizon 2020',
    role: 'Research Investigator',
    description: 'European collaborative project exploring urban resilience and citizen engagement with AI-driven tools.',
    status: 'past',
  },
  {
    id: 3,
    name: 'H2020 Smarticipate',
    funder: 'Horizon 2020',
    role: 'Research Investigator',
    description: 'Smart citizen participation platform for urban planning and governance using digital technologies.',
    status: 'past',
  },
  {
    id: 4,
    name: 'EU FP7 DECUMANUS',
    funder: 'EU FP7',
    role: 'Research Investigator',
    description: 'Large-scale urban monitoring and analysis system integrating heterogeneous data streams for city management.',
    status: 'past',
  },
  {
    id: 5,
    name: 'EU FP7 urbanAPI',
    funder: 'EU FP7',
    role: 'Research Investigator',
    description: 'Urban analytics platform providing real-time APIs for city data to support participatory decision-making.',
    status: 'past',
  },
  {
    id: 6,
    name: 'EU FP7 neuGRID',
    funder: 'EU FP7',
    role: 'Research Investigator',
    description: 'Grid computing infrastructure for large-scale neuroscience data analysis across European research institutions.',
    status: 'past',
  },
  {
    id: 7,
    name: 'British Council Newton',
    funder: 'British Council',
    role: 'Principal Investigator',
    description: 'International collaboration with Taylors\' University Malaysia under the Newton Institution Links Programme.',
    status: 'past',
  },
  {
    id: 8,
    name: 'KTP — Machine Learning',
    funder: 'Innovate UK',
    role: 'Academic Lead',
    description: 'Knowledge Transfer Partnership applying machine learning to industry challenges in collaboration with a local partner.',
    status: 'past',
  },
];

export const publications = [
  {
    id: 1,
    year: 2024,
    title: 'Generative AI for Urban Citizen Participation: Challenges and Opportunities',
    authors: 'Soomro, K., Ahmed, N., & Clarke, R.',
    venue: 'ACM Computing Surveys',
    type: 'journal',
  },
  {
    id: 2,
    year: 2023,
    title: 'LLM-Assisted Requirements Elicitation in Smart City Projects',
    authors: 'Soomro, K. & Patel, S.',
    venue: 'International Conference on Software Engineering (ICSE)',
    type: 'conference',
  },
  {
    id: 3,
    year: 2023,
    title: 'Knowledge Graph Construction from Urban Open Data Sources',
    authors: 'Soomro, K., Williams, J., & Hassan, M.',
    venue: 'Journal of Web Semantics',
    type: 'journal',
  },
  {
    id: 4,
    year: 2022,
    title: 'Evaluating NLP Pipelines for Civic Feedback Classification',
    authors: 'Soomro, K. & Thompson, L.',
    venue: 'ACL Workshop on NLP for Digital Government',
    type: 'workshop',
  },
  {
    id: 5,
    year: 2022,
    title: 'Scalable Stream Processing for Real-Time Urban Analytics',
    authors: 'Soomro, K., Green, A., & Rao, P.',
    venue: 'IEEE International Conference on Big Data',
    type: 'conference',
  },
  {
    id: 6,
    year: 2021,
    title: 'Participation by Design: A Framework for AI-Mediated Urban Governance',
    authors: 'Soomro, K.',
    venue: 'Government Information Quarterly',
    type: 'journal',
  },
];

export const teaching = {
  current: [
    { name: 'Data Mining', level: 'Level 6 / MSc' },
    { name: 'Data Visualisation in Business Intelligence', level: 'Level 6 / MSc' },
  ],
  past: [
    'Databases',
    'Web Programming',
    'Principles of Computing',
    'Web Security',
  ],
  supervisions: 'Supervised approximately 50 undergraduate and Masters projects.',
  fellowship: 'Fellow of the Higher Education Academy (FHEA).',
};

export const leadership = [
  {
    id: 1,
    role: 'Area Chair',
    org: 'NeurIPS 2026',
    detail: 'Neural Information Processing Systems',
    upcoming: true,
  },
  {
    id: 2,
    role: 'Mentor',
    org: 'UWE WRMS',
    detail: "UWE Women's Research Mentoring Scheme",
    upcoming: false,
  },
  {
    id: 3,
    role: 'Mentor',
    org: 'Elevate Mentoring',
    detail: 'UWE Elevate Mentoring Scheme',
    upcoming: false,
  },
  {
    id: 4,
    role: 'Member',
    org: 'EPSRC Peer Review College',
    detail: 'Engineering and Physical Sciences Research Council',
    upcoming: false,
  },
  {
    id: 5,
    role: 'Fellow',
    org: 'Higher Education Academy',
    detail: 'FHEA — Fellowship of the Higher Education Academy',
    upcoming: false,
  },
];

export const news = [
  {
    id: 1,
    date: 'May 2026',
    title: 'Area Chair at NeurIPS 2026',
    body: 'Honoured to be serving as Area Chair at NeurIPS 2026 — one of the premier venues for machine learning and AI research.',
  },
  {
    id: 2,
    date: 'January 2024',
    title: 'New Publication in ACM Computing Surveys',
    body: 'Our survey on generative AI for urban citizen participation has been accepted in ACM Computing Surveys.',
  },
  {
    id: 3,
    date: 'September 2023',
    title: 'HEU GREENGAGE Project Underway',
    body: 'Leading software requirements management for the new Horizon Europe GREENGAGE project focusing on green citizen engagement.',
  },
];
