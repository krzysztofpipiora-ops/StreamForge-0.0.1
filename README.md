# StreamForge 🎮

[![Next.js Wersja](https://img.shields.io/badge/next.js-v14.1.4-000000?style=flat-square&logo=nextdotjs)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/typescript-v5.4.3-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Licencja: MIT](https://img.shields.io/badge/Licencja-MIT-9D5CFF?style=flat-square)](https://opensource.org/licenses/MIT)
[![PRs Mile Widziane](https://img.shields.io/badge/PRs-Mile%20Widziane-00E5FF?style=flat-square)](https://makeapullrequest.com)
[![Status Wdrożenia](https://img.shields.io/badge/deploy-vercel-black?style=flat-square&logo=vercel)](https://vercel.com)

StreamForge to zintegrowany system zarządzania i konsola kontrolna klasy enterprise stworzona dla streamerów i twórców internetowych nadających na wielu platformach jednocześnie. Łączy analizę telemetrii w czasie rzeczywistym, wielokanałową dystrybucję danych, zaawansowane moduły moderacji oraz asystenta AI o niskich opóźnieniach, zamykając to w nowoczesnym interfejsie opartym na stylistyce liquid glass.

---

## ✨ Funkcjonalności

* **🌌 Wieloplatformowa Architektura Autentykacji:** Jednoczesne łączenie kont Twitch, YouTube, Kick, Facebook Meta i TikTok w jedną sesję użytkownika z automatycznym odświeżaniem tokenów dostępowych w tle.
* **📊 Pulpit Nawigacyjny Liquid Glass:** Elastyczny system siatki komponentów typu Drag-and-Drop (`dnd-kit`) wykorzystujący zaawansowane efekty przezroczystości szkła i renderowanie wykresów bez spadków wydajności.
* **📡 Uniwersalny Menedżer Streamu:** Jednoczesna aktualizacja tytułów, tagów, kategorii transmisji oraz rotacja zaszyfrowanych kluczy strumieniowych dla wszystkich powiązanych platform jednym kliknięciem.
* **🛡️ Centrum Bezpieczeństwa i Moderacji:** Heurystyczny analizator wiadomości z czatu na żywo, mierzący dynamikę wypowiedzi i umożliwiający natychmiastowe egzekwowanie blokad (ban/timeout).
* **📅 Harmonogram Wydarzeń Transmisyjnych:** Dwukierunkowa, automatyczna synchronizacja z Google Calendar i natywnym kalendarzem StreamForge z obsługą zaawansowanych reguł cykliczności.
* **🤖 Asystent AI Forge:** Ultraszybki agent sztucznej inteligencji osadzony bezpośrednio w interfejsie czatu, posiadający dostęp do stanów potoków transmisyjnych, narzędzi systemowych oraz bazy analitycznej.

---

## 🖥️ Zrzuty Ekranu / Prezentacja

### Główny Panel Kontrolny (Dashboard)
![Główny Panel](https://placehold.co/1200x630/070711/9D5CFF?text=StreamForge+Glowny+Panel+Kontrolny)

### Zarządzanie Transmisją Wielokanałową
![Menedżer Streamu](https://placehold.co/1200x630/070711/00E5FF?text=Menedzer+Transmisji+Wielokanalowej)

### Panel Weryfikacji i Moderacji
![Centrum Moderacji](https://placehold.co/1200x630/070711/FF2D7B?text=Centrum+Moderacji+i+Zgodnosci)

### Harmonogram i Planowanie Wydarzeń
![Planista](https://placehold.co/1200x630/070711/FFB800?text=Harmonogram+i+Planowanie+Audycji)

### Interfejs Kognitywny Asystenta AI
![Asystent AI](https://placehold.co/1200x630/070711/00FF88?text=Asystent+AI+Forge)

---

## 🛠️ Stos Technologiczny

| Kategoria | Technologia | Zastosowanie |
| :--- | :--- | :--- |
| **Szkielet Aplikacji** | Next.js 14 (App Router) | Częściowe Prerenderowanie (PPR), Server Components oraz optymalizacja routingu. |
| **System Typów** | TypeScript 5.4 | Statyczne typowanie gwarantujące stabilność architektury kodu i eliminację błędów. |
| **Baza Danych** | Prisma ORM & PostgreSQL | Mapowanie relacyjno-obiektowe, indeksowanie struktur i optymalizacja połączeń. |
| **Pamięć Podręczna** | Upstash Redis | Przechowywanie tokenów, zapobieganie przeciążeniom (Rate Limiting) oraz cache. |
| **Autentykacja** | NextAuth.js v5 | Bezpieczne łączenie kont OAuth wielu dostawców w ramach jednej tożsamości. |
| **Komunikacja API** | tRPC & React Query | Kompleksowo typowane interfejsy API końcówka-do-końcówki z mechanizmem batchingu zapytań. |
| **Warstwa Wizualna** | Tailwind CSS & Framer Motion | Style szklanego interfejsu (glassmorphism) oraz animacje renderowane w 60fps. |
| **Silnik Kognitywny** | OpenAI GPT-4o / Gemini Pro | Generowanie odpowiedzi asystenta AI przy użyciu wywołań funkcji (Function Calling). |

---

## 🚀 Instrukcja Szybkiego Uruchomienia

### Wymagania Wstępne
* **Środowisko Node.js:** Wersja `20.x` lub nowsza.
* **Menedżer pakietów:** `pnpm` w wersji `9.x` lub nowszej.
* **Relacyjna Baza Danych:** Aktywna instancja PostgreSQL `16.x`.
* **Szybka pamięć cache:** Dostęp do instancji Redis lub konta w usłudze Upstash.

### Procedura Instalacji Lokalnej


