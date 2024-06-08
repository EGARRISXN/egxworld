import Image from 'next/image'
import GitHubCalendar from 'react-github-calendar'
import TechIcons from '@/lib/techIcons'

export default function About() {
  return (
    <main className='mx-auto my-12 flex min-h-screen w-full flex-col items-center'>
      <header className='py-4 dark:bg-green-400'>
        <Image src='/banners/ABOUT.svg' width={2560} height={200} alt='about' />
      </header>

      <section className='mx-auto mt-12 flex max-w-5xl border-b border-green-400 px-8 pb-16 xl:max-w-6xl 2xl:mt-24 2xl:max-w-7xl'>
        <article className='prose max-w-5xl text-foreground lg:prose-lg xl:prose-xl xl:max-w-6xl 2xl:max-w-7xl'>
          <h1 className='text-foreground'>
            Hello there! I'm <span className='font-bold text-green-400'>Ethan G.</span>, a
            Full-Stack Web Developer & Designer based in beautiful Florida, USA.
          </h1>
          <p>
            In the summer of 2023, I successfully completed the full-time Full-Stack Web Development
            bootcamp through the University of Central Florida. Beyond coding, I cherish moments
            with family, love exploring the world, discovering new music, and have a soft spot for
            hockey.
          </p>
          <p>
            Embarking on this exciting journey, my focus revolves around crafting innovative Web
            Technologies and Applications, fueled by a profound passion for design. I specialize in
            bringing ideas to life using various JavaScript Libraries and Frameworks.
          </p>
          <p>Let's collaborate and build something amazing together! 🚀</p>
        </article>
      </section>
      <section className='mx-auto mt-12 flex w-full max-w-5xl flex-col border-b border-green-400 px-8 pb-16 xl:max-w-6xl 2xl:max-w-7xl'>
        <div className='prose mx-auto mb-8 text-center lg:prose-lg xl:prose-xl'>
          <h3 className='text-foreground'>
            <span className='font-bold text-green-300'>Technologies</span> &{' '}
            <span className='font-bold text-green-300'>tools</span> in my arsenal:
          </h3>
        </div>
        <div className='mx-auto flex max-w-4xl flex-wrap justify-center gap-8 text-xl lg:text-3xl'>
          <TechIcons />
        </div>
      </section>
      <section className='mx-auto mt-12 hidden max-w-5xl flex-col px-8 lg:flex xl:max-w-6xl 2xl:max-w-7xl'>
        <div className='prose mx-auto mb-8 text-center lg:prose-lg xl:prose-xl'>
          <h3 className='text-foreground'>
            <span className='font-bold text-green-300'>Contributions</span> &{' '}
            <span className='font-bold text-green-300'>time</span> spent on Github:
          </h3>
        </div>
        <GitHubCalendar username='EGARRISXN' />
      </section>
    </main>
  )
}
