
import { 
  PortfolioData, 
  AcademicItemType, 
  ExperienceType 
} from '../types.ts';

export const portfolioData: PortfolioData = {
  profile: {
    fullName: "Alex Sterling",
    title: "Senior AI Research Engineer & Systems Architect",
    location: "San Francisco, CA",
    email: "alex.sterling@example.com",
    shortBio: "Building the next generation of intelligent systems with a focus on scalable distributed architectures and human-centric AI.",
    longBio: "I am a multi-disciplinary engineer with a background in Computer Science and Physics. My career has been dedicated to bridging the gap between theoretical research and production-ready applications. I specialize in deep learning optimization and cloud-native infrastructure. When I'm not coding, I'm contributing to open-source or mentoring junior developers in the community.",
    avatarUrl: "https://picsum.photos/400/400",
    socialLinks: {
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
      googleScholar: "https://scholar.google.com",
      orcid: "https://orcid.org",
      twitter: "https://twitter.com",
      email: "mailto:alex.sterling@example.com"
    }
  },
  academic: {
    publications: [
      {
        id: "p1",
        type: AcademicItemType.PUBLICATION,
        title: "Scalable Transformers for Real-time Edge Processing",
        authors: "Sterling, A., Chen, L., & Smith, J.",
        venue: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR)",
        year: 2024,
        doi: "10.1109/CVPR.2024.0001",
        link: "#"
      },
      {
        id: "p2",
        type: AcademicItemType.PUBLICATION,
        title: "Efficient Quantization Methods for Large Language Models",
        authors: "Sterling, A., & Nakamura, Y.",
        venue: "Journal of Machine Learning Research (JMLR)",
        year: 2023,
        link: "#"
      },
      {
        id: "p3",
        type: AcademicItemType.TALK,
        title: "The Future of Distributed AI Infrastructure",
        authors: "Alex Sterling",
        venue: "Keynote at AI Systems Summit",
        year: 2023,
        link: "#"
      }
    ],
    patents: [
      {
        title: "Method for Adaptive Load Balancing in Neural Network Inference",
        number: "US11223344B2",
        year: 2022,
        status: "Granted"
      }
    ],
    awards: [
      {
        name: "National Research Fellowship",
        org: "Science Foundation",
        year: 2021,
        details: "Awarded for outstanding contributions to computational physics."
      }
    ],
    researchInterests: ["Deep Learning", "Distributed Systems", "Edge Computing", "Quantum Algorithms"]
  },
  professional: {
    certificates: [
      {
        name: "Google Cloud Professional Architect",
        issuer: "Google Cloud",
        year: 2023,
        credentialId: "GCP-12345",
        link: "#",
        description: "Advanced certification for designing and managing scalable cloud solutions."
      },
      {
        name: "TensorFlow Developer Specialization",
        issuer: "Coursera / DeepLearning.AI",
        year: 2022,
        link: "#",
        description: "Mastery of ML frameworks and deep learning deployment."
      }
    ],
    awards: [
      {
        name: "Employee of the Year",
        org: "TechCorp Global",
        year: 2022,
        details: "Recognized for leading the transition to microservices architecture."
      }
    ]
  },
  experiences: [
    {
      id: "exp1",
      company: "Innovate AI",
      role: "Lead Research Engineer",
      period: "2022 - Present",
      location: "Remote",
      type: ExperienceType.FULL_TIME,
      bullets: [
        "Architected a distributed training pipeline that reduced model convergence time by 40%",
        "Led a team of 5 engineers to deploy LLM-based features to 1M+ active users",
        "Pioneered the use of WebAssembly for running inference directly in browser"
      ],
      techTags: ["PyTorch", "Rust", "Kubernetes", "AWS"],
      link: "https://innovate.ai"
    },
    {
      id: "exp2",
      company: "Cloud Systems Inc.",
      role: "Senior Backend Developer",
      period: "2019 - 2022",
      location: "San Francisco, CA",
      type: ExperienceType.FULL_TIME,
      bullets: [
        "Redesigned the core API using Go, improving throughput by 300%",
        "Implemented a robust observability stack using Prometheus and Grafana",
        "Mentored over 10 junior developers through code reviews and pair programming"
      ],
      techTags: ["Go", "PostgreSQL", "Docker", "gRPC"],
      link: "#"
    }
  ],
  coopRoles: [
    {
      id: "coop1",
      company: "Tech Giant Corp",
      role: "Software Engineer Intern",
      period: "Summer 2018",
      location: "Seattle, WA",
      type: ExperienceType.COOP,
      bullets: [
        "Developed an internal dashboard for monitoring server health using React",
        "Automated unit testing suites reducing manual testing time by 60%",
        "Collaborated with UX designers to implement a new design system"
      ],
      techTags: ["React", "Node.js", "Python"],
      link: "#"
    }
  ],
  projects: [
    {
      name: "OpenSource ML Toolbox",
      summary: "A collection of highly optimized primitives for machine learning researchers.",
      highlights: [
        "10k+ stars on GitHub",
        "Used by research labs worldwide",
        "Support for multi-GPU training out of the box"
      ],
      techStack: ["C++", "Python", "CUDA"],
      link: "#",
      imageUrl: "https://picsum.photos/600/400?random=1"
    },
    {
      name: "QuantPortfolio",
      summary: "Real-time algorithmic trading platform with backtesting capabilities.",
      highlights: [
        "Integrated with multiple brokers",
        "Latency optimized engine",
        "Advanced visualization dashboard"
      ],
      techStack: ["React", "TypeScript", "FastAPI"],
      link: "#",
      imageUrl: "https://picsum.photos/600/400?random=2"
    }
  ]
};
