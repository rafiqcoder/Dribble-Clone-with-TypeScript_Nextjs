// import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
import 'global.css'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
export const metadata = {
  title: 'Dribble',
  description: 'Showcase and discover remarble developers projects.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <main>
        {children}
        </main>
        <Footer></Footer>
      </body>
    </html>
  )
}
