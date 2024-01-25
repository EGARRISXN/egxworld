import Image from "next/image";
import Link from "next/link";
import SocialIcons from "@/lib/socialIcons";
import Typewrite from "@/components/Typewrite";
import Spotify from "@/components/Spotify";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <section className="dark:bg-yellow-400 py-4">
        <Image src="/WELCOME.svg" width={2000} height={200} alt="welcome" />
      </section>

      <section className="max-w-5xl flex mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-12 px-8 gap-0 lg:gap-16">
          <div className="flex mx-auto w-full">
            <Image
              src="/myphoto.png"
              width={400}
              height={400}
              alt="My Photo"
              className="border rounded-full bg-primary dark:bg-transparent"
            />
          </div>
          <div className="flex flex-col mx-auto w-full space-y-4 mt-8 lg:mt-0">
            <h3 className="text-2xl lg:text-3xl">
              My name is{" "}
              <span className="text-yellow-300 font-bold">Ethan G.</span>
              <br />
              <br />I am a:
              <span className="text-blue-300 font-bold">
                <Typewrite />
              </span>
            </h3>
            <div className="flex gap-4 pt-4">
              <SocialIcons />
            </div>
            <div className="flex gap-4 pt-4">
              <Button variant="outline">
                <Link href="/about" target="_blank" rel="noopener noreferrer">
                  Learn More!
                </Link>
              </Button>
              <Button variant="outline">
                <Link
                  href="https://www.egxblog.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  *New* Blog
                </Link>
              </Button>
            </div>
            <div className="pt-4">
              <Spotify />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
