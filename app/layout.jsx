import './globals.css'
import {GeistSans} from 'geist/font/sans'
import {GeistMono} from 'geist/font/mono'
import {ThemeProvider} from '@/components/Theme-Provider'
import {Analytics} from '@vercel/analytics/react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  metadataBase: new URL('https://www.egxworld.net/'),
  title: 'EG. | World',
  description: 'The website/portfolio for Ethan G.',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'ethan_g, eg, EG, Ethan G., ethan-g, egarrisxn, egxworld, ethan garrison, ethan-garrison, ethan_garrison, ethan-garrison, portfolio, projects, about, nextjs, next, next14, shadcn-ui, shadcn/ui, radixui, tailwindcss, javascript, react',
  ],
  creator: {name: 'Ethan Garrison', url: 'https://github.com/EGARRISXN'},
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'EG. | World',
    description: 'The website/portfolio for Ethan G.',
    url: 'https://www.egxworld.net/',
    siteName: 'egxworld.net',
  },
  twitter: {
    cardType: 'summary_large_image',
    handle: '@eg_xo_',
    site: '@eg_xo_',
    title: 'EG. | World',
    description: 'The website/portfolio for Ethan G.',
  },
}

export default function RootLayout({children}) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable} scroll-smooth antialiased`}
    >
      <body>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
