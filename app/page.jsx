import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Typewrite from "@/components/Typewrite";
import Spotify from "@/components/Spotify";

export default function Home() {
  return (
    <main className="w-full flex min-h-screen flex-col">
      <section className="dark:bg-yellow-400 flex mt-16 py-4">
        <Image src="/WELCOME.svg" width={2000} height={200} alt="welcome" />
      </section>

      <section className="flex flex-col-reverse md:flex-row justify-center items-center my-12 lg:my-16 px-12 gap-0 lg:gap-32 max-w-5xl mx-auto">
        <div className="flex flex-col font-mono space-y-4 mt-4 lg:mt-0">
          <div className="py-4 text-2xl text-foreground">
            My name is{" "}
            <span className="font-bold text-yellow-400">Ethan G.</span>
            <br />
            <br />I am a:
            <span className="font-bold text-blue-400">
              <Typewrite />
            </span>
          </div>
          <div className="flex gap-4 justify-start py-4">
            <Link href="/about" target="_blank" rel="noopener noreferrer">
              <Button variant="outline">Learn More!</Button>
            </Link>{" "}
            <Link
              href="https://www.egxblog.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline">*New* Blog</Button>
            </Link>
          </div>
          <div className="flex justify-start py-4">
            <Spotify />
          </div>
        </div>
        <div className="flex">
          <Image
            src="/myphoto.png"
            width={480}
            height={480}
            alt="me"
            className="border rounded-full bg-primary dark:bg-transparent"
          />
        </div>
      </section>
    </main>
  );
}
