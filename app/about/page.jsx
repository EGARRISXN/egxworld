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
        <article className='prose max-w-5xl text-foreground lg:prose-lg xl:prose-xl 2xl:prose-2xl xl:max-w-6xl 2xl:max-w-7xl'>
          <h1 className='text-foreground'>
            Hello, World! My name is <span className='font-bold text-green-400'>Ethan G.</span> and
            I am a Full-Stack Developer & Designer.
          </h1>
          <p>
            In early 2023, I successfully completed the full-time Full-Stack Coding Boot Camp
            through the University of Central Florida. Since then, I have taken the CS50 class
            through Harvard University, built numerous applications, and continued to learn
            everything I can about development and design! Beyond coding, I enjoy spending time with
            family, exploring the world, discovering new music, and catching the occasional hockey
            game.
          </p>
          <p>
            As I embark on this exciting journey, my focus is on crafting innovative web
            technologies and applications, fueled by a profound passion for design. I specialize in
            bringing ideas to life using various JavaScript libraries and frameworks.
          </p>
          <p>Let's get together and build something amazing! 🚀</p>
        </article>
      </section>
      <section className='mx-auto mt-12 flex w-full max-w-5xl flex-col border-b border-green-400 px-8 pb-16 xl:max-w-6xl 2xl:max-w-7xl'>
        <div className='prose mx-auto mb-8 text-center lg:prose-lg xl:prose-xl 2xl:prose-2xl'>
          <h3 className='text-foreground'>
            <span className='font-bold text-green-300'>Technologies</span> &{' '}
            <span className='font-bold text-green-300'>tools</span> in my arsenal:
          </h3>
        </div>
        <div className='mx-auto flex max-w-5xl flex-wrap justify-center gap-8 text-xl lg:text-3xl'>
          <TechIcons />
        </div>
      </section>
      <section className='hidden max-w-5xl lg:mx-auto lg:mt-12 lg:flex lg:flex-col lg:px-8 xl:max-w-6xl 2xl:max-w-7xl'>
        <div className='prose mx-auto mb-8 text-center lg:prose-lg xl:prose-xl 2xl:prose-2xl'>
          <h3 className='text-foreground'>
            <span className='font-bold text-green-300'>Contributions</span> &{' '}
            <span className='font-bold text-green-300'>time</span> spent on Github:
          </h3>
        </div>
        <GitHubCalendar username='EGARRISXN' />
      </section>
      <section className='mx-auto mt-12 lg:hidden'>
        <p className='px-2 text-center text-xs'>
          If you are on a mobile device or a tablet, there is nothing to see here..
        </p>
      </section>
    </main>
  )
}
