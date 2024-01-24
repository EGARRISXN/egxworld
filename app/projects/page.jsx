import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Projects() {
  return (
    <main className="w-full flex flex-col font-mono">
      <section className="dark:bg-blue-400 flex mt-16 py-4">
        <Image src="/PROJECTS.svg" width={2000} height={200} alt="projects" />
      </section>
      <section className="flex my-12 lg:my-16 px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="border-4 border-blue-400 shadow-xl">
            <Image
              src="/swaybae.png"
              alt="project1"
              width={1000}
              height={600}
              className="rounded-t-lg mx-auto object-cover border"
            />
            <CardContent className="mt-4">
              <h2 className="text-lg text-center text-blue-400 font-bold line-clamp-2">
                Sway Bae Official
              </h2>
              <p className="text-sm mt-2 text-gray-700 dark:text-gray-400 line-clamp-3">
                The Official Sway Bae Link showcases this professional
                streamer's assets and achievements. From contact info to social
                media embeds and beyond, everything about Sway Bae is at your
                fingertips. SUPPORT SWAY BAE!
              </p>
              <div className="flex justify-center gap-4 mt-4">
                <Link
                  href="https://www.egxblog.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline">Repository</Button>
                </Link>
                <Link
                  href="https://www.egxblog.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline">Website</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
          <Card className="border-4 border-blue-400 shadow-xl">
            <Image
              src="/streamverse.png"
              alt="project2"
              width={1000}
              height={600}
              className="rounded-t-lg mx-auto object-cover border"
            />
            <CardContent className="mt-4">
              <h2 className="text-lg text-center text-blue-400 font-bold line-clamp-2">
                StreamVerse
              </h2>
              <p className="text-sm mt-2 text-gray-700 dark:text-gray-400 line-clamp-3">
                The StreamVerse app allows users to access, rate, and add movies
                to different lists . After login, users can view their bio,
                saved movie list, and their social feed. WELCOME TO THE
                STREAMVERSE.
              </p>
              <div className="flex justify-center gap-4 mt-4">
                <Link
                  href="https://www.egxblog.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline">Repository</Button>
                </Link>
                <Link
                  href="https://www.egxblog.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline">Website</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
          <Card className="border-4 border-blue-400 shadow-xl">
            <Image
              src="/eventease.png"
              alt="project3"
              width={1000}
              height={600}
              className="rounded-t-lg mx-auto object-cover border"
            />
            <CardContent className="mt-4">
              <h2 className="text-lg text-center text-blue-400 font-bold line-clamp-2">
                Event Ease
              </h2>
              <p className="text-sm mt-2 text-gray-700 dark:text-gray-400 line-clamp-3">
                Event Ease is an event planning web application. It allows users
                to plan and manage events, keeping track of attendees, RSVPs,
                and event details. This application is a one stop shop! ENJOY
                YOUR EVENT!
              </p>
              <div className="flex justify-center gap-4 mt-4">
                <Link
                  href="https://www.egxblog.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline">Repository</Button>
                </Link>
                <Link
                  href="https://www.egxblog.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline">Website</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
          <Card className="border-4 border-blue-400 shadow-xl">
            <Image
              src="/playeronereads.png"
              alt="project4"
              width={1000}
              height={600}
              className="rounded-t-lg mx-auto object-cover border"
            />
            <CardContent className="mt-4">
              <h2 className="text-lg text-center text-blue-400 font-bold line-clamp-2">
                Player One Reads
              </h2>
              <p className="text-sm mt-2 text-gray-700 dark:text-gray-400 line-clamp-3">
                Player One Reads is a web application that generates book
                suggestions based upon a user's video game interests. Once you
                chose your suggested book, you'll have the option to read or
                purchase. HAPPY READING!
              </p>
              <div className="flex justify-center gap-4 mt-4">
                <Link
                  href="https://www.egxblog.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline">Repository</Button>
                </Link>
                <Link
                  href="https://www.egxblog.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline">Website</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
