'use client'
import { useEffect, useState } from 'react';

const NeonCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e:any) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="absolute w-5 h-5 bg-neonBlue rounded-full pointer-events-none"
      style={{
        left: cursorPosition.x - 1, // Offset para centralizar o cursor
        top: cursorPosition.y - 1, // Offset para centralizar o cursor
        boxShadow: `0 0 14px 15px rgba(0, 191, 255, 0.7)`,
      }}
    ></div>
  );
};

export default NeonCursor;
