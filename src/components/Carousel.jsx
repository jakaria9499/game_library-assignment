import React, { useEffect, useRef, useState } from "react";

const Carousel = ({ data }) => {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % 4);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, data]);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const slideWidth = container.clientWidth;
      container.scrollTo({
        left: current * slideWidth,
        behavior: "smooth",
      });
    }
  }, [current]);

  return (
    <div
      className="relative w-full overflow-hidden rounded-xl"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        ref={containerRef}
        className="flex w-full overflow-x-hidden scroll-smooth"
      >
        {data.slice(0, 4).map((d, i) => (
          <div key={i} className="flex-none w-full h-96 relative">
            <img
              src={d.coverPhoto}
              alt={d.title}
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black/30 text-white p-4">
              <h2 className="text-xl font-semibold">{d.title}</h2>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {[0, 1, 2, 3].map((i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              current === i ? "bg-white scale-125" : "bg-white/50"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
