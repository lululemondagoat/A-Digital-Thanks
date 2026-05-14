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
    <div ref={containerRef} className="min-h-screen bg-[#02040a] text-white font-sans selection:bg-purple-500/30 overflow-hidden relative">
      <ParticleField color="rgba(255, 255, 255, 0.6)" density={100} speed={0.1} />
      
      {/* Parallax Background */}
      <motion.div 
        style={{ y: yBackground }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-[20%] left-[10%] w-[40rem] h-[40rem] bg-purple-900/20 rounded-full blur-[120px]" />
        <div className="absolute top-[60%] right-[10%] w-[30rem] h-[30rem] bg-cyan-900/20 rounded-full blur-[100px]" />
      </motion.div>

      <motion.div 
        style={{ opacity: opacityNebula }}
        className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent"
      />

      <div className="fixed top-6 left-6 z-50">
        <Link href="/" className="text-cyan-400/70 hover:text-cyan-300 transition-colors flex items-center gap-2 group text-sm tracking-wider uppercase font-mono">
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
            <Orbit size={100} className="text-cyan-500/20 absolute -inset-2 animate-spin-slow" />
            <Rocket size={48} className="text-white relative z-10" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 2, delay: 0.5 }}
            className="font-sans font-black text-6xl md:text-8xl tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-purple-400"
          >
            URSIN
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="font-mono text-cyan-400/60 tracking-[0.5em] text-xs uppercase border border-cyan-500/20 py-2 px-6 rounded-full bg-cyan-950/20 backdrop-blur-md"
          >
            Status: Exploration Bound
          </motion.div>
        </section>

        {/* Message */}
        <ScrollReveal className="py-24 text-center max-w-2xl mx-auto">
          <p className="text-xl md:text-2xl leading-relaxed font-light text-gray-300 font-serif italic">
            "While others look down at their feet, you look up at the stars. Thank you for expanding my horizon and showing me the beauty of curiosity."
          </p>
        </ScrollReveal>

        {/* Logs */}
        <section className="py-24">
          <ScrollReveal>
            <h2 className="font-mono text-xl tracking-[0.3em] mb-12 text-cyan-400 border-b border-cyan-900/50 pb-4">
              // MISSION_LOGS
            </h2>
          </ScrollReveal>
          
          <div className="space-y-12">
            {[
              { icon: Telescope, title: "Deep Intellect", text: "I am constantly in awe of how your mind works. You don't just accept surface-level answers; you dig until you find the truth." },
              { icon: Sparkles, title: "Infinite Wonder", text: "Your passion for the unknown is contagious. You remind me that the universe is vast, and our possibilities within it are limitless." }
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.2}>
                <div className="flex gap-6 items-start group">
                  <div className="p-4 rounded-full bg-purple-900/20 border border-purple-500/30 group-hover:bg-purple-800/30 transition-colors shrink-0">
                    <item.icon className="w-6 h-6 text-purple-300" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 font-mono text-gray-100">{item.title}</h3>
                    <p className="text-gray-400 font-light leading-relaxed">
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
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/20 to-transparent pointer-events-none" />
          <ScrollReveal className="text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
              To Infinity
            </h2>
            <p className="text-xl text-cyan-100/70 max-w-2xl mx-auto leading-relaxed font-light">
              Your potential is as boundless as the cosmos you admire. I can't wait to see what discoveries you make, what boundaries you push, and what worlds you build.
            </p>
          </ScrollReveal>
        </section>

        {/* Closing */}
        <ScrollReveal className="py-24 text-center">
          <div className="font-mono text-sm text-gray-500 tracking-[0.4em] mb-4">END_TRANSMISSION</div>
          <div className="w-1 h-12 bg-gradient-to-b from-cyan-500 to-transparent mx-auto mb-8" />
          <p className="font-serif text-2xl text-white tracking-wide italic">Thank you for being in my orbit.</p>
        </ScrollReveal>
      </main>
    </div>
  );
}
