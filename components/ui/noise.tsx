export const Noise = () => {
  return (
    <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-20 mix-blend-color-burn z-10" aria-hidden="true">
      <filter id="noiseFilter">
        <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
      </filter>
      <rect width="100%" height="100%" filter="url(#noiseFilter)" />
    </svg>
  );
};
