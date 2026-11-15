import { basePath, siteOrigin, siteUrl } from "@/content/site-config.mjs"

export { basePath, siteOrigin, siteUrl }

export const profile = {
  siteUrl,
  seoDescription:
    "I build production AI and data systems, including an agentic Text-to-SQL service for 10,000+ users. AI, data, and software engineer with 12 years of experience.",
  shareImageDescription: "I build production AI systems and the data platforms behind them.",
  shareImageAlt: "Surajit Maji — AI, data, and software engineer",
  name: "Surajit Maji",
  title: "AI, data, and software engineer",
  introduction:
    "I build and ship production AI systems and the data platforms behind them. I bring 12 years of experience across enterprise AI, machine learning, and data engineering.",
  email: "sm14460@nyu.edu",
  links: {
    github: "https://github.com/Jeet1922",
    linkedin: "https://www.linkedin.com/in/surajitmaji19",
    resume: `${basePath}/resume.pdf`,
  },
  facts: [
    { value: "10,000+", label: "users served by my agentic Text-to-SQL system" },
    { value: "70%", label: "less decision-making time" },
    { value: "40%", label: "higher AI solution reliability across 10+ systems" },
    { value: "200 hours/month", label: "of recurring manual work eliminated" },
  ],
  now: {
    id: "now",
    label: "NOW",
    year: "2026",
    years: "2026",
    introduction:
      "I’m studying machine learning and deep learning at NYU Tandon and building projects that connect neural networks, agentic workflows, and data engineering.",
  },
  education: [
    {
      institution: "New York University, Tandon School of Engineering",
      degree: "M.S. in Emerging Technologies (Artificial Intelligence & Machine Learning)",
      dates: "Expected May 2028",
      details: ["Graduate coursework: Machine Learning, Deep Learning"],
    },
    {
      institution: "West Bengal University of Technology",
      degree: "Bachelor of Technology",
      dates: "2009–2013",
      details: [],
    },
  ],
  eras: [
    {
      id: "pwc",
      label: "PwC",
      year: "2026",
      years: "2020–2026",
      role: "AI, Data & Analytics Solutions Lead",
      dates: "October 2020–May 2026",
      introduction:
        "I moved from enterprise data platforms into production AI, leading work across agentic systems, retrieval, model evaluation, and governed data foundations.",
      highlights: [
        "I architected and deployed a secure, agentic Text-to-SQL system with LangGraph and LangChain. It serves 10,000+ users and cut decision-making time by 70%.",
        "I built an automated LLM evaluation framework that tests faithfulness, semantic accuracy, hallucination risk, paraphrase robustness, and multi-turn behavior. It raised reliability by 40% across 10+ enterprise systems.",
        "I designed production RAG and conversational Q&A systems over enterprise knowledge bases and structured data.",
        "I built an LLM-powered ERP security solution that maps job descriptions to technical role requirements, automating role assignment and improving productivity by up to 60%. I also developed a data-modeling application that cut manual modeling effort by over 70%.",
        "I defined lakehouse patterns on Databricks and Microsoft Fabric and built governed PySpark data layers for 30+ clients. I delivered data and analytics across 50+ enterprise engagements.",
        "I built modular Python and SQL tools that removed up to 200 hours of recurring manual work each month across 40+ enterprise clients.",
        "I developed FastAPI services and operationalized models through Azure AI Foundry. I led CI/CD and production delivery with Azure DevOps, Docker, and Kubernetes, reducing deployment effort by approximately 70%.",
        "I embedded governance, privacy, security, and compliance controls in regulated-client work and led multidisciplinary AI and data teams.",
      ],
      skills: [
        "Python",
        "SQL",
        "LangGraph",
        "LangChain",
        "RAG",
        "RAGAS",
        "DeepEval",
        "FastAPI",
        "Azure AI Foundry",
        "Azure DevOps",
        "Docker",
        "Kubernetes",
        "PySpark",
        "Databricks",
        "Microsoft Fabric",
        "SAP HANA",
        "SAP SDI",
      ],
    },
    {
      id: "boeing",
      label: "Boeing",
      year: "2020",
      years: "2019–2020",
      role: "Information Designer – Data Analytics & Modelling",
      dates: "August 2019–October 2020",
      introduction:
        "I designed enterprise data models and reporting workflows, building on warehouse experience and making analytics data more usable.",
      highlights: [
        "I designed and developed 25+ enterprise data models, SAP HANA reporting solutions, and data-integration workflows.",
        "I translated stakeholder requirements into analytical data models and reporting solutions.",
      ],
      skills: ["SAP HANA", "Data modeling", "Reporting", "Data integration"],
    },
    {
      id: "ntt-data",
      label: "NTT DATA",
      year: "2019",
      years: "2018–2019",
      role: "Senior Consultant – Data & Analytics",
      dates: "June 2018–August 2019",
      introduction:
        "I developed the transformation and quality workflows that turn enterprise data into dependable analytics.",
      highlights: [
        "I built scalable ETL workflows and SQL data models for reporting and business decisions.",
        "I designed data transformations and integrations, and carried out data preparation and quality work across enterprise datasets.",
      ],
      skills: ["ETL", "SQL", "Data modeling", "Data transformation", "Data quality"],
    },
    {
      id: "tcs",
      label: "TCS",
      year: "2018",
      years: "2014–2018",
      role: "Systems Engineer – SAP BW/HANA & Analytics",
      dates: "June 2014–May 2018",
      introduction:
        "I began by building the warehouse and ETL foundation that later supported larger-scale data and AI systems.",
      highlights: [
        "I developed SAP BW/HANA data-warehouse solutions, scalable data models, and ETL pipelines for large-scale analytics workloads.",
      ],
      skills: ["SAP BW", "SAP HANA", "ETL", "Data warehousing", "Data modeling"],
    },
  ],
  origin: {
    id: "origin",
    label: "Origin",
    year: "2013",
    years: "2009–2013",
    introduction:
      "I earned my Bachelor of Technology from West Bengal University of Technology.",
  },
  next: {
    id: "next",
    label: "Next",
    year: "2028+",
    years: "2028+",
    introduction:
      "I expect to complete my M.S. in AI & ML at NYU Tandon in May 2028. I’m looking for senior AI engineering, data engineering, and machine learning roles in New York.",
    callToAction: "If you’re building production AI or data systems, I’d like to talk.",
  },
  projects: [
    {
      title: "CIFAR-10 ResNet under a 5M-Parameter Budget",
      url: "https://github.com/Jeet1922/resnet-5M-cifar10",
      context: "NYU Deep Learning, Fall 2026",
      description:
        "I trained a ResNet from scratch in PyTorch with 4.82M parameters, reaching 96.08% validation accuracy and 96.48% with flip test-time augmentation, without pretrained weights or external data.",
      details:
        "I built a 200-epoch recipe with Nesterov SGD, a OneCycle schedule, label smoothing, TrivialAugment, CutMix, EMA weight averaging, mixed precision, and checkpoint resume.",
      skills: ["PyTorch", "torchvision", "CNNs", "Mixed precision"],
    },
    {
      title: "Agentic AI Data Modeler",
      url: "https://github.com/Jeet1922/LangGraph-Agentic-AI-Data-Modeler",
      context: "",
      description:
        "I built a multi-step LangGraph workflow that turns business requirements and Excel data dictionaries into ERD JSON, SQL DDL for PostgreSQL, MySQL, and SQLite, and synthetic test data.",
      details:
        "I grounded generation in table and column metadata with Chroma and sentence-transformers, then served it through FastAPI and a Next.js/React interface.",
      skills: ["LangGraph", "FastAPI", "Chroma", "Sentence-Transformers", "Next.js", "TypeScript"],
    },
    {
      title: "Spark Movie Recommendation Pipeline",
      url: "https://github.com/Jeet1922/BE-ML-Spark-Powered-Movie-Recommendation",
      context: "",
      description:
        "I built a modular PySpark pipeline that ingests ratings, watch history, and search logs and generates personalized recommendations with ALS collaborative filtering.",
      details:
        "I engineered user-level features including watch counts, average rating, and rating deviation, then exported recommendation-ready datasets for BI tools.",
      skills: ["Apache Spark", "PySpark", "Spark MLlib", "Python", "TypeScript"],
    },
  ],
  certifications: [
    "Microsoft Certified: Azure AI Engineer Associate (AI-102)",
    "Google Cloud Training: Transformers & BERT Models",
    "Microsoft Copilot Studio",
    "SAFe 4 Practitioner – Scaled Agile Inc.",
  ],
  awards: [
    "SPOT Award – NTT DATA",
    "Service & Commitment Award – Tata Consultancy Services",
  ],
  skillGroups: [
    {
      label: "AI, agents & retrieval",
      skills: [
        "LLMs",
        "Agentic AI",
        "LangGraph",
        "LangChain",
        "RAG",
        "Text-to-SQL",
        "Embeddings",
        "Vector search",
        "Chroma",
        "Sentence-Transformers",
        "Azure AI Foundry",
        "Groq",
        "Copilot Studio",
      ],
    },
    {
      label: "Evaluation & responsible AI",
      skills: [
        "RAGAS",
        "DeepEval",
        "LLM-as-a-Judge",
        "Playwright",
        "Responsible AI",
        "Governance",
        "Data privacy",
        "Security",
      ],
    },
    {
      label: "Machine learning & deep learning",
      skills: [
        "PyTorch",
        "torchvision",
        "TensorFlow",
        "Hugging Face Transformers",
        "Scikit-learn",
        "Spark MLlib",
        "Pandas",
        "NumPy",
        "Regression",
        "Classification",
        "Feature engineering",
        "Model evaluation",
        "CNNs",
        "BERT",
        "Transformers",
        "Collaborative filtering (ALS)",
      ],
    },
    {
      label: "Data engineering & platforms",
      skills: [
        "Python",
        "SQL",
        "PySpark",
        "Apache Spark",
        "Databricks",
        "Microsoft Fabric",
        "Azure Synapse",
        "ETL/ELT",
        "Data pipelines",
        "Lakehouse architecture",
        "Data modeling",
        "Data warehousing",
        "SAP HANA",
        "SAP BW",
        "SAP SDI",
      ],
    },
    {
      label: "Software & delivery",
      skills: [
        "FastAPI",
        "REST APIs",
        "Next.js",
        "React",
        "TypeScript",
        "JavaScript",
        "Git",
        "Automated testing",
        "Microsoft Azure",
        "Azure DevOps",
        "Docker",
        "Kubernetes",
      ],
    },
  ],
} as const

export type Profile = typeof profile
