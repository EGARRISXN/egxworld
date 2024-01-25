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

      <section className="max-w-5xl flex mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-12 px-8 gap-0 lg:gap-16 lg:shadow-xl lg:p-8 dark:shadow-red-300/20 lg:border-2 lg:border-red-400 lg:rounded-xl">
          <div className="flex flex-col mx-auto w-full">
            <h3 className="text-xl lg:text-3xl text-center text-red-400 font-bold pb-8 pt-0 lg:pt-8">
              Let's Connect!
            </h3>
            <ContactForm />
          </div>
          <div className="flex flex-row mx-auto w-full mt-8 lg:mt-0">
            <Image
              src="/other/contactme.png"
              width={400}
              height={600}
              alt="me"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
