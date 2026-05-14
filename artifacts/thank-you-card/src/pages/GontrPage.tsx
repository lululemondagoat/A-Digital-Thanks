import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, TrendingUp, Target, Scale, Crown } from "lucide-react";
import { ParticleField } from "@/components/ParticleField";
import { ScrollReveal } from "@/components/ScrollReveal";

function GraphLines() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.06]">
      <svg
        className="w-full h-full"
        preserveAspectRatio="none"
        viewBox="0 0 1000 1000"
      >
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
            strokeWidth="3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 5 + i * 2,
              repeat: Infinity,
              ease: "linear",
            }}
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
      className="min-h-screen text-[#78350f] font-nunito selection:bg-[#d4af37]/30 relative"
      style={{
        background:
          "linear-gradient(135deg, #fefce8 0%, #f0fdf4 50%, #fffbeb 100%)",
      }}
    >
      <ParticleField color="rgba(212, 175, 55, 0.3)" density={30} speed={0.2} />
      <GraphLines />

      {/* Decorative background watermark */}
      <div className="absolute top-[20%] right-[5%] opacity-10 pointer-events-none">
        <svg
          width="200"
          height="200"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#14532d"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
        </svg>
      </div>

      <div className="fixed top-6 left-6 z-50">
        <Link
          href="/"
          className="text-[#92400e] hover:text-[#78350f] transition-colors flex items-center gap-2 group text-sm tracking-wider uppercase font-bold"
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Return
        </Link>
      </div>

      <main className="max-w-4xl mx-auto px-6 py-24 relative z-10">
        {/* Hero Section */}
        <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-8 relative">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#86efac] to-transparent rounded-full" />

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="mb-8 p-4 bg-white/50 rounded-full border-2 border-[#d4af37] shadow-lg"
          >
            <Crown size={40} className="text-[#d4af37] mx-auto" />
          </motion.div>

          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-cormorant text-6xl md:text-8xl mb-6 font-bold text-[#1a3a1a]"
          >
            For Gontr
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-[#92400e] tracking-[0.3em] uppercase text-sm font-bold bg-[#fef9e7] px-6 py-2 rounded-full border border-[#d4af37]/30 shadow-sm"
          >
            Discipline • Vision • Legacy
          </motion.p>

          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent rounded-full" />
        </section>

        {/* Message */}
        <ScrollReveal className="py-24 text-center max-w-2xl mx-auto">
          <p className="text-2xl md:text-4xl leading-relaxed font-cormorant italic text-[#14532d]">
            "You see the architecture of success where others only see the
            surface. Thank you for showing me what true discipline looks like,
            and for setting a standard that demands excellence."
          </p>
        </ScrollReveal>

        {/* Lessons */}
        <section className="py-24">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-16">
              <div className="flex-1 h-[2px] bg-gradient-to-r from-transparent to-[#86efac]" />
              <h2 className="font-cormorant text-3xl font-bold text-[#1a3a1a] uppercase tracking-wider">
                Lessons Learned
              </h2>
              <div className="flex-1 h-[2px] bg-gradient-to-l from-transparent to-[#86efac]" />
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Long-term Thinking",
                text: "You taught me to ignore the noise of the day and focus on the returns of consistent effort over years.",
              },
              {
                icon: Target,
                title: "Precision",
                text: "Details matter. How you do one thing is how you do everything. Your meticulous nature is something I deeply admire and continuously hope to emulate.",
              },
              {
                icon: Scale,
                title: "Value vs Price",
                text: "Knowing the difference between what something costs and what it's truly worth—in business and in life.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.2}>
                <div className="p-8 border-2 border-[#d4af37]/30 bg-[#fef9e7] rounded-2xl shadow-[0_10px_30px_rgba(212,175,55,0.1)] hover:shadow-[0_15px_40px_rgba(212,175,55,0.2)] transition-all hover:-translate-y-2 h-full group relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-2 bg-[#d4af37]/30 group-hover:bg-[#d4af37] transition-all duration-300" />
                  <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-6 shadow-sm border border-[#d4af37]/20">
                    <item.icon className="w-6 h-6 text-[#d4af37]" />
                  </div>
                  <h3 className="text-2xl mb-3 font-cormorant font-bold text-[#1a3a1a]">
                    {item.title}
                  </h3>
                  <p className="text-[#78350f]/80 font-medium text-base leading-relaxed">
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
            <h2 className="font-cormorant text-4xl font-bold mb-12 text-center text-[#1a3a1a]">
              What I Admire Most
            </h2>
          </ScrollReveal>

          <div className="space-y-6">
            {[
              "Your unwavering commitment to completing your goals.",
              "The quiet competence you bring into every room you enter.",
              "Your ability to build habits that last, protecting what matters.",
            ].map((text, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="flex items-center gap-6 p-6 border-2 border-white bg-white/60 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-4 h-4 rounded-full bg-[#d4af37] shrink-0 shadow-[0_0_10px_#d4af37]" />
                  <p className="text-[#14532d] font-bold tracking-wide text-lg">
                    {text}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Closing */}
        <ScrollReveal className="py-32 text-center border-t-2 border-[#86efac] mt-12">
          <p className="text-xl font-bold leading-relaxed text-[#78350f] mb-16 max-w-2xl mx-auto bg-white/50 p-8 rounded-2xl shadow-sm">
            You don't just achieve success; you embody it. Thank you for raising
            the bar for everyone around you, especially me. I am so proud to
            witness the empire you are building.
          </p>
          <div className="inline-block bg-[#1a3a1a] text-[#fefce8] px-12 py-8 rounded-3xl shadow-xl transform rotate-1">
            <span className="block text-sm text-[#d4af37] font-bold tracking-[0.2em] uppercase mb-4">
              With utmost respect
            </span>
            <span className="font-cormorant font-bold text-5xl tracking-widest text-[#fef9e7]">
              Thank You, Kemi
            </span>
          </div>
        </ScrollReveal>
      </main>
    </motion.div>
  );
}
