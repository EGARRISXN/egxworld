import {
  FaGithub,
  FaXTwitter,
  FaLinkedin,
  FaSpotify,
  FaInstagram,
} from "react-icons/fa6";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full font-mono text-center p-4 flex items-center justify-between mx-auto border-t">
      <div className="flex text-sm sm:text-base">© 2024 Ethan G.</div>
      <div className="flex gap-4">
        <Link
          href="https://github.com/EGARRISXN"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary text-lg"
        >
          <FaGithub />
        </Link>
        <Link
          href="https://twitter.com/e____g_______"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary text-lg"
        >
          <FaXTwitter />
        </Link>
        <Link
          href="https://www.linkedin.com/in/ethan-garrison-261ba4a2"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary text-lg"
        >
          <FaLinkedin />
        </Link>
        <Link
          href="https://open.spotify.com/user/egarrisxn"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary text-lg"
        >
          <FaSpotify />
        </Link>
        <Link
          href="https://www.instagram.com/eg___xo"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary text-lg"
        >
          <FaInstagram />
        </Link>
      </div>
    </div>
  );
}
