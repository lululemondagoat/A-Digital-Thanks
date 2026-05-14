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
      className="min-h-screen bg-gradient-to-br from-[#fff9f0] to-[#fce7f3] text-[#5c3d2e] flex flex-col items-center justify-center p-4 relative overflow-hidden"
    >
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[radial-gradient(circle,_#fdf2f8_0%,_transparent_70%)] pointer-events-none opacity-60" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[radial-gradient(circle,_#fef3c7_0%,_transparent_70%)] pointer-events-none opacity-60" />
      
      <AnimatePresence>
        {isSuccess && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 bg-gradient-to-r from-[#fce7f3] to-[#dbeafe] flex items-center justify-center"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-[#e8426a] font-comic font-bold text-5xl tracking-wide"
            >
              Unlocked!
            </motion.h2>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="z-10 w-full max-w-md flex flex-col items-center text-center">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="mb-8 p-5 rounded-full bg-pink-100 border border-pink-300 shadow-sm"
        >
          <Lock className="w-8 h-8 text-pink-500" />
        </motion.div>

        <h1 className="font-comic font-bold text-4xl mb-4 text-[#e8426a]">
          For {name}
        </h1>
        
        {attempts > 0 ? (
          <>
            <p className="font-nunito font-semibold text-[#8b5a2b] mb-2">
              This message was made especially for you.
            </p>
            <p className="font-nunito text-[#a17a5c] text-sm mb-12">
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
                  className="w-full bg-white border-2 border-pink-200 rounded-2xl px-6 py-4 text-center text-xl font-nunito font-bold text-[#5c3d2e] placeholder-pink-300 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all shadow-sm"
                  data-testid="input-password"
                  autoFocus
                />
              </div>

              <button
                type="submit"
                className="font-nunito font-bold text-sm uppercase text-pink-500 hover:text-pink-600 transition-colors py-2 border-b-2 border-transparent hover:border-pink-400"
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
                    size={20} 
                    className={i < attempts ? "fill-pink-500 text-pink-500" : "text-transparent"} 
                  />
                </motion.div>
              ))}
            </div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#8b5a2b] mt-8"
          >
            <p className="text-3xl font-comic font-bold mb-4 text-[#e8426a]">Oops…</p>
            <p className="font-nunito font-semibold">sorry, wrong page.</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
