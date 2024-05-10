import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import ProjectData from "@/lib/projectData";
import { Button } from "@/components/ui/button";

export default function Projects() {
  return (
    <main>
      <section className="dark:bg-blue-400 py-4">
        <Image
          src="/banners/PROJECTS.svg"
          width={2000}
          height={200}
          alt="projects"
        />
      </section>

      <section className="max-w-5xl flex flex-col mx-auto mt-12 px-8 gap-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto gap-8">
          {ProjectData.map((project, index) => (
            <Card
              key={index}
              className="border-2 border-blue-400 dark:shadow-blue-300/20 shadow-xl rounded-xl"
            >
              <CardHeader>
                <Image
                  src={project.image}
                  alt={`project${index + 1}`}
                  width={600}
                  height={400}
                  className="border-2 rounded"
                />
              </CardHeader>
              <CardTitle className="text-xl text-center text-blue-400 hover:text-yellow-400 hover:underline hover:underline-offset-4 no-underline font-bold">
                <a
                  href={project.websiteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.title}
                </a>
              </CardTitle>
              <CardContent className="mt-4">
                <p className="text-sm line-clamp-4">{project.description}</p>
              </CardContent>
              <CardFooter className="justify-center gap-4 lg:gap-8">
                <Button variant="outline" className="px-8">
                  <a
                    href={project.websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Link
                  </a>
                </Button>
                <Button variant="outline" className="px-8">
                  <a
                    href={project.repositoryLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Repo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mx-auto prose lg:prose-lg text-foreground text-sm border-2 border-blue-400 dark:shadow-blue-300/20 shadow-xl w-fit rounded-xl p-4 text-center">
          Here are a couple more projects I&apos;ve worked on.
          <br />
          <a
            href="https://github.com/egarrisxn/blog-next-rsc-mdx"
            className="text-blue-400 hover:text-yellow-400 hover:underline hover:underline-offset-4 no-underline"
          >
            MDX/RSC Blog
          </a>
          <br />
          <a
            href="https://github.com/egarrisxn/weather-dashboard"
            className="text-blue-400 hover:text-yellow-400 hover:underline hover:underline-offset-4 no-underline"
          >
            Weather Dashboard
          </a>
          <br />
          <a
            href="https://github.com/egarrisxn/daily-scheduler"
            className="text-blue-400 hover:text-yellow-400 hover:underline hover:underline-offset-4 no-underline"
          >
            Daily Scheduler
          </a>
          <br />
          <a
            href="https://github.com/egarrisxn/pwa-text-editor"
            className="text-blue-400 hover:text-yellow-400 hover:underline hover:underline-offset-4 no-underline"
          >
            PWA Text Editor
          </a>
          <br />
          <a
            href="https://github.com/egarrisxn/orm-ecommerce-backend"
            className="text-blue-400 hover:text-yellow-400 hover:underline hover:underline-offset-4 no-underline"
          >
            ORM E-commerce Backend
          </a>
          <br />
          <a
            href="https://github.com/egarrisxn/sql-employee-tracker"
            className="text-blue-400 hover:text-yellow-400 hover:underline hover:underline-offset-4 no-underline"
          >
            SQL Employee Tracker
          </a>
          <br />
          Head over to my{" "}
          <a
            href="https://github.com/egarrisxn"
            className="text-blue-400 hover:text-yellow-400 hover:underline hover:underline-offset-4 no-underline"
          >
            Github
          </a>{" "}
          to check out the rest!
        </div>
      </section>
    </main>
  );
}
