import Image from "next/image";
import { ProjectBrief } from "../types";
import Link from "next/link";

export default function ProjectBox(projectBrief: ProjectBrief) {
  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-4 rounded-3xl bg-stone-100 p-4 flex flex-col gap-16">
      <div className="flex flex-col gap-4 mt-[30px]">
        <h3 className="text-md text-center text-stone-700">
          {projectBrief.name}
        </h3>
        <p className="max-w-80 h-14 mx-auto text-stone-800 text-center text-lg font-semibold">
          {projectBrief.tagline}
        </p>
        <Link
          className="border-stone-600/80 text-stone-600 hover:bg-stone-200 border-2 rounded-md w-fit mx-auto py-2 px-4"
          href={`/projects/${projectBrief.name}`}
        >
          Learn more
        </Link>
      </div>
      <Image
        src={projectBrief.screenshot}
        alt={projectBrief.name}
        className="self-center m-[20px]"
        width={200}
        height={400}
      />
    </div>
  );
}
