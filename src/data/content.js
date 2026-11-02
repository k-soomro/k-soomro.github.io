export const profile = {
  name: "Dr Kamran Soomro",
  title: "Associate Professor of Artificial Intelligence",
  university: "UWE Bristol",
  department: "School of Computing and Creative Technologies",
  bioExcerpt: "AI researcher working on citizen participation in smart cities, NLP, and knowledge management.",
  credentials: ["BE Software Engineering", "PhD Computer Science", "FHEA"],
  links: {
    scholar: "https://scholar.google.com/citations?hl=en&user=vxWLlqIAAAAJ",
    orcid: "https://orcid.org/0000-0002-6673-2277",
    linkedin: "www.linkedin.com/in/kamran-soomro-b3b1266",
    uweProfile: "https://people.uwe.ac.uk/Person/KamranSoomro",
  },
};

export const bio = `I am an interdisciplinary researcher and Associate Professor of Artificial Intelligence in the School of Computing and Creative Technologies at UWE Bristol. My work sits at the intersection of computing, urban science, and civic governance, drawing on methods from data science, generative AI, and digital twins to address complex societal challenges. I hold a Bachelor of Engineering in Computer Software Engineering from the National University of Sciences and Technology and a PhD in Computer Science from the University of the West of England. Over the past decade, I have focused on bridging Data Science and Urban Informatics, with a growing emphasis on participatory approaches that bring communities, data, and AI into shared decision-making.

My research is inherently cross-disciplinary, spanning AI, urban informatics, and civic technology. It brings together generative AI, deep learning, and large language models (LLMs) with knowledge engineering, big data, and natural language processing to support smart cities, participatory urban governance, and evidence-informed public decision-making. I am particularly interested in how computational methods — especially digital twins and LLMs — can mediate between technical systems and the communities they serve.

My research portfolio reflects a sustained engagement with EU- and UK-funded projects that cross computational, urban, and social domains, including EU FP7 neuGRID, urbanAPI, and DECUMANUS, H2020 Smarticipate and CURE, and the HEU GREENGAGE project. Following the completion of GREENGAGE, I am currently engaged in impact development activities, working with local communities to disseminate the knowledge generated through the project — a process that extends research beyond academia into civic practice. I have also led machine learning Knowledge Transfer Partnerships (KTPs) bridging industry and academia, and am an active member of the EPSRC Peer Review College.

Alongside my academic work, I have worked as a Data Scientist with the NHS, contributing to projects focused on improving the quality of patient care — experience that directly informs my interest in applying AI to public-sector challenges. My teaching similarly cuts across disciplinary boundaries, pairing technical foundations with their application to business, civic, and societal problems. I have taught a wide range of courses, including Databases, Web Programming, Principles of Computing, and Web Security, and have supervised approximately 50 undergraduate and postgraduate projects. I currently teach Data Mining and Data Visualisation in Business Intelligence, and I am a Fellow of the Higher Education Academy (FHEA).

My engagement extends beyond research and teaching into mentorship, scholarly service, and public-sector practice. I mentor through the UWE Women's Research Mentoring Scheme and the Elevate Mentoring scheme, and I served as Area Chair for NeurIPS 2026.`;

export const researchInterests = [
  // AI & Computation
  "Generative AI & Large Language Models",
  "Deep Learning",
  "Natural Language Processing",
  "Knowledge Engineering & Representation",

  // Data & Urban Science
  "Data Science",
  "Big Data Analytics",
  "Digital Twins",
  "Smart Cities",
  "Urban Informatics",
  "Technology-Enhanced Urban Planning",
  "Distributed & Cloud Computing",

  // Society & Governance
  "Participatory Urban Governance",
  "Digital Democracy & Citizen Participation",
  "Civic Technology",
  "Knowledge Management",
];

