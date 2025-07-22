import FallbackTheme from '@/components/fallback-theme'
import { ThemeProvider } from '@/components/theme-provider'
import { TooltipProvider } from '@/components/ui/tooltip'
import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'sonner'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TtPhong portfolio',
  description: 'A Website for portfolio personal'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Analytics />
          <TooltipProvider>{children}</TooltipProvider>
          <Toaster position="bottom-right" />
          <FallbackTheme />
        </ThemeProvider>
      </body>
    </html>
  )
}
