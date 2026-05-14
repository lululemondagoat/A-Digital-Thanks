import { useState } from "react";
import { useLocation, useParams } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Heart } from "lucide-react";
import { useAppContext } from "@/context/AppContext";

const PASSWORDS: Record<string, string> = {
  chrys: "18/12",
  gontr: "28/03",
  drico: "14/04",
  ursin: "09/11",
  kemi: "15/04",
};

const NAMES: Record<string, string> = {
  chrys: "Chrys",
  gontr: "Gontr",
  drico: "Drico",
  ursin: "Ursin",
  kemi: "Kemi",
};

export default function UnlockPage() {
  const { person } = useParams();
  const [, setLocation] = useLocation();
  const { unlockPage } = useAppContext();

  const [password, setPassword] = useState("");
  const [attempts, setAttempts] = useState(3);
  const [isShaking, setIsShaking] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const targetPerson = person as keyof typeof PASSWORDS;
  const name = NAMES[targetPerson];

  if (!targetPerson || !PASSWORDS[targetPerson]) {
    setLocation("/");
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (attempts <= 0 || isSuccess) return;

    if (password === PASSWORDS[targetPerson]) {
      setIsSuccess(true);
      setTimeout(() => {
        unlockPage(targetPerson);
        setLocation(`/${targetPerson}`);
      }, 1500);
    } else {
      setIsShaking(true);
      setAttempts((prev) => prev - 1);
      setTimeout(() => setIsShaking(false), 500);
      
      if (attempts - 1 <= 0) {
        setTimeout(() => setLocation("/"), 3000);
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#111] pointer-events-none" />
      
      <AnimatePresence>
        {isSuccess && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 bg-white flex items-center justify-center"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-black font-serif text-4xl tracking-widest"
            >
              Unlocked.
            </motion.h2>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="z-10 w-full max-w-md flex flex-col items-center text-center">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="mb-8 p-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
        >
          <Lock className="w-8 h-8 text-gray-300" />
        </motion.div>

        <h1 className="font-serif text-3xl mb-4 tracking-wide text-gray-100">
          For {name}
        </h1>
        
        {attempts > 0 ? (
          <>
            <p className="text-gray-400 mb-2 font-light">
              This message was made especially for you.
            </p>
            <p className="text-gray-500 text-sm mb-12 font-light">
              Enter your special date to unlock it.
            </p>

            <motion.form
              onSubmit={handleSubmit}
              animate={isShaking ? { x: [-10, 10, -10, 10, 0] } : {}}
              transition={{ duration: 0.4 }}
              className="w-full flex flex-col items-center gap-6"
            >
              <div className="relative w-full max-w-[200px]">
                <input
                  type="text"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="DD/MM"
                  className="w-full bg-white/5 border border-white/20 rounded-xl px-6 py-4 text-center text-xl tracking-widest text-white placeholder-gray-600 focus:outline-none focus:border-white/50 focus:ring-1 focus:ring-white/50 transition-all backdrop-blur-md"
                  data-testid="input-password"
                  autoFocus
                />
              </div>

              <button
                type="submit"
                className="text-sm tracking-widest uppercase text-gray-400 hover:text-white transition-colors py-2 border-b border-transparent hover:border-white/30"
                data-testid="button-unlock"
              >
                Unlock
              </button>
            </motion.form>

            <div className="flex gap-2 mt-12">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={false}
                  animate={{ 
                    scale: i < attempts ? 1 : 0,
                    opacity: i < attempts ? 1 : 0
                  }}
                >
                  <Heart 
                    size={16} 
                    className={i < attempts ? "fill-white/20 text-white/40" : "text-transparent"} 
                  />
                </motion.div>
              ))}
            </div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gray-400 mt-8"
          >
            <p className="text-xl font-serif tracking-widest mb-4">Oops…</p>
            <p className="font-light">sorry, wrong page.</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
