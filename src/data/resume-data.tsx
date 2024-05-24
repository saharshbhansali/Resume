import { BookCheck, TableIcon } from "lucide-react"
import { XIcon } from "@/components/icons/XIcon"
import ITCLogo from "../images/logos/itc.png"
import { GitHubIcon } from "@/components/icons/GitHubIcon"
import { LinkedInIcon } from "@/components/icons/LinkedInIcon"

export const RESUME_DATA = {
  name: "Saharsh Bhansali",
  initials: "SB",
  location: "Chennai, India",
  websiteUrl: "https://saharshbhansali.github.io/about-me/",
  locationLink: "https://maps.app.goo.gl/mYLJ3uc9XPDu8KWk9",
  about: "Pre-final year Computer Science Student - Security Engineer",
  summary: "I am a cybersecurity entusiast, constantly exploring cutting-edge tools and techniques to enhance digital protection. I love ricing my OS and playing CTFs.",
  avatarUrl: "https://avatars.githubusercontent.com/saharshbhansali",
  contact: {
    email: "saharsh.bhansali15@gmail.com",
    tel: "+91 9941286420",
    socials: [
      {
        name: "GitHub",
        url: "https://github.com/saharshbhansali",
        icon: GitHubIcon
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/saharsh-bhansali",
        icon: LinkedInIcon
      },
      {
        name: "X",
        url: "https://x.com/SaharshBhansali",
        icon: XIcon
      }
    ]
  },
  education: [
    {
      school: "Vellore Institute of Technology, Vellore",
      degree: "B.Tech - Computer Science and Engineering",
      start: "September 2021",
      end: "Present"
    },
    {
      school: "Bhavan's Rajaji Vidhyashram, Chennai",
      degree: "Physics, Chemistry, Mathematics with Computer Science",
      start: "April 2006",
      end: "March 2021"
    }
  ],
  work: [
    // {
    //   company: "ITC Infotech",
    //   link: "https://www.itcinfotech.com/",
    //   badges: ["On-Site"],
    //   title: "Project Intern",
    //   logo: ITCLogo,
    //   start: "Aug 2023",
    //   end: "Sep 2023",
    //   description: "Built user facing websites and explored server & storage virtualization, cloud computing and Network Infrastructure Security Monitoring"
    // }
  ],
  skills: [
    "Python", "Bash/ZSH Scripting", "Go", "Git/GitHub", "BurpSuite", "AWS", 
    "Docker", "Metasploit", "Nessus", "Ghidra", "Gobuster", "Infoga", "ReconDog"
  ],
  projects: [
    {
      title: "CLI-TOP",
      techStack: [
        "Go",
        "BurpSuite",
        "Cobra",
        "Glamour",
      ],
      description: "A CLI interface to access the university’s Learning Management System (LMS).",
      // logo: ConsultlyLogo,
      link: {
        label: "cli-top.acmvit.in",
        href: "https://cli-top.acmvit.in/",
      },
    },
    {
      title: "Career Node",
      techStack: ["Flask", "TypeScript", "ChatGPT 3.5 API", "Hugging Face Models"],
      description:
        "An AI-driven, personalized guidance and skill development platform, winner of the Yantra Hackathon's Quality Education track.",
      // logo: MonitoLogo,
      link: {
        label: "github.com",
        href: "https://github.com/kaushalrathi24/funtimeError",
      },
    },
    {
      title: "Access Denied",
      techStack: ["Python", "Jupyter Notebook", "Javascript"],
      description:
        "Proof Of Concept model showcasing a decentralized authentication system using Zero Knowledge Proofs (ZKPs).",
      // logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://github.com/ACM-VIT/accessDenied",
      },
    },
  ],
  certifications: [
    {
      label: "AWS Certified Cloud Practitioner",
      link: "https://www.credly.com/badges/d0f572c3-7d2c-416c-803d-4963611704f5/public_url",
      provider: "Amazon Web Services (AWS)"
    },
    {
      label: "AWS Certified Solutions Architect - Associate",
      link: "https://www.credly.com/badges/dc22fd53-b367-4c97-b2ef-066a59371946/public_url",
      provider: "Amazon Web Services (AWS)"
    }
  ]
}