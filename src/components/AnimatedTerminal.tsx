import { useState, useEffect } from 'react';

interface TerminalLine {
  type: 'command' | 'output' | 'success' | 'info';
  text: string;
  delay?: number;
}

const terminalSequence: TerminalLine[] = [
  { type: 'command', text: '$ analizar --conflicto "plataforma vs usuario"' },
  { type: 'output', text: 'Escaneando evidencia digital...' },
  { type: 'output', text: 'Identificando actores y sistemas involucrados...' },
  { type: 'success', text: '✓ Patrón de conducta detectado' },
  { type: 'info', text: '' },
  { type: 'command', text: '$ construir --estrategia legal' },
  { type: 'output', text: 'Mapeando jurisdicción aplicable...' },
  { type: 'output', text: 'Articulando argumentos técnico-jurídicos...' },
  { type: 'success', text: '✓ Estrategia operativa lista' },
  { type: 'info', text: '' },
  { type: 'command', text: '$ resolver --caso' },
  { type: 'success', text: '✓ Conflicto traducido a lenguaje jurídico claro' },
];

export default function AnimatedTerminal() {
  const [displayedLines, setDisplayedLines] = useState<TerminalLine[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  // Cursor blink effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  // Typing effect
  useEffect(() => {
    if (currentLineIndex >= terminalSequence.length) {
      // Restart after a pause
      const restartTimeout = setTimeout(() => {
        setDisplayedLines([]);
        setCurrentLineIndex(0);
        setCurrentCharIndex(0);
        setIsTyping(true);
      }, 4000);
      return () => clearTimeout(restartTimeout);
    }

    const currentLine = terminalSequence[currentLineIndex];
    
    if (currentLine.type === 'command') {
      // Type character by character for commands
      if (currentCharIndex < currentLine.text.length) {
        const typingSpeed = 40 + Math.random() * 30; // Variable speed for realism
        const timeout = setTimeout(() => {
          setCurrentCharIndex(prev => prev + 1);
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Command finished typing
        const timeout = setTimeout(() => {
          setDisplayedLines(prev => [...prev, currentLine]);
          setCurrentLineIndex(prev => prev + 1);
          setCurrentCharIndex(0);
        }, 300);
        return () => clearTimeout(timeout);
      }
    } else {
      // Output lines appear instantly with a delay
      const delay = currentLine.type === 'success' ? 600 : 400;
      const timeout = setTimeout(() => {
        setDisplayedLines(prev => [...prev, currentLine]);
        setCurrentLineIndex(prev => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentLineIndex, currentCharIndex]);

  const getLineClass = (type: string) => {
    switch (type) {
      case 'command':
        return 'text-accent font-semibold';
      case 'success':
        return 'text-green-400';
      case 'info':
        return 'text-primary-foreground/40';
      default:
        return 'text-primary-foreground/70';
    }
  };

  const currentCommand = currentLineIndex < terminalSequence.length && 
    terminalSequence[currentLineIndex].type === 'command' 
      ? terminalSequence[currentLineIndex].text.slice(0, currentCharIndex)
      : null;

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Terminal Window */}
      <div className="bg-navy-dark/90 backdrop-blur-sm rounded-xl border border-primary-foreground/10 overflow-hidden shadow-2xl">
        {/* Terminal Header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-navy-dark/80 border-b border-primary-foreground/10">
          <div className="flex gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <span className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <span className="ml-4 text-xs text-primary-foreground/40 font-mono">
            marco@rossi-legal ~ estrategia
          </span>
        </div>

        {/* Terminal Body */}
        <div className="p-4 md:p-6 font-mono text-sm md:text-base min-h-[280px] max-h-[320px] overflow-hidden">
          {/* Displayed lines */}
          {displayedLines.map((line, index) => (
            <div
              key={index}
              className={`${getLineClass(line.type)} ${line.type === 'info' ? 'h-4' : ''} animate-fade-in`}
            >
              {line.text}
            </div>
          ))}

          {/* Currently typing line */}
          {currentCommand !== null && (
            <div className="text-accent font-semibold">
              {currentCommand}
              <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
                ▋
              </span>
            </div>
          )}

          {/* Idle cursor */}
          {currentCommand === null && currentLineIndex < terminalSequence.length && (
            <div className="text-accent">
              <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
                ▋
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Glow effect */}
      <div className="absolute -inset-4 bg-accent/5 blur-3xl rounded-full -z-10" />
    </div>
  );
}
