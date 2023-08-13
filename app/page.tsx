import Image from 'next/image'
import Navbar from './components/navbar'
import Hero from './components/Hero'
import Albumz from './components/albums'
import MusicSection from './components/musicSection'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <Hero/>
      <MusicSection />
      <Albumz />
    </main>
  )
}
