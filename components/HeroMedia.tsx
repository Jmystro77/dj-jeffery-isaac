"use client";

import { useEffect, useRef, useState } from "react";
import { assetUrl, heroPromo } from "@/lib/site";

export function HeroMedia() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [canPlayMotion, setCanPlayMotion] = useState(false);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setCanPlayMotion(!motion.matches);
    sync();
    motion.addEventListener("change", sync);
    return () => motion.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!canPlayMotion || !video) {
      return;
    }
    video.muted = true;
    video.defaultMuted = true;
    const play = () => {
      void video.play().catch(() => {
        /* Autoplay can still be blocked; the poster still remains. */
      });
    };
    play();
    video.addEventListener("canplay", play);
    return () => video.removeEventListener("canplay", play);
  }, [canPlayMotion]);

  return (
    <div className="hero-media" aria-hidden="true">
      {canPlayMotion ? (
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={assetUrl(heroPromo.poster)}
          disablePictureInPicture
        >
          <source src={assetUrl(heroPromo.src)} type={heroPromo.type} />
        </video>
      ) : null}
    </div>
  );
}
