import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Zap, Trophy, Flame, Star } from "lucide-react";
import { ParticleField } from "@/components/ParticleField";
import { ScrollReveal } from "@/components/ScrollReveal";

function StadiumGlow() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#00ff88] rounded-full blur-[150px] opacity-10" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#00b8ff] rounded-full blur-[150px] opacity-10" />
    </div>
  );
}

export default function DricoPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#030712] text-white font-sans selection:bg-[#00ff88]/30"
    >
      <ParticleField color="rgba(0, 255, 136, 0.4)" density={60} speed={1.5} />
      <StadiumGlow />
      
      <div className="fixed top-6 left-6 z-50">
        <Link href="/" className="text-[#00ff88]/70 hover:text-[#00ff88] transition-colors flex items-center gap-2 group text-sm tracking-wider uppercase font-bold">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Lobby
        </Link>
      </div>

      <main className="max-w-5xl mx-auto px-6 py-20 relative z-10">
        {/* Hero Section */}
        <section className="min-h-[70vh] flex flex-col justify-center items-center text-center">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="mb-8 relative"
          >
            <div className="absolute inset-0 bg-[#00ff88] blur-xl opacity-20 rounded-full" />
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#00ff88] to-[#00b8ff] p-1">
              <div className="w-full h-full bg-[#030712] rounded-full flex items-center justify-center">
                <Zap size={40} className="text-[#00ff88]" />
              </div>
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="font-black text-6xl md:text-9xl mb-4 italic tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-br from-white via-[#e2e8f0] to-[#94a3b8]"
          >
            DRICO
          </motion.h1>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="h-2 bg-[#00ff88] mb-6 rounded-full"
          />
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="text-[#00b8ff] tracking-widest uppercase text-sm font-bold"
          >
            Energy • Passion • Heart
          </motion.p>
        </section>

        {/* Message */}
        <ScrollReveal className="py-20 text-center max-w-3xl mx-auto">
          <p className="text-2xl md:text-3xl font-bold italic text-white/90 leading-tight">
            "You bring the noise, the hype, and the life to every room you walk into. Thank you for never dimming your light and always bringing the energy we all need."
          </p>
        </ScrollReveal>

        {/* Grid */}
        <section className="py-20">
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal yOffset={100}>
              <div className="bg-gradient-to-br from-[#0f172a] to-[#020617] p-8 rounded-3xl border border-white/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00ff88] blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                <Trophy className="w-10 h-10 text-[#00ff88] mb-6" />
                <h3 className="text-2xl font-black italic uppercase mb-4 tracking-wide">The Best Memories</h3>
                <p className="text-gray-400 leading-relaxed font-medium">
                  From screaming at the TV during impossible comebacks to the inside jokes that only we understand. The chaotic, hilarious moments are the ones I cherish the most.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal yOffset={100} delay={0.2}>
              <div className="bg-gradient-to-bl from-[#0f172a] to-[#020617] p-8 rounded-3xl border border-white/5 relative overflow-hidden group">
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#00b8ff] blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                <Flame className="w-10 h-10 text-[#00b8ff] mb-6" />
                <h3 className="text-2xl font-black italic uppercase mb-4 tracking-wide">Unmatched Vibe</h3>
                <p className="text-gray-400 leading-relaxed font-medium">
                  It's impossible to be in a bad mood around you. You have this ridiculous ability to lift people up just by being yourself. Never lose that spark.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Future GOAT */}
        <section className="py-24 text-center">
          <ScrollReveal>
            <div className="inline-block px-6 py-2 rounded-full border-2 border-[#00ff88]/30 text-[#00ff88] font-bold uppercase tracking-widest mb-12">
              Future GOAT
            </div>
            <h2 className="text-4xl md:text-5xl font-black italic uppercase mb-8">Your Potential is Crazy</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              I see how much heart you put into the things you love. Keep grinding, keep pushing, and keep that hunger. I'll be in the stands cheering for you every step of the way.
            </p>
          </ScrollReveal>
        </section>

        {/* Closing */}
        <ScrollReveal className="py-20 text-center">
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#00ff88]/50 to-transparent mb-20" />
          <Star className="w-12 h-12 text-[#00ff88] mx-auto mb-8 fill-[#00ff88]/20" />
          <p className="text-2xl font-bold mb-4">Love you bro.</p>
          <p className="text-gray-500 uppercase tracking-widest text-sm font-bold">Always in your corner.</p>
        </ScrollReveal>
      </main>
    </motion.div>
  );
}
