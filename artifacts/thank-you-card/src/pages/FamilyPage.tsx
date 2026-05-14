import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Infinity as InfinityIcon } from "lucide-react";
import { ParticleField } from "@/components/ParticleField";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function FamilyPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
      className="min-h-screen text-[#1e3a5f] font-nunito overflow-hidden relative"
      style={{ background: 'linear-gradient(135deg, #fce7f3 0%, #dbeafe 20%, #dcfce7 40%, #fef9c3 60%, #ede9fe 80%, #fce7f3 100%)' }}
    >
      {/* Mixed Particles representing everyone - More visible! */}
      <ParticleField color="rgba(167, 199, 231, 0.8)" density={30} speed={0.5} /> {/* Chrys */}
      <ParticleField color="rgba(212, 175, 55, 0.8)" density={30} speed={0.3} />  {/* Gontr/Kemi */}
      <ParticleField color="rgba(34, 197, 94, 0.8)" density={30} speed={1} />     {/* Drico */}
      <ParticleField color="rgba(139, 92, 246, 0.8)" density={30} speed={0.2} />   {/* Ursin */}
      {/* Confetti Elements */}
      <div className="absolute top-[10%] left-[15%] w-4 h-4 bg-pink-400 rounded-full opacity-60 animate-bounce pointer-events-none" />
      <div className="absolute top-[30%] right-[20%] w-6 h-6 bg-blue-400 transform rotate-45 opacity-50 pointer-events-none" />
      <div className="absolute bottom-[25%] left-[25%] text-purple-500 text-3xl font-black opacity-40 pointer-events-none">★</div>
      <div className="absolute bottom-[10%] right-[15%] w-5 h-5 bg-green-400 rounded-full opacity-60 animate-pulse pointer-events-none" />
      <div className="fixed top-6 left-6 z-50">
        <Link href="/" className="text-purple-600/80 hover:text-purple-800 transition-colors flex items-center gap-2 group text-sm tracking-wider uppercase font-bold bg-white/50 px-4 py-2 rounded-full border border-purple-200">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Home
        </Link>
      </div>
      <main className="max-w-4xl mx-auto px-6 py-32 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
          className="mb-16 bg-white/60 w-32 h-32 mx-auto rounded-full flex items-center justify-center border-4 border-purple-300 shadow-xl"
        >
          <InfinityIcon size={64} className="text-[#7c3aed]" strokeWidth={2} />
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0, filter: "blur(10px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 2, delay: 1 }}
          className="font-pacifico text-6xl md:text-8xl mb-16 text-[#7c3aed] drop-shadow-sm"
        >
          For All of You
        </motion.h1>

        <ScrollReveal delay={2}>
          <p className="font-caveat text-3xl md:text-5xl text-[#d97706] mb-24 bg-white/40 p-6 rounded-3xl border-2 border-yellow-200 shadow-sm inline-block transform -rotate-1">A healer. A builder. A spark. A dreamer. A doer.</p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="space-y-12 max-w-3xl mx-auto text-xl md:text-2xl text-[#374151] font-semibold leading-relaxed bg-white/70 p-12 rounded-[3rem] border border-white shadow-lg backdrop-blur-sm">
            <p>Individually, you are extraordinary. Together, you are the constellations that guide my life.</p>
            <p>
              I am who I am because of the pieces of yourselves you have shared with me. Your patience, your discipline, your energy, your curiosity, your resilience.
            </p>
            <p>
              This digital space is small, but my gratitude is vast. Thank you for being my family, my foundation, and my greatest blessing.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal className="mt-32 pb-32">
          <div className="h-2 w-48 bg-gradient-to-r from-pink-400 via-yellow-400 to-blue-400 mx-auto mb-12 rounded-full shadow-sm" />
          <p className="font-pacifico text-5xl text-[#7c3aed]">
            Forever Grateful.
          </p>
        </ScrollReveal>
      </main>
    </motion.div>
  );
}
