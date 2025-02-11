import ProjectBox from "./ProjectBox";
import { ProjectBrief } from "../types";

export default function ProjectShowcase() {
  const projectsBriefs: ProjectBrief[] = [
    {
      name: "Steam2Csv",
      tagline: "Export your Steam library to a CSV file",
      screenshot: "/steam2csv.png",
    },
    {
      name: "Sentinel Share",
      tagline: "Decentralized file sharing platform",
      screenshot: "/sentinel-share.png",
    },
    {
      name: "MDpress",
      tagline: "Markdown blog generator",
      screenshot: "/mdpress.png",
    },
  ];

  return (
    <div className="max-w-fit mx-auto grid gap-6 grid-cols-12 p-[20px]">
      {projectsBriefs.map((projectBrief) => (
        <ProjectBox key={projectBrief.name} {...projectBrief} />
      ))}
    </div>
  );
}
