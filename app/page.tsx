import ProjectShowcase from "./components/ProjectShowcase";
import WebResume from "./components/WebResume";
import { inter } from "./fonts";

export default function Home() {
  return (
    <div className={inter.className}>
      <div className="bg-stone-200 py-[40px]">
        <div className="text-center">
          <h1 className="mb-6 text-stone-700 text-4xl font-semibold">
            Yash Mahesh Burshe
          </h1>
          <p className="max-w-xl mx-auto">
            Graduate student at Northeastern University. Passionate about
            building web apps with TypeScript, React and Next.js
          </p>
        </div>
        <WebResume />
      </div>
      <div className="bg-white rounded-3xl">
        <h2 className="text-center py-20 pt-8 text-3xl font-semibold text-stone-700">
          Projects
        </h2>
        <ProjectShowcase />
      </div>
    </div>
  );
}
