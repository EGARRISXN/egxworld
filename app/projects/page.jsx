import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {CurrentProjects, DepricatedProjects} from "@/lib/projectData";
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
        <h2 className="font-black text-center">&#183;Current&#183;</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto gap-8">
          {CurrentProjects.map((project, index) => (
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
              <CardTitle className="text-xl text-blue-400 hover:text-yellow-400 hover:underline hover:underline-offset-4 no-underline font-bold">
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
      </section>
      <br/>
      <section className="max-w-5xl flex flex-col mx-auto mt-12 px-8 gap-12">
        <h2 className="font-black text-center">&#183;Depricated&#183;</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto gap-8">
          {DepricatedProjects.map((project, index) => (
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
      </section>
    </main>
  );
}
