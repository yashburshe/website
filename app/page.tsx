import WebResume from "./components/WebResume";
import { inter } from "./fonts";

export default function Home() {
  return (
    <div className={inter.className}>
      <div className="bg-stone-100 dark:bg-stone-900 bg-stone py-[40px] min-h-dvh">
        <div className="text-center mb-20">
          <h1 className="mb-6 text-stone-700 dark:text-stone-300 text-4xl font-semibold">
            Yash Mahesh Burshe
          </h1>
          <p className="max-w-xl mx-auto text-stone-600 dark:text-stone-400">
            Graduate student at Northeastern University. Passionate about
            building web apps with TypeScript, React and Next.js
          </p>
        </div>
        <WebResume />
      </div>
      {/* <div className="bg-white rounded-3xl">
        <h2 className="text-center py-20 pt-8 text-3xl font-semibold text-stone-700">
          Projects
        </h2>
        <ProjectShowcase />
      </div> */}
    </div>
  );
}
