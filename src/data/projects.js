import { PiMonitorArrowUpFill } from "react-icons/pi";
import { PiBarbellFill } from "react-icons/pi";
import { PiCurrencyBtcFill } from "react-icons/pi";
import { PiMusicNotesFill } from "react-icons/pi";
import { PiClipboardTextFill } from "react-icons/pi";


export const projects = [
  {
    id: 1,
    number: "01",
    title: "ClearPath",
    description:
      "An AI-powered job application tracker that helps organize applications, monitor progress, and gain insights through an interactive analytics dashboard.",
    category: "Web Apps",
    tags: ["Next.js", "NestJS", "AI"],
    icon: PiMonitorArrowUpFill,
    github: "",
    live: "",
    featured: true,
  },
  {
    id: 2,
    number: "02",
    title: "Vyayam",
    description:
      "An AI-assisted fitness platform that generates personalized workout plans, tracks progress, and handles background tasks using scalable job queues.",
    category: "AI/ML",
    tags: ["NestJS", "Queues"],
    icon: PiBarbellFill,
    github: "",
    live: "",
    featured: true,
  },
  {
    id: 3,
    number: "03",
    title: "CoinPulse",
    description:
      "A cryptocurrency dashboard delivering real-time market data, interactive price charts, and portfolio insights powered by the CoinGecko API.",
    category: "Web Apps",
    tags: ["React", "Recharts"],
    icon: PiCurrencyBtcFill,
    github: "",
    live: "",
    featured: true,
  },
  {
    id: 4,
    number: "04",
    title: "Pattu",
    description:
      "A modern music player featuring playlist management, playback controls, progress tracking, and a responsive Spotify-inspired mini player.",
    category: "Web Apps",
    tags: ["React", "CSS"],
    icon: PiMusicNotesFill,
    github: "",
    live: "",
    featured: false,
  },
  {
    id: 5,
    number: "05",
    title: "Smart Todo",
    description:
      "A task management application built with React, showcasing clean state management, reusable components, and an intuitive productivity-focused interface.",
    category: "Web Apps",
    tags: ["React", "State"],
    icon: PiClipboardTextFill,
    github: "",
    live: "",
    featured: false,
  },
];