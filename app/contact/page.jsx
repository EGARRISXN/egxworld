import Image from 'next/image'
import ContactForm from '@/components/Contact-Form'

export default function Contact() {
  return (
    <main className='mx-auto my-12 flex min-h-screen w-full flex-col items-center'>
      <header className='py-4 dark:bg-red-400'>
        <Image src='/banners/CONTACT.svg' width={2560} height={200} alt='contact' />
      </header>

      <section className='mx-auto mt-12 flex max-w-5xl flex-col gap-12 px-8 xl:max-w-6xl 2xl:mt-24 2xl:max-w-7xl'>
        <div className='mt-12 grid grid-cols-1 gap-0 px-8 lg:grid-cols-2 lg:gap-16 lg:rounded-xl lg:border-2 lg:border-red-400 lg:p-8 lg:shadow-xl 2xl:p-16 dark:shadow-red-300/20'>
          <div className='mx-auto flex w-full flex-col'>
            <h3 className='pb-8 pt-0 text-center text-xl font-bold text-red-400 lg:pt-8 lg:text-3xl 2xl:text-5xl'>
              Let's Connect!
            </h3>
            <ContactForm />
          </div>
          <div className='flexmx-auto mt-8 w-full lg:mt-0'>
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
        <div className='prose mx-auto rounded-lg border-2 border-red-400 p-4 text-center text-sm text-foreground shadow-xl lg:prose-lg dark:shadow-red-300/20'>
          If you'd like to support my work,
          <br />
          <a
            href='https://www.buymeacoffee.com/egarrisxn'
            target='_blank'
            rel='noopener noreferrer'
            className='font-bold text-foreground no-underline'
          >
            consider buying me a coffee{' '}
            <span className='text-red-400 no-underline hover:text-yellow-400 hover:underline hover:underline-offset-4'>
              here
            </span>
            !
          </a>
        </div>
      </section>
    </main>
  )
}
