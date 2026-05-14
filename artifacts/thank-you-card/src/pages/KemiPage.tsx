import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Diamond, Anchor, Mountain, Feather } from "lucide-react";
import { ParticleField } from "@/components/ParticleField";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function KemiPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-black text-[#fdfbf7] font-sans selection:bg-[#d4af37]/30 relative"
    >
      {/* Gold rain effect */}
      <ParticleField color="rgba(212, 175, 55, 0.4)" density={40} speed={0.5} className="opacity-50" />
      
      {/* Subtle ambient lighting */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(212,175,55,0.05)_0%,_transparent_70%)] pointer-events-none" />

      <div className="fixed top-6 left-6 z-50">
        <Link href="/" className="text-[#d4af37]/60 hover:text-[#d4af37] transition-colors flex items-center gap-2 group text-sm tracking-widest uppercase font-light">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Reflect
        </Link>
      </div>

      <main className="max-w-3xl mx-auto px-6 py-24 relative z-10">
        {/* Hero Section */}
        <section className="min-h-[85vh] flex flex-col justify-center items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="mb-12"
          >
            <Diamond size={32} className="text-[#d4af37] opacity-80" strokeWidth={1} />
          </motion.div>
          
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="font-serif text-5xl md:text-7xl mb-8 font-medium text-transparent bg-clip-text bg-gradient-to-b from-[#fff] to-[#d4af37]/60 leading-tight"
          >
            A Letter To Myself
          </motion.h1>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "60px" }}
            transition={{ duration: 1, delay: 1.5 }}
            className="h-[1px] bg-[#d4af37]/40 mb-8"
          />
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 2 }}
            className="text-gray-400 font-light tracking-[0.2em] uppercase text-sm"
          >
            For Kemi
          </motion.p>
        </section>

        {/* Opening Reflection */}
        <ScrollReveal className="py-24 text-center">
          <p className="text-xl md:text-2xl leading-relaxed font-serif text-gray-300">
            "I spend so much time thanking the people around me, lifting them up, and celebrating their wins. It is time I paused, looked in the mirror, and thanked myself."
          </p>
        </ScrollReveal>

        {/* Survival & Growth */}
        <section className="py-24">
          <div className="space-y-20">
            <ScrollReveal>
              <div className="text-center mb-12">
                <Anchor size={24} className="mx-auto mb-6 text-[#d4af37]/50" />
                <h2 className="font-serif text-3xl text-white mb-6">For the storms I survived</h2>
                <p className="text-lg text-gray-400 font-light leading-relaxed max-w-2xl mx-auto">
                  For the days when getting out of bed felt impossible, but I did it anyway. For the silent battles nobody knew I was fighting. I didn't just endure them; I forged myself in them. I am stronger than I ever give myself credit for.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="text-center mb-12">
                <Feather size={24} className="mx-auto mb-6 text-[#d4af37]/50" />
                <h2 className="font-serif text-3xl text-white mb-6">For the grace I've found</h2>
                <p className="text-lg text-gray-400 font-light leading-relaxed max-w-2xl mx-auto">
                  For learning to be gentle with my own mistakes. For realizing that my worth is not tied to my productivity. For slowly, bravely learning to love the parts of myself I used to hide.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="text-center">
                <Mountain size={24} className="mx-auto mb-6 text-[#d4af37]/50" />
                <h2 className="font-serif text-3xl text-white mb-6">For the ambition I hold</h2>
                <p className="text-lg text-gray-400 font-light leading-relaxed max-w-2xl mx-auto">
                  For never settling. For wanting more for my life and having the courage to pursue it. The hunger to grow is a beautiful thing, and I will trust the journey.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Vow */}
        <ScrollReveal className="py-32 relative">
          <div className="absolute inset-0 border border-[#d4af37]/10 bg-[#d4af37]/[0.02] -z-10" />
          <div className="p-12 text-center">
            <h2 className="font-serif text-2xl tracking-widest text-[#d4af37] uppercase mb-8">My Promise</h2>
            <p className="text-xl font-light leading-relaxed text-gray-200 mb-12 max-w-xl mx-auto">
              I promise to stop breaking myself into pieces to keep others whole. I promise to protect my peace, celebrate my light, and trust my own resilience. I am enough, exactly as I am.
            </p>
            <div className="flex flex-col items-center gap-4">
              <div className="w-[1px] h-12 bg-[#d4af37]/30" />
              <span className="font-serif text-3xl text-white">Thank you, Kemi.</span>
            </div>
          </div>
        </ScrollReveal>
      </main>
    </motion.div>
  );
}
