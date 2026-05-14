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
      className="min-h-screen text-white font-nunito selection:bg-[#d4af37]/30 relative"
      style={{ background: 'linear-gradient(180deg, #1a1400 0%, #2d2000 40%, #1a1000 100%)' }}
    >
      {/* Gold rain effect */}
      <ParticleField color="rgba(212, 175, 55, 0.6)" density={60} speed={0.5} />
      
      {/* Subtle gold foil texture / sparkles */}
      <div className="absolute top-[10%] right-[20%] text-[#d4af37] opacity-40 text-2xl font-serif pointer-events-none">✦</div>
      <div className="absolute bottom-[30%] left-[10%] text-[#d4af37] opacity-30 text-xl font-serif pointer-events-none">★</div>
      <div className="absolute top-[40%] left-[80%] text-[#d4af37] opacity-50 text-3xl font-serif pointer-events-none">✦</div>
      
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(212,175,55,0.15)_0%,_transparent_70%)] pointer-events-none" />

      <div className="fixed top-6 left-6 z-50">
        <Link href="/" className="text-[#d4af37]/70 hover:text-[#d4af37] transition-colors flex items-center gap-2 group text-sm tracking-widest uppercase font-bold">
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
            className="mb-12 p-6 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/5 shadow-[0_0_30px_rgba(212,175,55,0.2)]"
          >
            <Diamond size={48} className="text-[#d4af37]" strokeWidth={1.5} />
          </motion.div>
          
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="font-playfair italic text-5xl md:text-7xl mb-8 text-[#d4af37] leading-tight"
          >
            A Letter To Myself
          </motion.h1>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ duration: 1, delay: 1.5 }}
            className="h-[2px] bg-[#d4af37] mb-8 shadow-[0_0_10px_#d4af37]"
          />
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 2 }}
            className="text-[#d4af37]/70 font-bold tracking-[0.3em] uppercase text-sm"
          >
            For Kemi
          </motion.p>
        </section>

        {/* Opening Reflection */}
        <ScrollReveal className="py-24 text-center">
          <p className="text-2xl md:text-3xl leading-relaxed font-playfair italic text-[#f5e6c8] bg-[#1a1200]/60 border border-[#d4af37]/20 rounded-2xl backdrop-blur p-10 shadow-2xl">
            "I spend so much time thanking the people around me, lifting them up, and celebrating their wins. It is time I paused, looked in the mirror, and thanked myself."
          </p>
        </ScrollReveal>

        {/* Survival & Growth */}
        <section className="py-24">
          <div className="space-y-12">
            <ScrollReveal>
              <div className="text-center mb-12 bg-[#1a1200]/60 border border-[#d4af37]/20 rounded-2xl backdrop-blur p-12">
                <Anchor size={32} className="mx-auto mb-6 text-[#d4af37]" />
                <h2 className="font-playfair italic text-4xl text-[#f5c842] mb-6">For the storms I survived</h2>
                <p className="text-xl text-[#fef9e7] font-medium leading-relaxed max-w-2xl mx-auto">
                  For the days when getting out of bed felt impossible, but I did it anyway. For the silent battles nobody knew I was fighting. I didn't just endure them; I forged myself in them. I am stronger than I ever give myself credit for.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="text-center mb-12 bg-[#1a1200]/60 border border-[#d4af37]/20 rounded-2xl backdrop-blur p-12">
                <Feather size={32} className="mx-auto mb-6 text-[#d4af37]" />
                <h2 className="font-playfair italic text-4xl text-[#f5c842] mb-6">For the grace I've found</h2>
                <p className="text-xl text-[#fef9e7] font-medium leading-relaxed max-w-2xl mx-auto">
                  For learning to be gentle with my own mistakes. For realizing that my worth is not tied to my productivity. For slowly, bravely learning to love the parts of myself I used to hide.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="text-center bg-[#1a1200]/60 border border-[#d4af37]/20 rounded-2xl backdrop-blur p-12">
                <Mountain size={32} className="mx-auto mb-6 text-[#d4af37]" />
                <h2 className="font-playfair italic text-4xl text-[#f5c842] mb-6">For the ambition I hold</h2>
                <p className="text-xl text-[#fef9e7] font-medium leading-relaxed max-w-2xl mx-auto">
                  For never settling. For wanting more for my life and having the courage to pursue it. The hunger to grow is a beautiful thing, and I will trust the journey.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Vow */}
        <ScrollReveal className="py-32 relative">
          <div className="absolute inset-0 border-2 border-[#d4af37]/30 bg-[#d4af37]/10 -z-10 rounded-3xl" />
          <div className="p-16 text-center">
            <h2 className="font-nunito font-bold text-xl tracking-[0.4em] text-[#d4af37] uppercase mb-8">My Promise</h2>
            <p className="text-2xl font-playfair italic leading-relaxed text-white mb-12 max-w-xl mx-auto">
              I promise to stop breaking myself into pieces to keep others whole. I promise to protect my peace, celebrate my light, and trust my own resilience. I am enough, exactly as I am.
            </p>
            <div className="flex flex-col items-center gap-6">
              <div className="w-[2px] h-16 bg-gradient-to-b from-[#d4af37] to-transparent" />
              <span className="font-playfair text-4xl text-[#d4af37]">Thank you, Kemi.</span>
            </div>
          </div>
        </ScrollReveal>
      </main>
    </motion.div>
  );
}
