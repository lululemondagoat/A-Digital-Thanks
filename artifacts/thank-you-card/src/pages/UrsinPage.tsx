import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Rocket, Orbit, Telescope, Sparkles } from "lucide-react";
import { ParticleField } from "@/components/ParticleField";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useRef } from "react";

export default function UrsinPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityNebula = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.6, 0.1]);

  return (
    <div ref={containerRef} className="min-h-screen text-white font-sans selection:bg-cyan-500/50 overflow-hidden relative"
         style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 30%, #1e3a8a 70%, #0c4a6e 100%)' }}>
      <ParticleField color="rgba(255, 255, 255, 0.8)" density={100} speed={0.1} />
      
      {/* Decorative Constellations */}
      <div className="absolute top-[10%] left-[20%] text-white text-xs opacity-50 font-mono pointer-events-none">✦ - - - ✦</div>
      <div className="absolute top-[30%] right-[15%] text-white text-xs opacity-50 font-mono pointer-events-none">★ - ✦ - - - ★</div>
      <div className="absolute bottom-[20%] left-[10%] text-white text-xs opacity-50 font-mono pointer-events-none">✦ - - ★ - ✦</div>
      
      {/* Parallax Background */}
      <motion.div 
        style={{ y: yBackground }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-[20%] left-[10%] w-[40rem] h-[40rem] bg-purple-600/30 rounded-full blur-[120px]" />
        <div className="absolute top-[60%] right-[10%] w-[30rem] h-[30rem] bg-cyan-500/30 rounded-full blur-[100px]" />
      </motion.div>

      <motion.div 
        style={{ opacity: opacityNebula }}
        className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"
      />

      <div className="fixed top-6 left-6 z-50">
        <Link href="/" className="text-cyan-300/70 hover:text-cyan-300 transition-colors flex items-center gap-2 group text-sm tracking-wider uppercase font-mono font-bold">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Abort Sequence
        </Link>
      </div>

      <main className="max-w-4xl mx-auto px-6 py-24 relative z-10">
        {/* Hero Section */}
        <section className="min-h-[80vh] flex flex-col justify-center items-center text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="mb-12 relative"
          >
            {/* Orbital Rings */}
            <svg className="absolute -inset-8 w-32 h-32 animate-spin-slow pointer-events-none" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="48" fill="none" stroke="#22d3ee" strokeWidth="1" strokeDasharray="10 5" className="opacity-50" />
            </svg>
            <svg className="absolute -inset-12 w-40 h-40 animate-reverse-spin pointer-events-none" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="48" fill="none" stroke="#c084fc" strokeWidth="1" strokeDasharray="20 10" className="opacity-40" />
            </svg>
            <Orbit size={100} className="text-cyan-300/40 absolute -inset-2 animate-spin-slow" />
            <Rocket size={48} className="text-white relative z-10 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 2, delay: 0.5 }}
            className="font-orbitron font-bold text-6xl md:text-8xl tracking-widest mb-6 text-[#22d3ee] drop-shadow-[0_0_20px_rgba(34,211,238,0.5)]"
          >
            URSIN
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="font-mono text-cyan-300 tracking-[0.5em] text-xs uppercase border border-cyan-400/40 py-2 px-6 rounded-full bg-cyan-900/40 backdrop-blur-md shadow-[0_0_15px_rgba(34,211,238,0.2)]"
          >
            Status: Exploration Bound
          </motion.div>
        </section>

        {/* Message */}
        <ScrollReveal className="py-24 text-center max-w-2xl mx-auto">
          <div className="p-8 rounded-3xl bg-indigo-950/40 border border-indigo-400/30 backdrop-blur-md">
            <p className="text-2xl md:text-3xl leading-relaxed font-bold text-white font-orbitron">
              "While others look down at their feet, you look up at the stars. Thank you for expanding my horizon and showing me the beauty of curiosity."
            </p>
          </div>
        </ScrollReveal>

        {/* Logs */}
        <section className="py-24">
          <ScrollReveal>
            <h2 className="font-mono text-xl tracking-[0.3em] mb-12 text-[#22d3ee] border-b-2 border-cyan-500/50 pb-4 flex items-center gap-4">
              <span className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
              // MISSION_LOGS
            </h2>
          </ScrollReveal>
          
          <div className="space-y-12">
            {[
              { icon: Telescope, title: "Deep Intellect", text: "I am constantly in awe of how your mind works. You don't just accept surface-level answers; you dig until you find the truth." },
              { icon: Sparkles, title: "Infinite Wonder", text: "Your passion for the unknown is contagious. You remind me that the universe is vast, and our possibilities within it are limitless." }
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.2}>
                <div className="flex gap-6 items-start group bg-white/5 border border-cyan-500/20 p-8 rounded-3xl hover:bg-white/10 transition-all hover:border-cyan-400/50">
                  <div className="p-4 rounded-xl bg-cyan-900/40 border border-cyan-400/50 group-hover:bg-cyan-800/60 transition-colors shrink-0 shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                    <item.icon className="w-8 h-8 text-[#22d3ee]" />
                  </div>
                  <div>
                    <h3 className="text-2xl mb-3 font-orbitron font-bold text-white tracking-wider">{item.title}</h3>
                    <p className="text-cyan-100/80 font-medium leading-relaxed text-lg">
                      {item.text}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Future */}
        <section className="py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/30 to-transparent pointer-events-none rounded-3xl" />
          <ScrollReveal className="text-center relative z-10 p-12 border border-purple-500/30 rounded-3xl bg-black/20 backdrop-blur-sm">
            <h2 className="text-4xl md:text-6xl font-orbitron font-bold tracking-widest mb-8 text-[#c084fc] drop-shadow-[0_0_15px_rgba(192,132,252,0.5)]">
              To Infinity
            </h2>
            <p className="text-xl text-white font-medium max-w-2xl mx-auto leading-relaxed">
              Your potential is as boundless as the cosmos you admire. I can't wait to see what discoveries you make, what boundaries you push, and what worlds you build.
            </p>
          </ScrollReveal>
        </section>

        {/* Closing */}
        <ScrollReveal className="py-24 text-center">
          <div className="font-mono text-sm text-cyan-400/80 tracking-[0.4em] mb-4">END_TRANSMISSION</div>
          <div className="w-2 h-16 bg-gradient-to-b from-[#22d3ee] to-transparent mx-auto mb-8 rounded-full" />
          <p className="font-orbitron font-bold text-3xl text-white tracking-widest">Thank you for being in my orbit.</p>
        </ScrollReveal>
      </main>
    </div>
  );
}
