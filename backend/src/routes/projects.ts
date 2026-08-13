import { Router, Request, Response } from "express";

export const projectsRouter = Router();

projectsRouter.get("/", (_req: Request, res: Response) => {
  const projects = [
    {
      id: "smart-resume",
      category: "AI / ML",
      isFeatured: true,
      title: "Smart Resume Analyzer & Job Matcher",
      description:
        "AI-powered platform that analyzes resumes, calculates ATS score, identifies skill gaps, and matches users with relevant job opportunities.",
      techStack: ["Node.js", "Express", "React", "MongoDB"],
      liveUrl: "https://example.com/smart-resume",
      githubUrl: "https://github.com/aqibag/smart-resume-analyzer",
    },
    {
      id: "iot-dashboard",
      category: "Dashboards",
      isFeatured: false,
      title: "Real-Time IoT Safety & Health Monitor",
      description:
        "Embedded sensors and telemetry dashboard providing instant alerts, anomaly detection, and historical metrics for industrial environments.",
      techStack: ["React", "Node.js", "MQTT", "C++"],
      liveUrl: "https://example.com/iot-monitor",
      githubUrl: "https://github.com/aqibag/iot-safety-monitor",
    },
  ];

  return res.status(200).json(projects);
});
