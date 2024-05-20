import { Inter } from 'next/font/google'
import './globals.css'

import React from 'react'
import Navigation from '@/components/navigation'
import { Metadata } from 'next'
import { ThemeProvider } from '@/components/theme-provider'
import StoreProvider from '@/store/store-provider'

export const metadata: Metadata = {
  title: 'Next PoC',
  applicationName: 'Next PoC',
}
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <StoreProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <Navigation />
            {children}
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  )
}
