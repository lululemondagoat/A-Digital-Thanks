import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Zap, Trophy, Flame, Star } from "lucide-react";
import { ParticleField } from "@/components/ParticleField";
import { ScrollReveal } from "@/components/ScrollReveal";

function StadiumGlow() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#86efac] rounded-full blur-[100px] opacity-30" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#7dd3fc] rounded-full blur-[100px] opacity-30" />
    </div>
  );
}

export default function DricoPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen text-[#1e3a8a] font-nunito selection:bg-[#22c55e]/30 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #e0f2fe 50%, #fefce8 100%)' }}
    >
      <ParticleField color="rgba(34, 197, 94, 0.4)" density={60} speed={1.5} />
      <StadiumGlow />
      
      {/* Decorative sports/energy shapes */}
      <div className="absolute top-[10%] right-[10%] w-16 h-16 border-4 border-[#22c55e] rounded-full opacity-40 pointer-events-none" />
      <div className="absolute bottom-[20%] left-[5%] text-[#0ea5e9] text-6xl font-black opacity-20 pointer-events-none transform -rotate-12">⚡</div>
      
      <div className="fixed top-6 left-6 z-50">
        <Link href="/" className="text-green-600/70 hover:text-green-700 transition-colors flex items-center gap-2 group text-sm tracking-wider uppercase font-bold">
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
            <div className="absolute inset-0 bg-[#22c55e] blur-xl opacity-40 rounded-full" />
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#22c55e] to-[#0ea5e9] p-1 shadow-2xl">
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                <Zap size={40} className="text-[#22c55e]" />
              </div>
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="font-bebas text-[5rem] md:text-[8rem] mb-2 tracking-widest text-[#15803d]"
          >
            DRICO
          </motion.h1>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "150px" }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="h-3 bg-[#22c55e] mb-6 rounded-full shadow-md"
          />
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="text-[#0369a1] tracking-[0.3em] uppercase text-base font-black bg-white px-6 py-2 rounded-full border-2 border-[#38bdf8] shadow-sm"
          >
            Energy • Passion • Heart
          </motion.p>
        </section>

        {/* Message */}
        <ScrollReveal className="py-20 text-center max-w-3xl mx-auto">
          <p className="text-3xl md:text-4xl font-black font-bebas tracking-wide text-[#166534] leading-tight bg-white/60 p-8 rounded-3xl border-4 border-green-200 shadow-xl transform rotate-1">
            "You bring the noise, the hype, and the life to every room you walk into. Thank you for never dimming your light and always bringing the energy we all need."
          </p>
        </ScrollReveal>

        {/* Grid */}
        <section className="py-20">
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal yOffset={100}>
              <div className="bg-white/90 p-8 rounded-3xl border-4 border-green-200 relative overflow-hidden group shadow-[0_8px_30px_rgba(34,197,94,0.15)] hover:shadow-[0_8px_30px_rgba(34,197,94,0.3)] hover:-translate-y-2 transition-all">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#22c55e] blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <Trophy className="w-8 h-8 text-[#166534]" />
                </div>
                <h3 className="text-4xl font-bebas tracking-wider text-[#15803d] mb-4">The Best Memories</h3>
                <p className="text-[#1e3a8a] font-bold leading-relaxed text-lg">
                  From screaming at the TV during impossible comebacks to the inside jokes that only we understand. The chaotic, hilarious moments are the ones I cherish the most.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal yOffset={100} delay={0.2}>
              <div className="bg-white/90 p-8 rounded-3xl border-4 border-green-200 relative overflow-hidden group shadow-[0_8px_30px_rgba(34,197,94,0.15)] hover:shadow-[0_8px_30px_rgba(34,197,94,0.3)] hover:-translate-y-2 transition-all">
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#0ea5e9] blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <Flame className="w-8 h-8 text-[#0369a1]" />
                </div>
                <h3 className="text-4xl font-bebas tracking-wider text-[#0369a1] mb-4">Unmatched Vibe</h3>
                <p className="text-[#1e3a8a] font-bold leading-relaxed text-lg">
                  It's impossible to be in a bad mood around you. You have this ridiculous ability to lift people up just by being yourself. Never lose that spark.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Future GOAT */}
        <section className="py-24 text-center">
          <ScrollReveal>
            <div className="inline-block px-8 py-3 rounded-full border-4 border-green-400 text-green-600 bg-green-50 font-black uppercase tracking-[0.2em] mb-12 shadow-lg transform -rotate-2">
              Future GOAT
            </div>
            <h2 className="text-5xl md:text-7xl font-bebas tracking-wider text-[#166534] mb-8">Your Potential is Crazy</h2>
            <p className="text-2xl text-[#1e3a8a] font-bold max-w-2xl mx-auto leading-relaxed bg-white/50 p-6 rounded-2xl">
              I see how much heart you put into the things you love. Keep grinding, keep pushing, and keep that hunger. I'll be in the stands cheering for you every step of the way.
            </p>
          </ScrollReveal>
        </section>

        {/* Closing */}
        <ScrollReveal className="py-20 text-center">
          <div className="w-full h-2 bg-gradient-to-r from-transparent via-[#22c55e] to-transparent mb-20 rounded-full" />
          <Star className="w-16 h-16 text-[#eab308] mx-auto mb-8 fill-[#fef08a] drop-shadow-md" />
          <p className="font-bebas text-6xl text-[#15803d] tracking-wider mb-4">Love you bro.</p>
          <p className="text-[#0369a1] uppercase tracking-[0.2em] text-lg font-black bg-white inline-block px-6 py-2 rounded-xl shadow-sm border-2 border-blue-200">Always in your corner.</p>
        </ScrollReveal>
      </main>
    </motion.div>
  );
}
