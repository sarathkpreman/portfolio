import {
  PiGraduationCapFill,
  PiBrainFill,
  PiCloudFill,
  PiCodeFill,
  PiAtomFill,
} from "react-icons/pi";

export const certificates = [
  {
    id: 1,
    title: "Machine Learning Specialization",
    issuer: "Stanford Online",
    platform: "Coursera",
    year: "2026",
    icon: PiGraduationCapFill,
    description:
      "Supervised and unsupervised learning, regression, classification, neural networks, and practical machine learning workflows.",
    verifyUrl: "#",
    featured: true,
  },

  {
    id: 2,
    title: "Deep Learning Foundations",
    issuer: "DeepVision Institute",
    platform: "Coursera",
    year: "2026",
    icon: PiBrainFill,
    description:
      "Neural networks, CNNs, transformers, attention mechanisms, and optimization techniques for modern AI systems.",
    verifyUrl: "#",
  },

  {
    id: 3,
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    platform: "AWS Training",
    year: "2025",
    icon: PiCloudFill,
    description:
      "Cloud fundamentals, IAM, networking, storage, pricing models, and security best practices on AWS.",
    verifyUrl: "#",
  },

  {
    id: 4,
    title: "JavaScript Algorithms & Data Structures",
    issuer: "freeCodeCamp",
    platform: "freeCodeCamp",
    year: "2025",
    icon: PiCodeFill,
    description:
      "Algorithm design, data structures, recursion, dynamic programming, and problem-solving with JavaScript.",
    verifyUrl: "#",
  },

  {
    id: 5,
    title: "React – The Complete Guide",
    issuer: "Maximilian Schwarzmüller",
    platform: "Udemy",
    year: "2025",
    icon: PiAtomFill,
    description:
      "React Hooks, routing, Context API, performance optimization, and scalable component architecture.",
    verifyUrl: "#",
  },
];