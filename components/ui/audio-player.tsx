"use client";

import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

export function AudioPlayer() {
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Attempt to autoplay on mount
    if (audioRef.current) {
      audioRef.current.play().catch((err) => {
        // Autoplay might be blocked by browser until user interaction
        console.log("Audio autoplay was prevented:", err);
      });
    }
  }, []);

  const toggleMute = () => {
    if (audioRef.current) {
      const newMutedState = !isMuted;
      audioRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/piano-audio.mp3" loop />
      <button
        onClick={toggleMute}
        className="fixed bottom-6 left-6 z-[100] w-12 h-12 bg-[#08111D]/80 backdrop-blur-md rounded-full flex items-center justify-center border border-[#A88B5C]/40 shadow-lg text-[#F8F5EE] hover:scale-110 hover:bg-[#A88B5C]/20 transition-all duration-300"
        aria-label={isMuted ? "Unmute audio" : "Mute audio"}
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>
    </>
  );
}
