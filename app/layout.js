import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Test Pokedex',
  description: 'Test Project',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Navbar />
        <main className="p-6">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
