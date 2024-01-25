import Image from "next/image";
import GitHubCalendar from "react-github-calendar";
import TechIcons from "@/lib/techIcons";

export default function About() {
  return (
    <main>
      <section className="dark:bg-green-400 py-4">
        <Image src="/ABOUT.svg" width={2000} height={200} alt="about" />
      </section>
      <section className="max-w-5xl flex mx-auto mt-12 px-8 border-b border-green-300 pb-16">
        <article className="max-w-4xl prose lg:prose-lg text-foreground">
          <h3 className="text-foreground">
            Hey there! I'm{" "}
            <span className="text-green-300 font-bold">Ethan G.</span>, a
            Full-Stack Web Developer & Designer based in beautiful Florida, US.
          </h3>
          <p>
            In the summer of 2023, I successfully finished the full-time,
            Full-Stack Web Development bootcamp through the University of
            Central Florida. Beyond coding, my heart lies in moments with
            family, exploring the world, discovering new music, and harboring a
            soft spot for hockey.
          </p>
          <p>
            On this new and exciting journey, my focus revolves around crafting
            innovative Web Technologies and Applications, paired with a profound
            passion for design. I specialize in bringing ideas to life using
            various JavaScript Libraries and Frameworks.
          </p>
          <p>Let's collaborate and build something amazing together! 🚀</p>
        </article>
      </section>
      <section className="max-w-5xl flex flex-col mx-auto mt-12 px-8 lg:border-b border-green-300 lg:pb-16">
        <div className="prose lg:prose-lg mb-8 text-center mx-auto">
          <h3 className="text-foreground">
            Some <span className="text-green-300 font-bold">technologies</span>{" "}
            & <span className="text-green-300 font-bold">tools</span> I've
            played with:
          </h3>
        </div>
        <div className="max-w-4xl flex flex-wrap mx-auto justify-center gap-8 text-xl lg:text-3xl">
          <TechIcons />
        </div>
      </section>
      <section className="max-w-5xl hidden lg:flex flex-col mx-auto mt-12 px-8">
        <div className="prose lg:prose-lg mb-8 text-center mx-auto">
          <h3 className="text-foreground">
            Some <span className="text-green-300 font-bold">contributions</span>{" "}
            & <span className="text-green-300 font-bold">time</span> spent on
            Github:
          </h3>
        </div>
        <GitHubCalendar username="EGARRISXN" />
      </section>
    </main>
  );
}
