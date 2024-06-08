import SocialIcons from '@/lib/socialIcons.js'

export default function Footer() {
  return (
    <footer className='border-t border-foreground'>
      <div className='flex items-center justify-between p-2.5 sm:p-3 md:p-4 lg:p-5 xl:p-6 2xl:p-7'>
        <section className='flex text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-3xl'>
          EG|2024
        </section>
        <section className='flex gap-2 text-sm sm:text-base lg:text-lg xl:gap-4 xl:text-xl 2xl:text-3xl'>
          <SocialIcons />
        </section>
      </div>
    </footer>
  )
}