export const projects = [
  {
    id: 1,
    name: "HEU GREENGAGE",
    funder: "Horizon Europe",
    role: "Co-Investigator",
    description:
      "Leading software requirements management and evaluation in this Horizon Europe project focusing on green citizen engagement in urban environments.",
    status: "past",
  },
  {
    id: 2,
    name: "H2020 CURE",
    funder: "Horizon 2020",
    role: "Co-Investigator",
    description:
      "European collaborative project exploring urban resilience and citizen engagement with AI-driven tools.",
    status: "past",
  },
  {
    id: 3,
    name: "H2020 Smarticipate",
    funder: "Horizon 2020",
    role: "Co-Investigator",
    description: "Smart citizen participation platform for urban planning and governance using digital technologies.",
    status: "past",
  },
  {
    id: 4,
    name: "EU FP7 DECUMANUS",
    funder: "EU FP7",
    role: "Co-Investigator",
    description:
      "Large-scale urban monitoring and analysis system integrating heterogeneous data streams for city management.",
    status: "past",
  },
  {
    id: 5,
    name: "EU FP7 urbanAPI",
    funder: "EU FP7",
    role: "Researcher",
    description:
      "Urban analytics platform providing real-time APIs for city data to support participatory decision-making.",
    status: "past",
  },
  {
    id: 6,
    name: "EU FP7 neuGRID",
    funder: "EU FP7",
    role: "Researcher",
    description:
      "Grid computing infrastructure for large-scale neuroscience data analysis across European research institutions.",
    status: "past",
  },
  {
    id: 7,
    name: "British Council Newton Institution Links Programme",
    funder: "British Council",
    role: "Co-Investigator",
    description:
      "International collaboration with Taylors' University Malaysia under the Newton Institution Links Programme.",
    status: "past",
  },
  {
    id: 8,
    name: "KTP — Machine Learning",
    funder: "Innovate UK",
    role: "Academic Lead",
    description:
      "Knowledge Transfer Partnership applying machine learning to industry challenges in collaboration with a local partner.",
    status: "past",
  },
];

export const publications = [
  {
    id: 1,
    year: 2026,
    title: "Leveraging LLMs for Smart Cities qualitative data analysis",
    authors: "Covato, E., Soomro, K., Khan, Z., Bilal, M., Cormack, R., & Green, S.",
    venue: "Concurrency and Computation: Practice and Experience, 38(3), e70547",
    doi: "https://doi.org/10.1002/cpe.70547",
    type: "journal",
  },
  {
    id: 2,
    year: 2025,
    title:
      "TEMSET-24K: Densely annotated dataset for indexing multipart endoscopic videos using surgical timeline segmentation",
    authors:
      "Bilal, M., Alam, M., Bapu, D., Korsgen, S., Lal, N., Bach, S., Hajiyavand, A. M., Ali, M., Soomro, K., Qasim, I., Capik, P., Khan, A., Khan, Z., Vohra, H., Caputo, M., Beggs, A. D., Qayyum, A., Qadir, J., & Ashraf, S. Q.",
    venue: "Scientific Data, 12(1), 1424",
    doi: "https://doi.org/10.1038/s41597-025-05646-w",
    type: "journal",
  },
  {
    id: 3,
    year: 2025,
    title:
      "Gamifying engagement in spatial crowdsourcing: An exploratory mixed-methods study on gamification impact among university students",
    authors: "Vergara-Borge, F., López-de-Ipiña, D., Emaldi, M., Olivares-Rodríguez, C., Khan, Z., & Soomro, K.",
    venue: "Systems, 13(7), 519",
    doi: "https://doi.org/10.3390/systems13070519",
    type: "journal",
  },
  {
    id: 4,
    year: 2025,
    title: "GREENGAGE-based Citizen Observatory White Book for public administration",
    authors:
      "Hall, S., Sardo, M., Khan, Z., Peters-Anders, J., Kozłowska, A., Gebetsroither, E., Vuckovic, M., Martens, S., Scavino, G., Grimes, A., Costa Carneiro, J., Sanz, F., Lisbona, D., Lopez de Ipina, D., Soomro, K., Reeh, R., & Cormac, R.",
    venue: "GREENGAGE Project",
    doi: "https://uwe-repository.worktribe.com/output/15506698",
    type: "report",
  },
  {
    id: 5,
    year: 2024,
    title: "Leveraging LLMs for smart cities qualitative data analysis",
    authors: "Covato, E., Soomro, K., Khan, Z., Bilal, M., Kirby, S., & Yiangou, T.",
    venue: "IDC 2024 — 17th International Symposium on Intelligent Distributed Computing, Brighton, UK",
    doi: "https://doi.org/10.1007/978-3-031-87639-4_16",
    type: "conference",
  },
  {
    id: 6,
    year: 2023,
    title: "SIGNED: Smart cIty diGital twiN vErifiable data framework",
    authors: "Pervez, Z., Khan, Z., Ghafoor, A., & Soomro, K.",
    venue: "IEEE Access, 11, 29430–29446",
    doi: "https://doi.org/10.1109/ACCESS.2023.3260621",
    type: "journal",
  },
  {
    id: 7,
    year: 2023,
    title:
      "An evaluation into procalcitonin levels in full-term neonates managed for suspected early onset sepsis due to probable maternal intrapartum sepsis",
    authors: "Walker, S., Harding, I., Soomro, K., Bamber, A. R., & Liebling, R. E.",
    venue: "Journal of Neonatology, 37(4), 325–333",
    doi: "https://doi.org/10.1177/09732179231169623",
    type: "journal",
  },
  {
    id: 8,
    year: 2022,
    title:
      "An evaluation into the use of procalcitonin levels as a biomarker of bacterial sepsis to aid the management of intrapartum pyrexia and chorioamnionitis",
    authors: "Walker, S., Harding, I., Soomro, K., Bamber, A. R., Carrick, S., Waheed, A. H., & Liebling, R. E.",
    venue: "AJOG Global Reports, 2(3), 100064",
    doi: "https://doi.org/10.1016/j.xagr.2022.100064",
    type: "journal",
  },
  {
    id: 9,
    year: 2021,
    title:
      "The dynamics of procalcitonin in COVID-19 patients admitted to Intensive care unit — a multi-centre cohort study in the South West of England, UK",
    authors:
      "Williams, P., McWilliams, C., Soomro, K., Harding, I., Gurney, S., Thomas, M., Albur, M., & Martin Williams, O.",
    venue: "Journal of Infection, 82(6), E24–E26",
    doi: "https://doi.org/10.1016/j.jinf.2021.03.011",
    type: "journal",
  },
];

