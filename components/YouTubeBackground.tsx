"use client";

type Props = {
  videoId: string; // тільки ID, наприклад "dQw4w9WgXcQ"
};

export function YouTubeBackground({ videoId }: Props) {
  // autoplay працює лише з muted=1
  const src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&modestbranding=1&rel=0&playsinline=1&iv_load_policy=3&disablekb=1`;

  return (
    <div className="bgWrap" aria-hidden="true">
      <iframe
        className="ytFrame"
        src={src}
        title="Seoul sunset background"
        allow="autoplay; fullscreen; picture-in-picture"
        referrerPolicy="strict-origin-when-cross-origin"
      />
      <div className="bgOverlay" />
      <div className="bgNoise" />
    </div>
  );
}
