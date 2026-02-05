import React from "react"
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import './globals.css'

const _montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MATEO - Login',
  description: 'Sign in to your MATEO account',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
