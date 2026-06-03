import React from 'react'

// Atrakcyjne dane demonstracyjne, gdyby baza danych była pusta
const MOCK_PLATFORMS = [
  { name: 'Twitch', color: '#9146FF', active: true, viewers: 1420, title: 'Wbijamy Range w Valorancie! 🎮' },
  { name: 'YouTube', color: '#FF0000', active: true, viewers: 850, title: 'Valorant z widzami! LIVE' },
  { name: 'Kick', color: '#53FC18', active: false, viewers: 0, title: 'Brak transmisji' },
]

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#070711] text-white p-4 md:p-8 relative">
      <div className="liquid-bg" />

      {/* Górny pasek nawigacyjny */}
      <header className="max-w-7xl mx-auto mb-8 flex flex-col sm:flex-row justify-between items-center gap-4 bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-2xl">
        <div className="flex items-center gap-3">
          <div className="h-4 w-4 rounded-full bg-[#00FF88] animate-pulse" />
          <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-[#00E5FF] to-[#9D5CFF] bg-clip-text text-transparent">
            StreamForge Engine
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-white/60 text-sm font-mono">Status: Połączony</span>
          <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-[#9D5CFF] to-[#FF2D7B] flex items-center justify-center font-bold text-sm border border-white/20 shadow-sm">
            SF
          </div>
        </div>
      </header>

      {/* Główna siatka elementów (Grid) */}
      <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* LEWA I ŚRODKOWA KOLUMNA: Platformy i Zarządzanie */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          
          {/* Szybkie statystyki ogólne */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-glass shadow-glassBase">
              <p className="text-white/40 text-xs font-medium uppercase tracking-wider mb-1">Łączna widownia</p>
              <h3 className="text-3xl font-bold font-mono text-[#00E5FF]">2,270</h3>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-glass shadow-glassBase">
              <p className="text-white/40 text-xs font-medium uppercase tracking-wider mb-1">Czas transmisji</p>
              <h3 className="text-3xl font-bold font-mono text-[#9D5CFF]">03h 42m</h3>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-glass shadow-glassBase">
              <p className="text-white/40 text-xs font-medium uppercase tracking-wider mb-1">Zgłoszenia modów</p>
              <h3 className="text-3xl font-bold font-mono text-[#FF2D7B]">0 nowych</h3>
            </div>
          </div>

          {/* Zarządzanie platformami */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-glass shadow-glassBase">
            <h2 className="text-xl font-bold mb-4">Centrum Multistreamingu</h2>
            <div className="flex flex-col gap-4">
              {MOCK_PLATFORMS.map((platform) => (
                <div key={platform.name} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-white/5 border border-white/5 rounded-xl gap-4 hover:border-white/10 transition-colors">
                  <div className="flex items-center gap-4">
                    <div 
                      className="w-3 h-12 rounded-full" 
                      style={{ backgroundColor: platform.color }}
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-lg">{platform.name}</h4>
                        {platform.active ? (
                          <span className="text-[10px] bg-[#00FF88]/20 text-[#00FF88] px-2 py-0.5 rounded-full font-bold uppercase">Live</span>
                        ) : (
                          <span className="text-[10px] bg-white/10 text-white/40 px-2 py-0.5 rounded-full font-bold uppercase">Offline</span>
                        )}
                      </div>
                      <p className="text-white/60 text-sm truncate max-w-xs sm:max-w-md">{platform.title}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                    <span className="font-mono text-sm text-white/80">{platform.viewers} widzów</span>
                    <button className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all active:scale-95 ${
                      platform.active ? 'bg-[#FF2D7B] hover:bg-[#D61F63]' : 'bg-white/10 hover:bg-white/20'
                    }`}>
                      {platform.active ? 'Rozłącz' : 'Uruchom'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* PRAWA KOLUMNA: Globalny Zunifikowany Czat */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-glass shadow-glassBase flex flex-col h-[500px] lg:h-auto">
          <h2 className="text-xl font-bold mb-4 flex items-center justify-between">
            <span>Zunifikowany Czat</span>
            <span className="text-xs font-mono text-white/40">Real-time</span>
          </h2>
          
          {/* Kontener na wiadomości z czatu */}
          <div className="flex-1 overflow-y-auto space-y-3 pr-2 mb-4 text-sm scrollbar-thin">
            <div className="p-2.5 bg-white/5 rounded-lg border border-white/5">
              <span className="text-[#9146FF] font-bold mr-2">Twitch_User:</span>
              <span className="text-white/80">Mega jakość stary! Żadnych ścinek na multistreamie 🔥</span>
            </div>
            <div className="p-2.5 bg-white/5 rounded-lg border border-white/5">
              <span className="text-[#FF0000] font-bold mr-2">YT_Viewer_99:</span>
              <span className="text-white/80">Czy gracie dzisiaj z widzami pod koniec lajwa?</span>
            </div>
            <div className="p-2.5 bg-white/5 rounded-lg border border-white/5">
              <span className="text-[#53FC18] font-bold mr-2">Kick_Legend:</span>
              <span className="text-white/80">Czat z Kicka melduje się na pokładzie! 🟢</span>
            </div>
            <div className="p-2.5 bg-[#9D5CFF]/10 rounded-lg border border-[#9D5CFF]/20 animate-pulse">
              <span className="text-[#00E5FF] font-bold mr-2">🤖 SYSTEM AI:</span>
              <span className="text-[#00E5FF]/90">Wykryto nagły skok zaangażowania na YouTube (+25%).</span>
            </div>
          </div>

          {/* Pole wpisywania wiadomości */}
          <div className="flex gap-2">
            <input 
              type="text" 
              placeholder="Napisz ogłoszenie na wszystkie czaty..." 
              className="flex-1 bg-black/40 border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-[#9D5CFF] transition-colors placeholder:text-white/30"
            />
            <button className="bg-[#9D5CFF] hover:bg-[#8640FF] px-4 py-2 rounded-xl text-sm font-bold transition-all active:scale-95">
              Wyślij
            </button>
          </div>
        </div>

      </main>
    </div>
  )
}
