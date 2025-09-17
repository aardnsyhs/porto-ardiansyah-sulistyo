import { useState, useEffect } from 'react';

interface TypingEffectProps {
  texts: string[];
  speed?: number;
  deleteSpeed?: number;
  delayBetween?: number;
  className?: string;
}

const TypingEffect = ({ 
  texts, 
  speed = 100, 
  deleteSpeed = 50, 
  delayBetween = 2000, 
  className = "" 
}: TypingEffectProps) => {
  const [displayText, setDisplayText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    
    if (isWaiting) {
      const timeout = setTimeout(() => {
        setIsWaiting(false);
        setIsDeleting(true);
      }, delayBetween);
      return () => clearTimeout(timeout);
    }

    if (!isDeleting && currentIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + currentText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }

    if (!isDeleting && currentIndex === currentText.length) {
      setIsWaiting(true);
      return;
    }

    if (isDeleting && displayText.length > 0) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev.slice(0, -1));
      }, deleteSpeed);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setCurrentIndex(0);
      setCurrentTextIndex(prev => (prev + 1) % texts.length);
    }
  }, [currentIndex, currentTextIndex, isDeleting, isWaiting, displayText, texts, speed, deleteSpeed, delayBetween]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse ml-0.5">|</span>
    </span>
  );
};

export default TypingEffect;