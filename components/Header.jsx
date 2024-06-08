'use client'
import Link from 'next/link'
import {MoonIcon, SunIcon} from '@radix-ui/react-icons'
import {useTheme} from 'next-themes'
import {Button} from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const navItems = [
  {name: 'about', href: '/about', external: false, hoverClass: 'hover:text-green-400'},
  {name: 'projects', href: '/projects', external: false, hoverClass: 'hover:text-blue-400'},
  {name: 'contact', href: '/contact', external: false, hoverClass: 'hover:text-red-400'},
  {
    name: 'blog',
    href: 'https://www.egxblog.net/',
    external: true,
    hoverClass: 'hover:text-yellow-400',
  },
]

export default function Header() {
  const {setTheme} = useTheme()

  return (
    <header className='border-b border-foreground shadow shadow-foreground'>
      <nav
        role='navigation'
        aria-label='Main Navigation'
        className='flex items-center justify-between'
      >
        <section className='bg-black dark:bg-white'>
          <div className='p-1 sm:p-3 md:p-4 lg:p-5 xl:p-6 2xl:p-7'>
            <Button variant='link' size='icon'>
              <Link
                href='/'
                className='block text-sm text-background sm:text-base lg:text-lg xl:text-xl 2xl:text-3xl'
              >
                eg
              </Link>
            </Button>
          </div>
        </section>
        <section className='flex-grow'>
          <div className='p-1 sm:p-3 md:p-4 lg:p-5 xl:p-6 2xl:p-7'>
            <ul className='ml-1 flex h-9 items-center gap-2 text-xs font-medium sm:ml-2 sm:gap-4 sm:text-sm md:ml-3 md:gap-6 md:text-base lg:ml-4 lg:gap-12 lg:text-lg xl:ml-5 xl:gap-16 xl:text-xl 2xl:ml-6 2xl:gap-24 2xl:text-3xl'>
              {navItems.map((item) => (
                <li key={item.name}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target='_blank'
                      rel='noopener noreferrer'
                      className={`hover:underline hover:underline-offset-4 ${item.hoverClass}`}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className={`hover:underline hover:underline-offset-4 ${item.hoverClass}`}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className='x'>
          <div className='p-1 sm:p-3 md:p-4 lg:p-5 xl:p-6 2xl:p-7'>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant='none' size='icon'>
                  <SunIcon className='size-[1rem] rotate-0 scale-100 transition-all sm:size-[1.2rem] md:size-[1.3rem] lg:size-[1.5rem] xl:size-[1.8rem] 2xl:size-[2rem] dark:-rotate-90 dark:scale-0' />
                  <MoonIcon className='absolute size-[1rem] rotate-90 scale-0 transition-all sm:size-[1.2rem] md:size-[1.3rem] lg:size-[1.5rem] xl:size-[1.8rem] 2xl:size-[2rem] dark:rotate-0 dark:scale-100' />
                  <span className='sr-only'>Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align='end'>
                <DropdownMenuItem onClick={() => setTheme('light')}>light</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('dark')}>dark</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('system')}>system</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </section>
      </nav>
    </header>
  )
}
