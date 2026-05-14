import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Heart, Stethoscope, Sunrise, Shield } from "lucide-react";
import { ParticleField } from "@/components/ParticleField";
import { ScrollReveal } from "@/components/ScrollReveal";

function HeartbeatLine() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
      <svg
        className="w-full h-full"
        preserveAspectRatio="none"
        viewBox="0 0 1000 200"
      >
        <motion.path
          d="M0,100 L300,100 L320,100 L350,50 L380,150 L410,20 L440,180 L470,100 L500,100 L1000,100"
          fill="none"
          stroke="rgba(147, 51, 234, 0.4)"
          strokeWidth="3"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      </svg>
    </div>
  );
}

export default function ChrysPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen text-[#1e3a5f] font-nunito selection:bg-purple-200/50 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #f0f7ff 0%, #ede9fe 50%, #fce7f3 100%)' }}
    >
      <ParticleField color="rgba(147, 197, 253, 0.5)" density={40} speed={0.3} />
      <HeartbeatLine />
      
      {/* Decorative SVG Elements */}
      <div className="absolute top-[15%] left-[5%] text-purple-400 opacity-30 text-3xl transform -rotate-12 pointer-events-none">✦</div>
      <div className="absolute top-[25%] right-[10%] text-pink-400 opacity-40 text-4xl transform rotate-12 pointer-events-none">♥</div>
      <div className="absolute bottom-[20%] left-[15%] text-blue-400 opacity-30 text-5xl transform rotate-45 pointer-events-none">★</div>
      
      <div className="fixed top-6 left-6 z-50">
        <Link href="/" className="text-purple-500/70 hover:text-purple-600 transition-colors flex items-center gap-2 group text-sm tracking-wider uppercase font-bold">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back
        </Link>
      </div>

      <main className="max-w-4xl mx-auto px-6 py-24 relative z-10">
        {/* Hero Section */}
        <section className="min-h-[80vh] flex flex-col justify-center items-center text-center relative">
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="mb-8 relative"
          >
            <div className="w-24 h-24 rounded-full border-4 border-white bg-white/80 flex items-center justify-center shadow-[0_10px_30px_rgba(147,51,234,0.15)] mx-auto relative z-10">
              <Stethoscope size={40} className="text-purple-500" />
            </div>
            {/* Sticker ribbon */}
            <div className="absolute -bottom-2 -right-4 bg-pink-400 text-white text-xs font-bold px-3 py-1 rounded-full transform rotate-12 shadow-sm border-2 border-white z-20">
              Hero!
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-caveat text-6xl md:text-8xl mb-6 text-[#5b21b6]"
          >
            For Chrys
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-purple-600/80 font-bold tracking-[0.2em] uppercase text-sm"
          >
            A steady hand. A healing presence.
          </motion.p>
        </section>

        {/* Message */}
        <ScrollReveal className="py-24 text-center max-w-2xl mx-auto">
          <p className="text-xl md:text-3xl leading-relaxed font-caveat text-[#4c1d95]">
            "Thank you for being the calm in the storm. For showing me what it means to care for others without losing yourself. Your dedication to your craft and the people around you is nothing short of beautiful."
          </p>
        </ScrollReveal>

        {/* Lessons */}
        <section className="py-24">
          <ScrollReveal>
            <h2 className="font-caveat text-5xl mb-16 text-center text-[#7c3aed]">Things You've Taught Me</h2>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal delay={0.1}>
              <div className="p-8 rounded-3xl bg-white/80 backdrop-blur-sm border border-purple-200 shadow-xl hover:shadow-2xl hover:border-purple-300 transition-all">
                <Heart className="w-10 h-10 text-pink-400 mb-6" />
                <h3 className="text-2xl mb-4 font-caveat text-[#5b21b6]">Patience in Chaos</h3>
                <p className="text-[#1e3a5f]/80 font-medium leading-relaxed">
                  Watching you navigate high-pressure situations with such grace taught me that stillness is a choice, not just a circumstance.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.3}>
              <div className="p-8 rounded-3xl bg-white/80 backdrop-blur-sm border border-purple-200 shadow-xl hover:shadow-2xl hover:border-purple-300 transition-all">
                <Sunrise className="w-10 h-10 text-blue-400 mb-6" />
                <h3 className="text-2xl mb-4 font-caveat text-[#5b21b6]">Quiet Strength</h3>
                <p className="text-[#1e3a5f]/80 font-medium leading-relaxed">
                  You don't need to be the loudest in the room to have the most impact. Your gentle firmness is your superpower.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Memories */}
        <section className="py-24">
          <ScrollReveal>
            <h2 className="font-caveat text-5xl mb-16 text-center text-[#7c3aed]">Memories I Treasure</h2>
          </ScrollReveal>
          
          <div className="space-y-12 max-w-3xl mx-auto">
            <ScrollReveal delay={0.1}>
              <div className="flex gap-6 items-start bg-white/50 p-6 rounded-2xl border border-white">
                <div className="mt-3 w-12 h-1 bg-purple-300 rounded-full shrink-0" />
                <p className="text-xl text-[#1e3a5f] font-caveat leading-relaxed">
                  Those late-night calls after your long shifts, where even through the exhaustion, you still made time to listen.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <div className="flex gap-6 items-start bg-white/50 p-6 rounded-2xl border border-white">
                <div className="mt-3 w-12 h-1 bg-pink-300 rounded-full shrink-0" />
                <p className="text-xl text-[#1e3a5f] font-caveat leading-relaxed">
                  The way your face lights up when you talk about the small wins at work. It's a reminder of why you do what you do.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Closing */}
        <ScrollReveal className="py-32 text-center">
          <div className="inline-block mb-12 bg-white p-4 rounded-full shadow-lg">
            <Shield size={32} className="text-purple-500" />
          </div>
          <p className="text-xl font-bold leading-relaxed text-[#1e3a5f] mb-16 max-w-2xl mx-auto">
            You are a protector, a healer, and a rock. The world is softer because you are in it. Never forget the profound difference you make, not just in hospitals, but in lives. Especially mine.
          </p>
          <div className="font-caveat text-4xl text-[#5b21b6] tracking-wide relative inline-block">
            <span className="relative z-10">With all my love</span>
            <motion.div 
              className="absolute bottom-1 left-0 right-0 h-3 bg-pink-300/40 -z-10 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>
        </ScrollReveal>
      </main>
    </motion.div>
  );
}
