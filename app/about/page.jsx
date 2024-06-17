import Image from 'next/image'
import GitHubCalendar from 'react-github-calendar'
import TechIcons from '@/lib/techIcons'

export default function About() {
  return (
    <main className='mx-auto mb-12 mt-12 flex min-h-screen w-full flex-col items-center sm:mb-16'>
      <header className='py-4 dark:bg-green-400'>
        <Image src='/banners/ABOUT.svg' width={2560} height={200} alt='about' />
      </header>
      <section className='mx-auto mt-12 flex max-w-5xl border-b border-green-400 px-4 pb-16 sm:px-8 xl:max-w-6xl 2xl:mt-24 2xl:max-w-7xl'>
        <article className='prose max-w-5xl text-foreground lg:prose-lg xl:prose-xl 2xl:prose-2xl xl:max-w-6xl 2xl:max-w-7xl'>
          <h2 className='text-foreground'>
            Greetings! My name is <span className='font-bold text-green-400'>Ethan G. </span>
            I&apos;m dedicated Full-Stack Developer & Designer based in Orlando, Florida. My
            expertise lies in crafting innovative web technologies and applications that merge
            seamless functionality with elegant design.
          </h2>
          <p>
            With a foundation rooted in completing a rigorous Full-Stack Coding Boot Camp at the
            University of Central Florida, I continually expand my skills through advanced
            coursework, including Harvard University&apos;s CS50. I specialize in leveraging
            JavaScript libraries and frameworks to bring creative visions to life, ensuring each
            project is both technically robust and visually engaging.
          </p>
          <p>
            Beyond coding, I find inspiration in exploring new music, enjoying quality time with
            family, and finding ways to be out in the world. These diverse interests inform my
            approach, enhancing my ability to create solutions that resonate.
          </p>
          <p>
            Let&apos;s collaborate and transform your ideas into impactful digital experiences.
            Together, we can build something extraordinary. 🚀
          </p>
        </article>
      </section>
      <section className='mx-auto mt-12 flex w-full max-w-5xl flex-col border-b border-green-400 px-4 pb-16 sm:px-8 xl:max-w-6xl 2xl:max-w-7xl'>
        <div className='prose mx-auto mb-8 text-center lg:prose-lg xl:prose-xl 2xl:prose-2xl'>
          <h3 className='text-foreground'>
            <span className='font-bold text-green-300'>Technologies</span> &{' '}
            <span className='font-bold text-green-300'>tools</span> <br className='sm:hidden' />
            in my arsenal:
          </h3>
        </div>
        <div className='mx-auto flex max-w-5xl flex-wrap justify-center gap-8 text-xl lg:text-3xl'>
          <TechIcons />
        </div>
      </section>
      <section className='hidden max-w-5xl px-2 lg:mx-auto lg:mt-12 lg:flex lg:flex-col lg:px-8 xl:max-w-6xl 2xl:max-w-7xl'>
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
