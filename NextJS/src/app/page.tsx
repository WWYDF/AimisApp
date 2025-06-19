import Hero from "@/components/clientSide/Home/Hero";
import TheProcess from "@/components/clientSide/Home/TheProcess";
import FAQ from "@/components/clientSide/Home/FAQ";
import WhyMade from "@/components/clientSide/Home/WhyMade";

export default function Home() {
  return (
    <main className="space-y-24">
      <Hero />
      <TheProcess />
      <FAQ />
      <WhyMade />
    </main>
  )
}