export const teaching = {
  current: [
    { name: "Business Intelligence and Data Mining", level: "Level 6 / UG" },
    { name: "Business Intelligence and Data Visualisation", level: "Level 7 / PG" },
    { name: "Advanced Specialist Text Study", level: "Level 7 / PG" },
  ],
  past: ["Databases", "Web Programming", "Principles of Computing", "Web Security"],
  supervisions: "Extensive experience of supervising undergraduate and postgraduate students.",
};

export const leadership = [
  {
    id: 1,
    role: "Area Chair",
    org: "NeurIPS 2026",
    detail: "Neural Information Processing Systems · 2026",
    upcoming: false,
  },
  {
    id: 2,
    role: "Member",
    org: "EPSRC Peer Review College",
    detail: "Engineering and Physical Sciences Research Council",
    upcoming: false,
  },
  {
    id: 3,
    role: "Mentor",
    org: "UWE WRMS",
    detail: "UWE Women's Research Mentoring Scheme",
    upcoming: false,
  },
  {
    id: 4,
    role: "Mentor",
    org: "Elevate Mentoring",
    detail: "UWE Elevate Mentoring Scheme",
    upcoming: false,
  },
  {
    id: 5,
    role: "Fellow",
    org: "Higher Education Academy",
    detail: "FHEA — Fellowship of the Higher Education Academy",
    upcoming: false,
  },
];

export const news = [
  {
    id: 1,
    date: "23 October 2026",
    title: "Bristol Post — can we trust AI's city knowledge?",
    body: "Quoted as the sole academic expert in a Bristol Post test of ChatGPT's Bristol knowledge, discussing free-tier model limitations, inherited bias, and the importance of verifying AI output against trusted sources.",
  },
  {
    id: 2,
    date: "19 August 2026",
    title: "BBC Radio Sussex — facial recognition, care robots and the pace of AI",
    body: "Interviewed on AI in elder care, the Sainsbury's Facewatch facial-recognition case, automation and workforce deskilling, and why societal capacity should shape the pace of AI adoption.",
    link: "https://www.bbc.co.uk/sounds/brand/p007fgj9",
    linkLabel: "Listen on BBC Sounds",
  },
  {
    id: 3,
    date: "12 August 2026",
    title: "BBC Radio Bristol — are AI models going 'rogue'?",
    body: "Interviewed on reports that frontier AI models carried out cyber attacks during testing, explaining goal-directed behaviour, the lack of built-in ethical judgement, and the lowering of the expertise barrier for offensive cyber capability.",
    link: "https://www.bbc.co.uk/sounds/play/m002zp1f",
    linkLabel: "Listen on BBC Sounds",
  },
  {
    id: 4,
    date: "May 2026",
    title: "Area Chair at NeurIPS 2026",
    body: "Served as Area Chair at NeurIPS 2026 — one of the premier venues for machine learning and AI research.",
  },
];
