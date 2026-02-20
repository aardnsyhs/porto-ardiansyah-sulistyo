import { useEffect, useState } from "react";
import { Sparkles, Heart } from "lucide-react";

interface EasterEggProps {
  children: React.ReactNode;
}

const secretCode = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "KeyB",
  "KeyA",
];

const EasterEgg = ({ children }: EasterEggProps) => {
  const [isTriggered, setIsTriggered] = useState(false);
  const [keySequence, setKeySequence] = useState<string[]>([]);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setKeySequence((prev) => {
        const newSequence = [...prev, e.code].slice(-secretCode.length);

        if (
          newSequence.length === secretCode.length &&
          newSequence.every((key, index) => key === secretCode[index])
        ) {
          setIsTriggered(true);
          setShowMessage(true);
          setTimeout(() => setShowMessage(false), 3000);
          return [];
        }

        return newSequence;
      });
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleLogoClick = (e: React.MouseEvent) => {
    if (e.detail === 5) {
      setIsTriggered(true);
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 3000);
    }
  };

  return (
    <>
      <div onClick={handleLogoClick} className="inline-block">
        {children}
      </div>

      {showMessage && (
        <>
          <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-ping"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: "2s",
                }}
              >
                <Sparkles className="w-4 h-4 text-primary" />
              </div>
            ))}
          </div>
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-card border border-primary rounded-lg p-6 shadow-xl animate-scale-in">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-primary animate-pulse" />
              </div>
              <h3 className="font-semibold text-lg">
                You found the secret! 🎉
              </h3>
              <p className="text-muted-foreground text-sm">
                Thanks for exploring my portfolio with such dedication!
                <br />
                <span className="text-primary">Keep being curious! ✨</span>
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default EasterEgg;
