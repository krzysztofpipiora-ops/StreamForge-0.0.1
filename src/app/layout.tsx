import React from 'react'
import '@/app/globals.css' // Next.js automatycznie to podepnie

export const metadata = {
  title: 'StreamForge - Panel Kontrolny',
  description: 'Centrum zarządzania transmisjami live',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <head>
        {/* Pobieramy nowoczesne czcionki z CDN dla efektu premium */}
        <link href="https://api.fontshare.com/v2/css?f[]=clash-display@500,600,700&f[]=satoshi@400,500,700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#070711] text-white antialiased selection:bg-[#9D5CFF] selection:text-white">
        {children}
      </body>
    </html>
  )
}
