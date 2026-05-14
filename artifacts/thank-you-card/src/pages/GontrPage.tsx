import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, TrendingUp, Target, Scale, Crown } from "lucide-react";
import { ParticleField } from "@/components/ParticleField";
import { ScrollReveal } from "@/components/ScrollReveal";

function GraphLines() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03]">
      <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 1000">
        <defs>
          <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#d4af37" stopOpacity="0" />
            <stop offset="50%" stopColor="#d4af37" stopOpacity="1" />
            <stop offset="100%" stopColor="#d4af37" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[...Array(5)].map((_, i) => (
          <motion.path
            key={i}
            d={`M0,${800 - i * 150} L200,${700 - i * 130} L400,${750 - i * 140} L600,${500 - i * 100} L800,${550 - i * 110} L1000,${300 - i * 80}`}
            fill="none"
            stroke="url(#gold-grad)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 5 + i * 2, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </svg>
    </div>
  );
}

export default function GontrPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#060a08] text-[#f8fafc] font-sans selection:bg-[#d4af37]/30"
    >
      <ParticleField color="rgba(212, 175, 55, 0.2)" density={30} speed={0.2} />
      <GraphLines />
      
      <div className="fixed top-6 left-6 z-50">
        <Link href="/" className="text-[#d4af37]/50 hover:text-[#d4af37] transition-colors flex items-center gap-2 group text-sm tracking-wider uppercase font-semibold">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Return
        </Link>
      </div>

      <main className="max-w-4xl mx-auto px-6 py-24 relative z-10">
        {/* Hero Section */}
        <section className="min-h-[80vh] flex flex-col justify-center items-center text-center border-x border-[#d4af37]/10 px-8 relative">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <Crown size={32} className="text-[#d4af37]/80 mx-auto" />
          </motion.div>
          
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-serif text-6xl md:text-8xl mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-[#d4af37]"
          >
            For Gontr
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-[#d4af37]/60 tracking-[0.4em] uppercase text-xs font-bold"
          >
            Discipline • Vision • Legacy
          </motion.p>
          
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />
        </section>

        {/* Message */}
        <ScrollReveal className="py-24 text-center max-w-2xl mx-auto">
          <p className="text-xl md:text-2xl leading-relaxed font-light text-gray-300">
            "You see the architecture of success where others only see the surface. Thank you for showing me what true discipline looks like, and for setting a standard that demands excellence."
          </p>
        </ScrollReveal>

        {/* Lessons */}
        <section className="py-24">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-16">
              <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-[#d4af37]/20" />
              <h2 className="font-serif text-2xl tracking-widest text-[#d4af37] uppercase">Lessons Learned</h2>
              <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-[#d4af37]/20" />
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: TrendingUp, title: "Long-term Thinking", text: "You taught me to ignore the noise of the day and focus on the compounding returns of consistent effort over years." },
              { icon: Target, title: "Precision", text: "Details matter. How you do one thing is how you do everything. Your meticulous nature is something I deeply admire." },
              { icon: Scale, title: "Value vs Price", text: "Knowing the difference between what something costs and what it's truly worth—in business and in life." }
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.2}>
                <div className="p-8 border border-[#d4af37]/20 bg-[#0a140f] hover:bg-[#0c1a13] transition-colors h-full group relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-[#d4af37]/0 group-hover:bg-[#d4af37] transition-all duration-500" />
                  <item.icon className="w-6 h-6 text-[#d4af37]/70 mb-6" />
                  <h3 className="text-lg mb-3 font-serif tracking-wide">{item.title}</h3>
                  <p className="text-gray-400 font-light text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Qualities */}
        <section className="py-24 max-w-2xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-3xl mb-12 text-center text-white">What I Admire Most</h2>
          </ScrollReveal>
          
          <div className="space-y-6">
            {[
              "Your unwavering commitment to your goals, regardless of the obstacles.",
              "The quiet confidence you bring into every room you enter.",
              "Your ability to build structures that last, protecting what matters."
            ].map((text, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="flex items-center gap-6 p-6 border border-white/5 bg-white/[0.02]">
                  <div className="w-2 h-2 rounded-full bg-[#d4af37] shrink-0 shadow-[0_0_10px_#d4af37]" />
                  <p className="text-gray-300 font-light tracking-wide">{text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Closing */}
        <ScrollReveal className="py-32 text-center border-t border-[#d4af37]/20 mt-12">
          <p className="text-xl font-light leading-relaxed text-gray-300 mb-16 max-w-2xl mx-auto">
            You don't just achieve success; you embody it. Thank you for raising the bar for everyone around you, especially me. I am proud to witness the empire you are building.
          </p>
          <div className="inline-block">
            <span className="block text-sm text-[#d4af37]/60 tracking-[0.2em] uppercase mb-4">With utmost respect</span>
            <span className="font-serif text-3xl tracking-widest text-white">Thank You</span>
          </div>
        </ScrollReveal>
      </main>
    </motion.div>
  );
}
