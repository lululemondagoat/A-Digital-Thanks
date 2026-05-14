import { motion } from "framer-motion";
import { Link } from "wouter";
import { useAppContext } from "@/context/AppContext";
import { ParticleField } from "@/components/ParticleField";
import { Heart, Briefcase, Trophy, Rocket, Crown, Users } from "lucide-react";

const cards = [
  {
    id: "chrys",
    name: "Chrys",
    color: "#7dc8f0",
    icon: Heart,
    bg: "bg-gradient-to-br from-[#e8f4fd] to-[#f0e6ff]",
    border: "border-l-4 border-[#7dc8f0]",
    shadow: "shadow-[0_4px_20px_rgba(125,200,240,0.1)]",
    hoverShadow: "hover:shadow-[0_10px_30px_rgba(125,200,240,0.3)] hover:border-[#7dc8f0]",
    rotate: "-rotate-2"
  },
  {
    id: "gontr",
    name: "Gontr",
    color: "#c9a227",
    icon: Briefcase,
    bg: "bg-gradient-to-br from-[#fefae6] to-[#f0eed6]",
    border: "border-l-4 border-[#c9a227]",
    shadow: "shadow-[0_4px_20px_rgba(201,162,39,0.1)]",
    hoverShadow: "hover:shadow-[0_10px_30px_rgba(201,162,39,0.3)] hover:border-[#c9a227]",
    rotate: "rotate-2"
  },
  {
    id: "drico",
    name: "Drico",
    color: "#22c55e",
    icon: Trophy,
    bg: "bg-gradient-to-br from-[#e8fff4] to-[#e8f7ff]",
    border: "border-l-4 border-[#22c55e]",
    shadow: "shadow-[0_4px_20px_rgba(34,197,94,0.1)]",
    hoverShadow: "hover:shadow-[0_10px_30px_rgba(34,197,94,0.3)] hover:border-[#22c55e]",
    rotate: "-rotate-1"
  },
  {
    id: "ursin",
    name: "Ursin",
    color: "#8b5cf6",
    icon: Rocket,
    bg: "bg-gradient-to-br from-[#ede8ff] to-[#e0f0ff]",
    border: "border-l-4 border-[#8b5cf6]",
    shadow: "shadow-[0_4px_20px_rgba(139,92,246,0.1)]",
    hoverShadow: "hover:shadow-[0_10px_30px_rgba(139,92,246,0.3)] hover:border-[#8b5cf6]",
    rotate: "rotate-1"
  },
  {
    id: "kemi",
    name: "Kemi",
    color: "#d4af37",
    icon: Crown,
    bg: "bg-gradient-to-br from-[#fefae6] to-[#fff7e8]",
    border: "border-l-4 border-[#d4af37]",
    shadow: "shadow-[0_4px_20px_rgba(212,175,55,0.1)]",
    hoverShadow: "hover:shadow-[0_10px_30px_rgba(212,175,55,0.3)] hover:border-[#d4af37]",
    rotate: "rotate-3"
  },
];

export default function Home() {
  const { isAllUnlocked, unlockedPages } = useAppContext();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen text-[#3d2b1f] overflow-hidden relative flex flex-col items-center justify-center p-4 md:p-8"
      style={{ background: 'linear-gradient(135deg, #fff9f0 0%, #fef3e8 30%, #f9e8ff 60%, #e8f4ff 100%)' }}
    >
      <ParticleField color="rgba(232, 66, 106, 0.4)" density={40} speed={0.8} />
      {/* Decorative Doodles */}
      <div className="absolute top-20 left-[10%] text-[#e8426a] opacity-30 text-4xl transform -rotate-12 select-none pointer-events-none">★</div>
      <div className="absolute top-40 right-[15%] text-[#7dc8f0] opacity-40 text-5xl transform rotate-12 select-none pointer-events-none">♥</div>
      <div className="absolute bottom-20 left-[20%] text-[#22c55e] opacity-30 text-3xl transform rotate-45 select-none pointer-events-none">✦</div>
      <div className="absolute bottom-40 right-[10%] text-[#8b5cf6] opacity-40 text-4xl transform -rotate-12 select-none pointer-events-none">✿</div>
      <div className="z-10 w-full max-w-5xl flex flex-col items-center text-center">
        <div className="relative">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-comic text-5xl md:text-7xl lg:text-8xl tracking-wider font-bold mb-6 text-[#e8426a] drop-shadow-sm"
          >
            Thank You
          </motion.h1>
          <div className="absolute -top-4 -right-8 text-[#f59e0b] opacity-60 text-2xl animate-pulse">✦</div>
          <div className="absolute -bottom-2 -left-6 text-[#e8426a] opacity-50 text-xl animate-bounce">♥</div>
        </div>
        
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-nunito text-[#8b5a2b] text-lg md:text-xl font-semibold tracking-wide max-w-2xl mb-16 px-4"
        >A small collection of appreciation for the people who continue to shape my life.</motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-4"
        >
          {cards.map((card, index) => {
            const isUnlocked = unlockedPages.includes(card.id);
            return (
              <Link key={card.id} href={isUnlocked ? `/${card.id}` : `/unlock/${card.id}`} className="block outline-none">
                <motion.div
                  whileHover={{ scale: 1.05, y: -5, rotate: 0 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className={`${card.bg} ${card.border} rounded-3xl p-8 flex flex-col items-center justify-center gap-4 cursor-pointer transition-all duration-300 ${card.shadow} ${card.hoverShadow} relative overflow-hidden group ${card.rotate}`}
                  data-testid={`card-${card.id}`}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white transition-opacity duration-300 pointer-events-none" />
                  <card.icon
                    size={36}
                    color={card.color}
                    className="opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 drop-shadow-sm"
                  />
                  <h3 className="font-comic font-bold text-2xl tracking-wide" style={{ color: card.color }}>
                    {card.name}
                  </h3>
                </motion.div>
              </Link>
            );
          })}

          {/* Family Card */}
          <Link href={isAllUnlocked ? "/family" : "#"} className={isAllUnlocked ? "block outline-none" : "block outline-none cursor-default"}>
            <motion.div
              whileHover={isAllUnlocked ? { scale: 1.05, y: -5, rotate: 0 } : {}}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
              className={`rounded-3xl p-8 flex flex-col items-center justify-center gap-4 transition-all duration-300 relative overflow-hidden group rotate-1 ${
                isAllUnlocked
                  ? "bg-gradient-to-r from-[#fce7f3] via-[#dbeafe] to-[#fef9c3] cursor-pointer shadow-[0_4px_20px_rgba(236,72,153,0.2)] hover:shadow-[0_10px_30px_rgba(236,72,153,0.4)] border-l-4 border-[#ec4899]"
                  : "bg-gray-100 border border-gray-200 opacity-60 cursor-not-allowed shadow-none"
              }`}
              data-testid="card-family"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white transition-opacity duration-300 pointer-events-none" />
              <Users
                size={36}
                className={`${isAllUnlocked ? "text-[#ec4899] group-hover:scale-110 transition-transform" : "text-gray-400"} drop-shadow-sm`}
              />
              <h3 className={`font-comic font-bold text-2xl tracking-wide ${isAllUnlocked ? "text-[#ec4899]" : "text-gray-500"}`}>
                {isAllUnlocked ? "Family" : "???"}
              </h3>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
