"use client";
import React, { useRef, useEffect } from "react";

export default function Layout({ children }) {
  const audioRef = useRef(null);
  useEffect(() => {
    const enableAudio = () => {
      if (audioRef.current) {
        audioRef.current.play().catch((error) => {
          console.error("Autoplay blocked:", error);
        });
      }
      document.removeEventListener("click", enableAudio);
      document.removeEventListener("scroll", enableAudio);
    };

    document.addEventListener("click", enableAudio);
    document.addEventListener("scroll", enableAudio);

    return () => {
      document.removeEventListener("click", enableAudio);
      document.removeEventListener("scroll", enableAudio);
    };
  }, []);
  return (
    <main>
      {" "}
      <audio ref={audioRef} loop>
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>
      {children}
    </main>
  );
}
