import Link from "next/link";
import { ThemeToggle } from "@/components/Theme-Toggle";

export default function Header() {
  return (
    <header className="w-full flex justify-between border-b shadow-xl">
      <div className="flex font-bold text-sm sm:text-base">
        <div className="border-r flex items-center bg-primary text-secondary p-4">
          <Link href="/">
            <span className="hover:text-yellow-400 hover:underline hover:underline-offset-4">
              eg
            </span>
          </Link>
        </div>
        <div className="flex p-4 gap-4 items-center">
          <Link href="/about">
            <span className="hover:text-primary dark:hover:text-green-400 hover:underline hover:underline-offset-4">
              about
            </span>
          </Link>
          <Link href="/projects">
            <span className="hover:text-primary dark:hover:text-blue-400 hover:underline hover:underline-offset-4">
              projects
            </span>
          </Link>
          <Link href="/contact">
            <span className="hover:text-primary dark:hover:text-red-400 hover:underline hover:underline-offset-4">
              contact
            </span>
          </Link>
        </div>
      </div>
      <div className="flex items-center px-2">
        <ThemeToggle />
      </div>
    </header>
  );
}
