import SocialIcons from "@/lib/socialIcons";

export default function Footer() {
  return (
    <div className="w-full text-center p-4 flex items-center justify-between mx-auto border-t">
      <div className="flex text-sm sm:text-base">© 2024 Ethan G.</div>
      <div className="flex gap-4">
        <SocialIcons />
      </div>
    </div>
  );
}
