"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export const PinContainer = ({
  children,
  title,
  href,
}: {
  children: React.ReactNode;
  title?: string;
  href?: string;
}) => {
  const [transform, setTransform] = useState("");

  const onMouseEnter = () => {
    setTransform("scale(1.05)");
  };

  const onMouseLeave = () => {
    setTransform("scale(1)");
  };

  return (
    <div
      className="h-[20rem] w-full flex items-center justify-center"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        className="relative h-full w-full"
        style={{
          transformStyle: "preserve-3d",
          transform: transform,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            transform: "translateZ(-75px)",
            transformStyle: "preserve-3d",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 to-blue-500/20 rounded-3xl" />
        </div>
        <div
          className="absolute inset-0"
          style={{
            transform: "translateZ(75px)",
            transformStyle: "preserve-3d",
          }}
        >
          {children}
        </div>
        <div
          className="absolute inset-0"
          style={{
            transform: "translateZ(150px)",
            transformStyle: "preserve-3d",
          }}
        >
          {title && (
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
              {href && (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
                >
                  Voir le projet
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}; 