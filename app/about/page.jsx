import Image from "next/image";
import {
  SiAdobeaftereffects,
  SiAdobelightroom,
  SiAdobepremierepro,
  SiBootstrap,
  SiExpress,
  SiFramer,
  SiGit,
  SiGithub,
  SiHeroku,
  SiHtml5,
  SiJavascript,
  SiMarkdown,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostman,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVisualstudiocode,
} from "react-icons/si";
import GitHubCalendar from "react-github-calendar";

export default function About() {
  return (
    <main className="w-full flex flex-col">
      <section className="dark:bg-green-400 flex mt-16 py-4">
        <Image src="/ABOUT.svg" width={2000} height={200} alt="about" />
      </section>
      <section className="flex my-12 lg:my-16 px-8">
        <article className="max-w-5xl prose lg:prose-lg mx-auto text-foreground font-mono">
          <h3 className="text-foreground">
            Hey there! I'm{" "}
            <span className=" text-green-400 font-bold">Ethan G.</span>, a
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

          <p>Let's collaborate and build something amazing together! 😃🚀</p>
        </article>
      </section>
      <hr />
      <section className="flex flex-col my-12 lg:my-16 px-8">
        <div className="flex font-mono prose lg:prose-lg mx-auto text-center mb-8">
          <h3 className="text-foreground font-bold">
            Some <span className="text-green-400">technologies</span> &{" "}
            <span className="text-green-400">tools</span> I've played with:
          </h3>
        </div>
        <div className="flex flex-wrap gap-8 mx-auto justify-center max-w-5xl text-xl lg:text-3xl">
          <SiGit />
          <SiNodedotjs />
          <SiJavascript />
          <SiTypescript />
          <SiExpress />
          <SiMongodb />
          <SiMysql />
          <SiReact />
          <SiNextdotjs />
          <SiTailwindcss />
          <SiBootstrap />
          <SiMarkdown />
          <SiHtml5 />
          <SiGithub />
          <SiVercel />
          <SiHeroku />
          <SiPostman />
          <SiFramer />
          <SiVisualstudiocode />
          <SiAdobelightroom />
          <SiAdobepremierepro />
          <SiAdobeaftereffects />
        </div>
      </section>
      <hr />
      <section className="flex-col my-12 lg:my-16 px-8 hidden lg:flex">
        <div className="flex font-mono prose lg:prose-lg mx-auto text-center mb-8">
          <h3 className="text-foreground font-bold">
            Some <span className="text-green-400">contributions</span> &{" "}
            <span className="text-green-400">time</span> spent on Github:
          </h3>
        </div>
        <div className="flex flex-wrap justify-center mx-auto max-w-5xl">
          <GitHubCalendar username="EGARRISXN" />
        </div>
      </section>
    </main>
  );
}
