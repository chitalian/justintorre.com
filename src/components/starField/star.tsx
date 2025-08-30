"use client";

import React, { useEffect, useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";

import clsx from "clsx";

interface StarProps {
  size: number;
  opacity: number;
  duration: number;
}

const Star: React.FC<StarProps & { top: number; left: number }> = ({ size, opacity, duration, top, left }) => {
  const [isMounted, setIsMounted] = useState(false);
  const nodeRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <CSSTransition
      in={isMounted}
      timeout={duration}
      classNames="star-animation"
      appear
      nodeRef={nodeRef}
    >
      <div
        ref={nodeRef}
        className={clsx(
          "w-1 h-1 absolute bg-white rounded-full z-0",
          `opacity-${opacity * 10}`
        )}
        style={{
          animationDuration: `${duration}s`,
          width: size,
          height: size,
          top: `${top}vh`,
          left: `${left}vw`,
        }}
      ></div>
    </CSSTransition>
  );
};

const StarBackground: React.FC = () => {
  const numStars = 150;
  const [stars, setStars] = useState<Array<{ size: number; opacity: number; duration: number; top: number; left: number }>>([]);

  useEffect(() => {
    // Generate stars only on client side to avoid hydration issues
    const generatedStars = Array.from({ length: numStars }).map(() => ({
      size: Math.random() * 3,
      opacity: Math.random(),
      duration: Math.random() * 3 + 2,
      top: Math.random() * 100,
      left: Math.random() * 100,
    }));
    setStars(generatedStars);
  }, []);

  return (
    <div className="w-screen h-screen fixed top-0 left-0 overflow-hidden -z-10">
      {stars.map((star, index) => (
        <Star
          key={index}
          size={star.size}
          opacity={star.opacity}
          duration={star.duration}
          top={star.top}
          left={star.left}
        />
      ))}
    </div>
  );
};

export default StarBackground;
