import Image from 'next/image'
import ContactForm from '@/components/Contact-Form'

export default function Contact() {
  return (
    <main className='mx-auto my-12 flex min-h-screen w-full flex-col items-center'>
      <header className='py-4 dark:bg-red-400'>
        <Image src='/banners/CONTACT.svg' width={2560} height={200} alt='contact' />
      </header>
      <section className='mx-auto mt-12 flex max-w-5xl flex-col gap-12 px-2 sm:mb-12 sm:px-8 xl:max-w-6xl 2xl:mb-0 2xl:mt-24 2xl:max-w-7xl'>
        <div className='grid grid-cols-1 gap-0 px-2 sm:px-8 md:grid-cols-2 lg:mt-12 lg:gap-16 lg:rounded-xl lg:border-2 lg:border-red-400 lg:p-8 lg:shadow-xl 2xl:p-16 dark:shadow-red-300/20'>
          <div className='order-2 mx-auto flex w-full flex-col md:order-1'>
            <h3 className='pb-8 pt-0 text-center font-extrabold text-red-400 lg:pt-8 lg:text-3xl 2xl:text-5xl'>
              Let's Connect!
            </h3>
            <ContactForm />
          </div>
          <div className='order-1 mx-auto mb-8 flex w-full justify-center md:order-2 lg:mb-0'>
            <Image
              src='/other/contactpage.png'
              width={400}
              height={600}
              quality={100}
              priority
              alt='Contact Me'
            />
          </div>
        </div>
        <div className='mx-6 rounded-lg border-2 border-red-400 p-4 text-center text-sm text-foreground shadow-xl sm:mx-auto sm:text-sm lg:text-lg xl:text-xl 2xl:text-2xl dark:shadow-red-300/20'>
          Thank you for taking the time to check me out &#9829;
        </div>
      </section>
    </main>
  )
}
