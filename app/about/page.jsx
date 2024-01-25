import Image from "next/image";
import GitHubCalendar from "react-github-calendar";
import TechIcons from "@/lib/techIcons";

export default function About() {
  return (
    <main>
      <section className="dark:bg-green-400 py-4">
        <Image src="/banners/ABOUT.svg" width={2000} height={200} alt="about" />
      </section>
      <section className="max-w-5xl flex mx-auto mt-12 px-8 border-b border-green-400 pb-16">
        <article className="max-w-4xl prose lg:prose-lg text-foreground">
          <h3 className="text-foreground">
            Hello there! I'm{" "}
            <span className="text-green-400 font-bold">Ethan G.</span>, a
            Full-Stack Web Developer & Designer based in beautiful Florida, USA.
          </h3>
          <p>
            In the summer of 2023, I successfully completed the full-time
            Full-Stack Web Development bootcamp through the University of
            Central Florida. Beyond coding, I cherish moments with family, love
            exploring the world, discovering new music, and have a soft spot for
            hockey.
          </p>
          <p>
            Embarking on this exciting journey, my focus revolves around
            crafting innovative Web Technologies and Applications, fueled by a
            profound passion for design. I specialize in bringing ideas to life
            using various JavaScript Libraries and Frameworks.
          </p>
          <p>Let's collaborate and build something amazing together! 🚀</p>
        </article>
      </section>
      <section className="max-w-5xl flex flex-col mx-auto mt-12 px-8 lg:border-b border-green-400 lg:pb-16">
        <div className="prose lg:prose-lg mb-8 text-center mx-auto">
          <h3 className="text-foreground">
            <span className="text-green-300 font-bold">Technologies</span> &{" "}
            <span className="text-green-300 font-bold">tools</span> in my
            arsenal:
          </h3>
        </div>
        <div className="max-w-4xl flex flex-wrap mx-auto justify-center gap-8 text-xl lg:text-3xl">
          <TechIcons />
        </div>
      </section>
      <section className="max-w-5xl hidden lg:flex flex-col mx-auto mt-12 px-8">
        <div className="prose lg:prose-lg mb-8 text-center mx-auto">
          <h3 className="text-foreground">
            <span className="text-green-300 font-bold">Contributions</span> &{" "}
            <span className="text-green-300 font-bold">time</span> spent on
            Github:
          </h3>
        </div>
        <GitHubCalendar username="EGARRISXN" />
      </section>
    </main>
  );
}
