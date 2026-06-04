import './globals.css'

export const metadata = {
  title: 'StreamForge 🎮',
  description: 'All-in-one streaming hub for Twitch, YouTube, Kick, Discord, and TikTok.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@500,600,700&f[]=satoshi@400,500,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#070711] text-white antialiased selection:bg-brand-accent selection:text-white">
        {children}
      </body>
    </html>
  )
}
