import { motion } from "framer-motion";
import { Link } from "wouter";
import { useAppContext } from "@/context/AppContext";
import { ParticleField } from "@/components/ParticleField";
import { Heart, Briefcase, Trophy, Rocket, Crown, Users } from "lucide-react";

const cards = [
  {
    id: "chrys",
    name: "Chrys",
    color: "rgba(167, 199, 231, 0.8)",
    icon: Heart,
    shadow: "shadow-[0_0_30px_rgba(167,199,231,0.2)]",
    hoverShadow: "hover:shadow-[0_0_50px_rgba(167,199,231,0.4)]",
  },
  {
    id: "gontr",
    name: "Gontr",
    color: "rgba(212, 175, 55, 0.8)",
    icon: Briefcase,
    shadow: "shadow-[0_0_30px_rgba(212,175,55,0.2)]",
    hoverShadow: "hover:shadow-[0_0_50px_rgba(212,175,55,0.4)]",
  },
  {
    id: "drico",
    name: "Drico",
    color: "rgba(0, 255, 136, 0.8)",
    icon: Trophy,
    shadow: "shadow-[0_0_30px_rgba(0,255,136,0.2)]",
    hoverShadow: "hover:shadow-[0_0_50px_rgba(0,255,136,0.4)]",
  },
  {
    id: "ursin",
    name: "Ursin",
    color: "rgba(6, 182, 212, 0.8)",
    icon: Rocket,
    shadow: "shadow-[0_0_30px_rgba(6,182,212,0.2)]",
    hoverShadow: "hover:shadow-[0_0_50px_rgba(6,182,212,0.4)]",
  },
  {
    id: "kemi",
    name: "Kemi",
    color: "rgba(212, 175, 55, 0.8)",
    icon: Crown,
    shadow: "shadow-[0_0_30px_rgba(212,175,55,0.2)]",
    hoverShadow: "hover:shadow-[0_0_50px_rgba(212,175,55,0.4)]",
  },
];

export default function Home() {
  const { isAllUnlocked, unlockedPages } = useAppContext();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#050505] text-white overflow-hidden relative flex flex-col items-center justify-center p-4 md:p-8"
    >
      <ParticleField density={70} speed={0.5} />
      
      <div className="z-10 w-full max-w-5xl flex flex-col items-center text-center">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-widest font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500"
        >
          Thank You
        </motion.h1>
        
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-gray-400 text-lg md:text-xl font-light tracking-wide max-w-2xl mb-16"
        >
          A small collection of appreciation for the people who shaped my life.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
        >
          {cards.map((card, index) => {
            const isUnlocked = unlockedPages.includes(card.id);
            return (
              <Link key={card.id} href={isUnlocked ? `/${card.id}` : `/unlock/${card.id}`}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className={`bg-[#0a0a0a] border border-white/5 rounded-2xl p-8 flex flex-col items-center justify-center gap-4 cursor-pointer transition-all duration-500 ${card.shadow} ${card.hoverShadow} relative overflow-hidden group`}
                  data-testid={`card-${card.id}`}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-t from-transparent to-white transition-opacity duration-500" />
                  <card.icon
                    size={32}
                    color={card.color}
                    className="opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <h3 className="font-serif text-2xl tracking-widest text-gray-200 group-hover:text-white transition-colors duration-300">
                    {card.name}
                  </h3>
                </motion.div>
              </Link>
            );
          })}

          {/* Family Card */}
          <Link href={isAllUnlocked ? "/family" : "#"}>
            <motion.div
              whileHover={isAllUnlocked ? { scale: 1.05, y: -5 } : {}}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
              className={`bg-[#0a0a0a] border border-white/5 rounded-2xl p-8 flex flex-col items-center justify-center gap-4 transition-all duration-500 relative overflow-hidden group ${
                isAllUnlocked
                  ? "cursor-pointer shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_50px_rgba(255,255,255,0.3)]"
                  : "opacity-30 cursor-not-allowed"
              }`}
              data-testid="card-family"
            >
              <Users
                size={32}
                className={isAllUnlocked ? "text-white" : "text-gray-600"}
              />
              <h3 className="font-serif text-2xl tracking-widest text-gray-200 group-hover:text-white transition-colors duration-300">
                {isAllUnlocked ? "Family" : "???"}
              </h3>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
