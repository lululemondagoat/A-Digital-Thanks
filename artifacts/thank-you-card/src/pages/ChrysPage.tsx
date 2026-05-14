import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Heart, Stethoscope, Sunrise, Shield } from "lucide-react";
import { ParticleField } from "@/components/ParticleField";
import { ScrollReveal } from "@/components/ScrollReveal";

function HeartbeatLine() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      <svg
        className="w-full h-full"
        preserveAspectRatio="none"
        viewBox="0 0 1000 200"
      >
        <motion.path
          d="M0,100 L300,100 L320,100 L350,50 L380,150 L410,20 L440,180 L470,100 L500,100 L1000,100"
          fill="none"
          stroke="rgba(167, 199, 231, 0.8)"
          strokeWidth="2"
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
      className="min-h-screen bg-[#050b14] text-[#e2e8f0] font-sans selection:bg-blue-900/50"
    >
      <ParticleField color="rgba(167, 199, 231, 0.3)" density={40} speed={0.3} />
      <HeartbeatLine />
      
      <div className="fixed top-6 left-6 z-50">
        <Link href="/" className="text-blue-200/50 hover:text-blue-200 transition-colors flex items-center gap-2 group text-sm tracking-wider uppercase">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back
        </Link>
      </div>

      <main className="max-w-4xl mx-auto px-6 py-24 relative z-10">
        {/* Hero Section */}
        <section className="min-h-[80vh] flex flex-col justify-center items-center text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="w-24 h-24 rounded-full border border-blue-200/20 bg-blue-900/10 flex items-center justify-center shadow-[0_0_50px_rgba(167,199,231,0.15)] mx-auto">
              <Stethoscope size={40} className="text-blue-200/80" />
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-serif text-5xl md:text-7xl mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-blue-200"
          >
            For Chrys
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-blue-200/60 tracking-[0.3em] uppercase text-sm"
          >
            A steady hand. A healing presence.
          </motion.p>
        </section>

        {/* Message */}
        <ScrollReveal className="py-24 text-center max-w-2xl mx-auto">
          <p className="text-xl md:text-2xl leading-relaxed font-light text-blue-50/90">
            "Thank you for being the calm in the storm. For showing me what it means to care for others without losing yourself. Your dedication to your craft and the people around you is nothing short of beautiful."
          </p>
        </ScrollReveal>

        {/* Lessons */}
        <section className="py-24">
          <ScrollReveal>
            <h2 className="font-serif text-3xl mb-16 text-center text-blue-100">Things You've Taught Me</h2>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal delay={0.1}>
              <div className="p-8 rounded-2xl bg-blue-950/20 border border-blue-200/10 backdrop-blur-sm hover:border-blue-200/30 transition-colors">
                <Heart className="w-8 h-8 text-blue-300/80 mb-6" />
                <h3 className="text-xl mb-4 font-serif">Patience in Chaos</h3>
                <p className="text-blue-200/60 font-light leading-relaxed">
                  Watching you navigate high-pressure situations with such grace taught me that stillness is a choice, not just a circumstance.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.3}>
              <div className="p-8 rounded-2xl bg-blue-950/20 border border-blue-200/10 backdrop-blur-sm hover:border-blue-200/30 transition-colors">
                <Sunrise className="w-8 h-8 text-blue-300/80 mb-6" />
                <h3 className="text-xl mb-4 font-serif">Quiet Strength</h3>
                <p className="text-blue-200/60 font-light leading-relaxed">
                  You don't need to be the loudest in the room to have the most impact. Your gentle firmness is your superpower.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Memories */}
        <section className="py-24">
          <ScrollReveal>
            <h2 className="font-serif text-3xl mb-16 text-center text-blue-100">Memories I Treasure</h2>
          </ScrollReveal>
          
          <div className="space-y-12 max-w-3xl mx-auto">
            <ScrollReveal delay={0.1}>
              <div className="flex gap-6 items-start">
                <div className="mt-2 w-12 h-[1px] bg-blue-300/30 shrink-0" />
                <p className="text-lg text-blue-100/80 font-light leading-relaxed italic">
                  Those late-night calls after your long shifts, where even through the exhaustion, you still made time to listen.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <div className="flex gap-6 items-start">
                <div className="mt-2 w-12 h-[1px] bg-blue-300/30 shrink-0" />
                <p className="text-lg text-blue-100/80 font-light leading-relaxed italic">
                  The way your face lights up when you talk about the small wins at work. It's a reminder of why you do what you do.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Closing */}
        <ScrollReveal className="py-32 text-center">
          <div className="inline-block mb-12 text-blue-300/50">
            <Shield size={32} />
          </div>
          <p className="text-xl font-light leading-relaxed text-blue-50/90 mb-16 max-w-2xl mx-auto">
            You are a protector, a healer, and a rock. The world is softer because you are in it. Never forget the profound difference you make, not just in hospitals, but in lives. Especially mine.
          </p>
          <div className="font-serif text-2xl text-blue-200/80 tracking-widest relative inline-block">
            <span className="relative z-10">With all my love</span>
            <motion.div 
              className="absolute -bottom-2 left-0 right-0 h-[1px] bg-blue-400"
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
