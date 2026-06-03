import React from 'react'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#070711] text-white flex flex-col items-center justify-center p-6 font-sans">
      {/* Szklany kontener główny */}
      <div className="max-w-2xl w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-glass p-8 shadow-glassBase animate-float text-center">
        
        {/* Tytuł z gradientem */}
        <h1 className="text-5xl font-bold font-display tracking-tight bg-gradient-to-r from-[#00E5FF] via-[#9D5CFF] to-[#FF2D7B] bg-clip-text text-transparent mb-4">
          StreamForge
        </h1>
        
        <p className="text-white/60 text-lg mb-8 max-w-md mx-auto">
          Zintegrowane centrum dowodzenia dla streamerów. Zarządzaj Twitch, YouTube i Kick z jednego, ultranowoczesnego panelu.
        </p>

        {/* Przyciski akcji */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-6 py-3 bg-[#9D5CFF] hover:bg-[#8640FF] transition-all rounded-xl font-medium shadow-glassGlow active:scale-95">
            Uruchom Panel Kontrolny
          </button>
          <button className="px-6 py-3 bg-white/5 hover:bg-white/10 transition-all rounded-xl font-medium border border-white/10 active:scale-95">
            Dokumentacja API
          </button>
        </div>

      </div>

      {/* Mini stopka informująca o platformach */}
      <div className="mt-12 flex gap-6 text-sm text-white/40">
        <span className="hover:text-[#9146FF] transition-colors cursor-pointer">Twitch</span>
        <span className="hover:text-[#FF0000] transition-colors cursor-pointer">YouTube</span>
        <span className="hover:text-[#53FC18] transition-colors cursor-pointer">Kick</span>
      </div>
    </div>
  )
}
