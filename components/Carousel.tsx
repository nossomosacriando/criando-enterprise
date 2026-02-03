import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Loader2, ImageOff } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CarouselProps {
  images: string[];
}

export const Carousel = ({ images }: CarouselProps) => {
  const [current, setCurrent] = useState(0);
  const [isLoaded, setIsLoaded] = useState<Record<number, boolean>>({});
  const [hasError, setHasError] = useState<Record<number, boolean>>({});

  /**
   * 🔹 Pré-carrega imagem atual + próxima + anterior
   * 🔹 Browser cache garante fluidez total
   */
  useEffect(() => {
    if (!images.length) return;

    const preload = (index: number) => {
      if (isLoaded[index] || hasError[index]) return;
      const img = new Image();
      img.src = images[index];
    };

    preload(current);
    preload((current + 1) % images.length);
    preload((current - 1 + images.length) % images.length);
  }, [current, images, isLoaded, hasError]);

  /**
   * 🔹 Auto-play (10s)
   */
  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleImageLoad = (index: number) => {
    setIsLoaded((prev) => ({ ...prev, [index]: true }));
  };

  const handleImageError = (index: number) => {
    setHasError((prev) => ({ ...prev, [index]: true }));
    setIsLoaded((prev) => ({ ...prev, [index]: true }));
  };

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!images.length) return null;

  return (
    <div className="relative group overflow-hidden rounded-[2.5rem] md:rounded-[3.5rem] bg-zinc-900 aspect-[9/14] md:aspect-[9/16] w-full max-w-[420px] mx-auto flex items-center justify-center transition-all duration-500 shadow-2xl ring-1 ring-white/10">
      
      {/* Glow atmosférico */}
      <div className="absolute inset-0 z-0 opacity-40 blur-[80px] scale-150 pointer-events-none transition-opacity duration-1000">
        <img
          src={images[current]}
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
        />
      </div>

      {/* Loader */}
      <AnimatePresence>
        {!isLoaded[current] && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center z-20 bg-zinc-950/40 backdrop-blur-md"
          >
            <Loader2 className="animate-spin text-blue-500" size={32} />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 w-full h-full">
        <AnimatePresence mode="wait">
          {!hasError[current] ? (
            <motion.img
              key={`img-${current}`}
              src={images[current]}
              onLoad={() => handleImageLoad(current)}
              onError={() => handleImageError(current)}
              loading="eager"
              decoding="async"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full object-cover select-none"
              alt={`Visualização do produto ${current + 1}`}
            />
          ) : (
            <motion.div
              key={`error-${current}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="w-full h-full flex flex-col items-center justify-center text-gray-400 bg-zinc-800"
            >
              <ImageOff size={40} className="mb-4 opacity-50" />
              <p className="text-[10px] font-black uppercase tracking-widest">
                Preview Indisponível
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {images.length > 1 && (
        <>
          {/* Navegação */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-blue-600 backdrop-blur-xl p-3 rounded-full text-white transition-all opacity-0 group-hover:opacity-100 shadow-xl border border-white/10 active:scale-90 z-30"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-blue-600 backdrop-blur-xl p-3 rounded-full text-white transition-all opacity-0 group-hover:opacity-100 shadow-xl border border-white/10 active:scale-90 z-30"
          >
            <ChevronRight size={20} />
          </button>

          {/* Indicadores */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-30 px-3 py-2 bg-black/30 backdrop-blur-lg rounded-full border border-white/10">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1 rounded-full transition-all duration-500 ${
                  i === current ? 'w-6 bg-blue-500' : 'w-1.5 bg-white/30'
                }`}
              />
            ))}
          </div>
        </>
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none z-10" />
    </div>
  );
};
