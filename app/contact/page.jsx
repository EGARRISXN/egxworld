import Image from "next/image";
import ContactForm from "@/components/Contact-Form";

export default function Contact() {
  return (
    <main>
      <section className="dark:bg-red-400 py-4">
        <Image
          src="/banners/CONTACT.svg"
          width={2000}
          height={200}
          alt="contact"
        />
      </section>

      <section className="max-w-5xl flex flex-col mx-auto gap-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-12 px-8 gap-0 lg:gap-16 lg:shadow-xl lg:p-8 dark:shadow-red-300/20 lg:border-2 lg:border-red-400 lg:rounded-xl">
          <div className="flex flex-col mx-auto w-full">
            <h3 className="text-xl lg:text-3xl text-center text-red-400 font-bold pb-8 pt-0 lg:pt-8">
              Let's Connect!
            </h3>
            <ContactForm />
          </div>
          <div className="flexmx-auto w-full mt-8 lg:mt-0">
            <Image
              src="/other/contactpage.png"
              width={400}
              height={600}
              quality={100}
              priority
              alt="Contact Me"
            />
          </div>
        </div>
        <div className="text-center mx-auto prose lg:prose-lg text-foreground text-sm border-2 border-red-400 shadow-xl dark:shadow-red-300/20 rounded-lg p-4">
          If you'd like to support my work,
          <br />
          <a
            href="https://www.buymeacoffee.com/egarrisxn"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-foreground no-underline"
          >
            consider buying me a coffee{" "}
            <span className="text-red-400 hover:text-yellow-400 hover:underline hover:underline-offset-4 no-underline">
              here
            </span>
            !
          </a>
        </div>
      </section>
    </main>
  );
}
