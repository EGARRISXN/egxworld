import Link from "next/link";
import { ThemeToggle } from "@/components/Theme-Toggle";

export default function Header() {
  return (
    <header className="w-full flex justify-between border-b shadow-xl h-16">
      <div className="flex font-bold text-sm sm:text-base">
        <div className="border-r flex items-center bg-black dark:bg-white text-secondary px-4 hover:text-yellow-400 hover:underline hover:underline-offset-4">
          <Link href="/">eg</Link>
        </div>
        <div className="flex px-2 gap-4 items-center">
          <Link
            href="/about"
            className="hover:text-green-400 hover:underline hover:underline-offset-4"
          >
            about
          </Link>
          <Link
            href="/projects"
            className="hover:text-blue-400 hover:underline hover:underline-offset-4"
          >
            projects
          </Link>
          <Link
            href="/contact"
            className="hover:text-red-400 hover:underline hover:underline-offset-4"
          >
            contact
          </Link>
          <a
            href="https://www.egxblog.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 hover:underline hover:underline-offset-4"
          >
            blog
          </a>
        </div>
      </div>
      <div className="flex items-center px-2">
        <ThemeToggle />
      </div>
    </header>
  );
}
