import Image from 'next/image'
import {Card, CardHeader, CardTitle, CardContent, CardFooter} from '@/components/ui/card'
import {CurrentProjects, DepricatedProjects} from '@/lib/projectData'
import {Button} from '@/components/ui/button'

export default function Projects() {
  return (
    <main className='mx-auto my-12 flex min-h-screen w-full flex-col items-center'>
      <header className='py-4 dark:bg-blue-400'>
        <Image src='/banners/PROJECTS.svg' width={2560} height={200} alt='projects' />
      </header>

      <section className='mx-auto mt-12 flex max-w-5xl flex-col gap-12 px-8 xl:max-w-6xl 2xl:mt-24 2xl:max-w-7xl'>
        <h1 className='text-center font-black'>&#183;Current&#183;</h1>
        <div className='mx-auto grid grid-cols-1 gap-8 lg:grid-cols-2'>
          {CurrentProjects.map((project, index) => (
            <Card
              key={index}
              className='rounded-xl border-2 border-blue-400 shadow-xl dark:shadow-blue-300/20'
            >
              <CardHeader>
                <Image
                  src={project.image}
                  alt={`project${index + 1}`}
                  width={600}
                  height={400}
                  className='rounded border-2'
                />
              </CardHeader>
              <CardTitle className='text-xl font-bold text-blue-400 no-underline hover:text-yellow-400 hover:underline hover:underline-offset-4'>
                <a href={project.websiteLink} target='_blank' rel='noopener noreferrer'>
                  {project.title}
                </a>
              </CardTitle>
              <CardContent className='mt-4'>
                <p className='line-clamp-4 text-sm'>{project.description}</p>
              </CardContent>
              <CardFooter className='justify-center gap-4 lg:gap-8'>
                <Button variant='outline' className='px-8'>
                  <a href={project.websiteLink} target='_blank' rel='noopener noreferrer'>
                    Link
                  </a>
                </Button>
                <Button variant='outline' className='px-8'>
                  <a href={project.repositoryLink} target='_blank' rel='noopener noreferrer'>
                    Repo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
      <br />
      <section className='mmx-auto mt-12 flex max-w-5xl flex-col gap-12 px-8 xl:max-w-6xl 2xl:max-w-7xl'>
        <h1 className='text-center font-black'>&#183;Depricated&#183;</h1>
        <div className='mx-auto grid grid-cols-1 gap-8 lg:grid-cols-2'>
          {DepricatedProjects.map((project, index) => (
            <Card
              key={index}
              className='rounded-xl border-2 border-blue-400 shadow-xl dark:shadow-blue-300/20'
            >
              <CardHeader>
                <Image
                  src={project.image}
                  alt={`project${index + 1}`}
                  width={600}
                  height={400}
                  className='rounded border-2'
                />
              </CardHeader>
              <CardTitle className='text-center text-xl font-bold text-blue-400 no-underline hover:text-yellow-400 hover:underline hover:underline-offset-4'>
                <a href={project.websiteLink} target='_blank' rel='noopener noreferrer'>
                  {project.title}
                </a>
              </CardTitle>
              <CardContent className='mt-4'>
                <p className='line-clamp-4 text-sm'>{project.description}</p>
              </CardContent>
              <CardFooter className='justify-center gap-4 lg:gap-8'>
                <Button variant='outline' className='px-8'>
                  <a href={project.websiteLink} target='_blank' rel='noopener noreferrer'>
                    Link
                  </a>
                </Button>
                <Button variant='outline' className='px-8'>
                  <a href={project.repositoryLink} target='_blank' rel='noopener noreferrer'>
                    Repo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </main>
  )
}
