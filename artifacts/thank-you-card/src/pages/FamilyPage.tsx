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
      className="min-h-screen bg-black text-white font-sans overflow-hidden relative"
    >
      {/* Mixed Particles representing everyone */}
      <ParticleField color="rgba(167, 199, 231, 0.4)" density={20} speed={0.5} /> {/* Chrys */}
      <ParticleField color="rgba(212, 175, 55, 0.4)" density={20} speed={0.3} />  {/* Gontr/Kemi */}
      <ParticleField color="rgba(0, 255, 136, 0.4)" density={20} speed={1} />     {/* Drico */}
      <ParticleField color="rgba(6, 182, 212, 0.4)" density={20} speed={0.2} />   {/* Ursin */}

      {/* Symphony Background */}
      <motion.div 
        animate={{ 
          background: [
            "radial-gradient(circle at 20% 30%, rgba(167,199,231,0.05) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 70%, rgba(212,175,55,0.05) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 50%, rgba(0,255,136,0.05) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 30%, rgba(6,182,212,0.05) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 30%, rgba(167,199,231,0.05) 0%, transparent 50%)",
          ]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="fixed inset-0 pointer-events-none"
      />

      <div className="fixed top-6 left-6 z-50">
        <Link href="/" className="text-white/50 hover:text-white transition-colors flex items-center gap-2 group text-sm tracking-wider uppercase">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Home
        </Link>
      </div>

      <main className="max-w-4xl mx-auto px-6 py-32 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
          className="mb-16"
        >
          <InfinityIcon size={48} className="mx-auto text-white/30" strokeWidth={1} />
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0, filter: "blur(10px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 2, delay: 1 }}
          className="font-serif text-5xl md:text-7xl mb-24 tracking-wider"
        >
          For All of You
        </motion.h1>

        <ScrollReveal delay={2}>
          <p className="text-xl md:text-3xl leading-loose font-light text-gray-300 max-w-3xl mx-auto mb-24">
            A healer. A builder. A spark. A dreamer. A survivor.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="space-y-12 max-w-2xl mx-auto text-lg md:text-xl text-gray-400 font-light leading-relaxed">
            <p>
              Individually, you are extraordinary. Together, you are the constellation that guides my life. 
            </p>
            <p>
              I am who I am because of the pieces of yourselves you have shared with me. Your patience, your discipline, your energy, your curiosity, your resilience.
            </p>
            <p>
              This digital space is small, but my gratitude is vast. Thank you for being my family, my foundation, and my greatest blessing.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal className="mt-32 pb-32">
          <div className="h-[1px] w-32 bg-white/20 mx-auto mb-12" />
          <p className="font-serif text-3xl text-white tracking-widest">
            Forever Grateful.
          </p>
        </ScrollReveal>
      </main>
    </motion.div>
  );
}
