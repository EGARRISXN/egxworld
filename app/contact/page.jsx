import Image from "next/image";

export default function Contact() {
  return (
    <main className="w-full flex min-h-screen flex-col">
      <section className="dark:bg-red-400 flex my-16 py-4">
        <Image src="/CONTACT.svg" width={2000} height={200} alt="contact" />
      </section>
      <section className="flex my-12 lg:my-16 px-8 gap-0 max-w-5xl mx-auto text-foreground font-mono"></section>
    </main>
  );
}
