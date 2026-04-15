// src/features/home/components/HeroSlider.jsx
import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import LogoVerde from "../../../assets/logoVerdeFondoTransparente.png";
import { HERO_SLIDES } from "../constants/homeData";

const INTERVAL_MS = 5000;

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(
    () => setCurrent((prev) => (prev + 1) % HERO_SLIDES.length),
    [],
  );

  const prev = useCallback(
    () =>
      setCurrent(
        (prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length,
      ),
    [],
  );

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, INTERVAL_MS);
    return () => clearInterval(timer);
  }, [next, paused]);

  const slide = HERO_SLIDES[current];

  return (
    <section
      className="bg-cyan-950 text-white py-16 md:py-20 rounded-md relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container mx-auto px-4 md:px-6 text-center">
        {/* Logo fijo */}
        <h1 className="flex items-center justify-center gap-1 text-4xl md:text-5xl font-bold mb-6 tracking-wide">
          <img
            className="h-14 md:h-16 w-auto"
            src={LogoVerde}
            alt="AutoCheck Logo"
          />
          <span>AutoCheckup</span>
        </h1>

        {/* Contenido animado */}
        <div
          key={slide.id}
          className="animate-fade-in transition-all duration-500"
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-lime-400 tracking-wide">
            {slide.title}
          </h2>
          <p className="text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed text-white/80">
            {slide.description}
          </p>
          <Link
            to={slide.to}
            className="inline-block bg-lime-500 text-white font-semibold px-6 py-3
              rounded-lg shadow hover:bg-lime-600 transition tracking-wide"
          >
            {slide.cta}
          </Link>
        </div>

        {/* Controles */}
        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            onClick={prev}
            className="w-8 h-8 rounded-full border border-white/20 flex items-center
              justify-center hover:bg-white/10 transition"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {HERO_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Ir a slide ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-6 h-2 bg-lime-400"
                    : "w-2 h-2 bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-8 h-8 rounded-full border border-white/20 flex items-center
              justify-center hover:bg-white/10 transition"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
