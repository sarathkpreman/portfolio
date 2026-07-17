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
    description: "AI-powered job application tracker with adaptive status and analytics.",
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
    description: "AI-assisted fitness platform with adaptive workout logic and queues.",
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
    description: "Crypto tracker built on CoinGecko API with live charting.",
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
    description: "Personal music player with a Spotify-style mobile mini-player.",
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
    description: "React todo app with controlled inputs and state-lifting patterns.",
    category: "Web Apps",
    tags: ["React", "State"],
    icon: PiClipboardTextFill,
    github: "",
    live: "",
    featured: false,
  },
];