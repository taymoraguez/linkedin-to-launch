import { useEffect, useState } from "react";

interface FloatingElement {
  id: number;
  type: "code" | "node" | "binary" | "bracket";
  content: string;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

const codeSnippets = [
  "const ai = new AI()",
  "async function()",
  "{ data: true }",
  "return solution",
  "await deploy()",
  "import { Cloud }",
  "export default",
  "interface Props",
  "type Solution",
  "=> success",
  ".map(transform)",
  "setState(next)",
  "useEffect(() =>",
  "fetch('/api')",
  "JSON.parse()",
];

const brackets = ["{ }", "< />", "[ ]", "( )", "=> {}", "/* */"];
const binary = ["01001", "11010", "00111", "10101", "01110", "11001"];

const generateElements = (count: number): FloatingElement[] => {
  const elements: FloatingElement[] = [];
  
  for (let i = 0; i < count; i++) {
    const typeRand = Math.random();
    let type: FloatingElement["type"];
    let content: string;
    
    if (typeRand < 0.4) {
      type = "code";
      content = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
    } else if (typeRand < 0.6) {
      type = "bracket";
      content = brackets[Math.floor(Math.random() * brackets.length)];
    } else if (typeRand < 0.8) {
      type = "binary";
      content = binary[Math.floor(Math.random() * binary.length)];
    } else {
      type = "node";
      content = "●";
    }
    
    elements.push({
      id: i,
      type,
      content,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: type === "node" ? 4 + Math.random() * 8 : 10 + Math.random() * 4,
      duration: 20 + Math.random() * 40,
      delay: Math.random() * -20,
      opacity: 0.03 + Math.random() * 0.08,
    });
  }
  
  return elements;
};

const AnimatedBackground = () => {
  const [elements, setElements] = useState<FloatingElement[]>([]);
  
  useEffect(() => {
    setElements(generateElements(35));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Gradient overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(ellipse at 20% 20%, hsl(217 91% 60% / 0.15), transparent 50%), radial-gradient(ellipse at 80% 80%, hsl(263 70% 50% / 0.1), transparent 50%)',
        }}
      />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      
      {/* Floating elements */}
      {elements.map((el) => (
        <div
          key={el.id}
          className="absolute font-mono whitespace-nowrap select-none"
          style={{
            left: `${el.x}%`,
            top: `${el.y}%`,
            fontSize: `${el.size}px`,
            opacity: el.opacity,
            color: el.type === "node" 
              ? 'hsl(var(--primary))' 
              : el.type === "binary" 
                ? 'hsl(var(--accent))' 
                : 'hsl(var(--foreground))',
            animation: `float-drift ${el.duration}s ease-in-out infinite`,
            animationDelay: `${el.delay}s`,
          }}
        >
          {el.content}
        </div>
      ))}
      
      {/* Connecting lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(217 91% 60%)" />
            <stop offset="100%" stopColor="hsl(263 70% 50%)" />
          </linearGradient>
        </defs>
        {[...Array(8)].map((_, i) => (
          <line
            key={i}
            x1={`${10 + i * 12}%`}
            y1={`${20 + (i % 3) * 25}%`}
            x2={`${30 + i * 8}%`}
            y2={`${40 + (i % 4) * 15}%`}
            stroke="url(#line-gradient)"
            strokeWidth="1"
            className="animate-pulse"
            style={{ animationDelay: `${i * 0.5}s` }}
          />
        ))}
      </svg>
    </div>
  );
};

export default AnimatedBackground;
