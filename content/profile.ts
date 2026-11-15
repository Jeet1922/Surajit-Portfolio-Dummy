import { basePath, siteOrigin, siteUrl } from "@/content/site-config.mjs"

export { basePath, siteOrigin, siteUrl }

export const profile = {
  siteUrl,
  seoDescription:
    "I build production AI and data systems for enterprise teams. Senior AI, data, and machine learning engineer with 12 years of experience.",
  shareImageDescription: "Production AI systems and the data platforms behind them.",
  shareImageAlt: "Surajit Maji — Senior AI, Data & ML Engineer",
  name: "Surajit Maji",
  title: "Senior AI, Data & ML Engineer",
  introduction:
    "I build production AI and data systems for enterprise teams, from agentic applications to governed lakehouse platforms.",
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
    { value: "12 years", label: "building enterprise AI and data systems" },
  ],
  timeline: [
    {
      id: "education-undergrad",
      year: "2009–2013",
      navLabel: "B.Tech",
      category: "Education",
      title: "Bachelor of Technology",
      organization: "West Bengal University of Technology",
      description:
        "I completed my undergraduate degree, the starting point for my work in enterprise data and analytics.",
      outcome: "Bachelor of Technology",
      skills: ["Engineering", "Education"],
    },
    {
      id: "tcs",
      year: "2014–2018",
      navLabel: "TCS",
      category: "Data foundation",
      title: "Systems Engineer — SAP BW/HANA & Analytics",
      organization: "Tata Consultancy Services",
      description:
        "I built the warehouse and ETL foundation that later supported larger-scale data and AI systems.",
      outcome:
        "Developed SAP BW/HANA warehouse solutions, scalable data models, and ETL pipelines for large-scale analytics workloads.",
      skills: ["SAP BW", "SAP HANA", "ETL", "Data modeling"],
    },
    {
      id: "ntt-data",
      year: "2018–2019",
      navLabel: "NTT DATA",
      category: "Data engineering",
      title: "Senior Consultant — Data & Analytics",
      organization: "NTT DATA Services",
      description:
        "I developed the transformation and quality workflows that turn enterprise data into dependable analytics.",
      outcome:
        "Built scalable ETL workflows, SQL data models, and data-integration processes for reporting and business decisions.",
      skills: ["ETL", "SQL", "Data transformation", "Data quality"],
    },
    {
      id: "boeing",
      year: "2019–2020",
      navLabel: "Boeing",
      category: "Analytics & modeling",
      title: "Information Designer — Data Analytics & Modelling",
      organization: "Boeing",
      description:
        "I designed enterprise data models and reporting workflows, building on my warehouse experience.",
      outcome:
        "Designed 25+ enterprise data models, SAP HANA reporting solutions, and data-integration workflows.",
      skills: ["SAP HANA", "Data modeling", "Reporting", "Integration"],
    },
    {
      id: "pwc",
      year: "2020–2026",
      navLabel: "PwC",
      category: "Production AI",
      title: "AI, Data & Analytics Solutions Lead",
      organization: "PwC",
      description:
        "I moved from enterprise data platforms into production AI, leading work across agentic systems, retrieval, model evaluation, and governed data foundations.",
      outcome:
        "My agentic Text-to-SQL system serves 10,000+ users and cut decision-making time by 70%.",
      highlights: [
        "I built automated LLM evaluation that raised reliability by 40% across 10+ enterprise systems.",
        "I designed production RAG and conversational Q&A systems over enterprise knowledge bases and structured data.",
        "I built an ERP security solution that improved role-assignment productivity by up to 60%, and a data-modeling application that reduced manual effort by over 70%.",
        "I defined lakehouse patterns on Databricks and Microsoft Fabric and built governed PySpark data layers for 30+ clients. I delivered data and analytics across 50+ enterprise engagements.",
        "I built Python and SQL automation that removed up to 200 hours of recurring manual work each month across 40+ enterprise clients.",
        "I led CI/CD and production delivery with Azure DevOps, Docker, and Kubernetes, reducing deployment effort by approximately 70%.",
        "I embedded governance, privacy, security, and compliance controls in regulated-client work and led multidisciplinary AI and data teams.",
      ],
      skills: ["LangGraph", "RAG", "LLM evaluation", "PySpark", "Databricks"],
    },
    {
      id: "nyu",
      year: "2026–2028",
      navLabel: "NYU",
      category: "Now · graduate study",
      title: "M.S. in Emerging Technologies (AI & ML)",
      organization: "New York University, Tandon School of Engineering",
      description:
        "I’m studying machine learning and deep learning while building projects in neural networks, agentic workflows, and data engineering.",
      outcome: "Expected May 2028 · Coursework in Machine Learning and Deep Learning.",
      skills: ["Machine Learning", "Deep Learning", "PyTorch"],
    },
  ],
  projects: [
    {
      title: "CIFAR-10 ResNet under a 5M-Parameter Budget",
      url: "https://github.com/Jeet1922/resnet-5M-cifar10",
      context: "NYU Deep Learning, Fall 2026",
      problem:
        "Train a CIFAR-10 ResNet from scratch while staying under a 5M-parameter budget.",
      approach:
        "I used a 200-epoch recipe with Nesterov SGD, a OneCycle schedule, label smoothing, TrivialAugment, CutMix, EMA weight averaging, and mixed-precision training.",
      result:
        "The model has 4.82M parameters and reached 96.08% validation accuracy, or 96.48% with flip test-time augmentation, without pretrained weights or external data.",
      skills: ["PyTorch", "torchvision", "CNNs", "Mixed precision"],
    },
    {
      title: "Agentic AI Data Modeler",
      url: "https://github.com/Jeet1922/LangGraph-Agentic-AI-Data-Modeler",
      context: "",
      problem:
        "Turn plain-English business requirements and Excel data dictionaries into structured data-modeling outputs.",
      approach:
        "I built a multi-step LangGraph workflow grounded in table and column metadata with Chroma and sentence-transformers, served through FastAPI and a Next.js interface.",
      result:
        "It produces ERD JSON, SQL DDL for PostgreSQL, MySQL, and SQLite, and synthetic test data for ERP and SAP domains.",
      skills: ["LangGraph", "FastAPI", "Chroma", "Next.js", "TypeScript"],
    },
    {
      title: "Spark Movie Recommendation Pipeline",
      url: "https://github.com/Jeet1922/BE-ML-Spark-Powered-Movie-Recommendation",
      context: "",
      problem:
        "Use ratings, watch history, and search logs to generate personalized movie recommendations.",
      approach:
        "I built modular PySpark steps for ingestion, cleaning, feature engineering, recommendation, and export, using ALS collaborative filtering.",
      result:
        "The pipeline generates personalized recommendations and exports recommendation-ready datasets for BI tools.",
      skills: ["Apache Spark", "PySpark", "Spark MLlib", "Python"],
    },
  ],
  howIWork: [
    {
      title: "I take systems to production",
      description:
        "I’ve taken GenAI use cases from PoC to MVP to production and built repeatable delivery with FastAPI, Azure DevOps, Docker, and Kubernetes.",
    },
    {
      title: "I build governed foundations",
      description:
        "I connect AI applications to scalable, governed data layers with lakehouse architecture, PySpark, Databricks, and Microsoft Fabric.",
    },
    {
      title: "I raise the bar across teams",
      description:
        "I lead and mentor multidisciplinary AI and data teams, set engineering standards and reusable patterns, and present outcomes to senior technology leadership.",
    },
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
  contact: {
    lookingFor:
      "I’m looking for senior AI engineering, data engineering, and machine learning roles in New York.",
    callToAction: "If you’re building production AI or data systems, let’s talk.",
  },
} as const
