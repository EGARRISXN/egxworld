import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center text-center justify-center h-screen">
      <p className=" text-lg sm:text-2xl font-semibold pt-2">PAGE NOT FOUND.</p>
      <br />
      <Link href="/">
        <Button className="px-8 bg-red-400">Go Home</Button>
      </Link>
    </div>
  );
}
