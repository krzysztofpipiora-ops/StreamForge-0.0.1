export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#070711] text-white">
      <div className="liquid-bg" />
      <section className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-20">
        <div className="w-full rounded-[32px] border border-white/10 bg-white/5 px-8 py-12 shadow-glassBase backdrop-blur-2xl sm:px-12">
          <div className="space-y-8 text-center">
            <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.24em] text-white/60">
              Multi-platform streaming hub
            </span>

            <h1 className="bg-gradient-to-r from-brand-accent via-brand to-brand-punch bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl">
              StreamForge
            </h1>

            <p className="mx-auto max-w-3xl text-base leading-8 text-white/70 sm:text-lg">
              Centralize your live streaming workflow with the fastest Twitch, YouTube, Kick and
              AI-powered moderation tools. Designed for creators who want performance, polish, and
              one consistent broadcast experience.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-[24px] bg-brand px-7 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-brand-soft"
              >
                Explore features
              </a>
              <a
                href="#setup"
                className="inline-flex items-center justify-center rounded-[24px] border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Get started
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { label: 'Twitch', color: 'bg-twitch/15 text-twitch' },
            { label: 'YouTube', color: 'bg-youtube/15 text-youtube' },
            { label: 'Kick', color: 'bg-kick/15 text-kick' },
            { label: 'Discord', color: 'bg-discord/15 text-discord' },
            { label: 'TikTok', color: 'bg-tiktok/15 text-tiktok' },
            { label: 'Facebook', color: 'bg-facebook/15 text-facebook' },
          ].map((platform) => (
            <div
              key={platform.label}
              className="rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-glassBase backdrop-blur-xl"
            >
              <span
                className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${platform.color}`}
              >
                {platform.label}
              </span>
              <p className="mt-4 text-sm text-white/70">
                Unified stream controls, chat triggers, and real-time analytics for {platform.label}
                .
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="features" className="border-t border-white/10 bg-[#05050a] py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 text-center">
            <p className="text-sm uppercase tracking-[0.32em] text-white/50">Featured tools</p>
            <h2 className="mt-3 text-4xl font-semibold text-white">Everything your studio needs</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                title: 'Stream Control',
                description:
                  'Publish titles, categories, and live metadata across every streaming platform from one dashboard.',
              },
              {
                title: 'AI Assistant',
                description:
                  'Get performance prompts, chat moderation workflows, and automated title suggestions in one place.',
              },
              {
                title: 'Secure Studio',
                description:
                  'NextAuth and Prisma protect your sessions, credentials, and cross-platform account links.',
              },
            ].map((card) => (
              <article
                key={card.title}
                className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-glassGlow transition hover:-translate-y-1 hover:bg-white/10"
              >
                <h3 className="text-xl font-semibold text-white">{card.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/70">{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
