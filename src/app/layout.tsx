import './globals.css'
import { Providers } from '@/redux/provider'
import favIcon from './favIcon.png'


export const metadata = {
  title: 'Hero Journey',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link rel="shortcut icon" href={favIcon.src} sizes='any'/>
      </head>
      <body className='font-bold'>
        <Providers>
          {children}
        </Providers>
       </body>
    </html>
  )
}
