
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CarouselProps {
  images: string[];
}

export const Carousel = ({ images }: CarouselProps) => {
  const [current, setCurrent] = useState(0);
  const [isLoaded, setIsLoaded] = useState<{ [key: number]: boolean }>({});
  const imgRef = useRef<HTMLImageElement>(null);

  const next = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };
  
  const prev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleImageLoad = (index: number) => {
    setIsLoaded((prev) => ({ ...prev, [index]: true }));
  };

  // Verifica se a imagem já está no cache ao mudar de slide
  useEffect(() => {
    if (imgRef.current?.complete) {
      handleImageLoad(current);
    }
  }, [current]);

  if (images.length === 0) return null;

  return (
    <div className="relative group overflow-hidden rounded-[2.5rem] shadow-2xl bg-gray-100 aspect-[4/3] ring-1 ring-black/5">
      {/* Loading Skeleton - z-0 para ficar atrás da imagem carregada */}
      <AnimatePresence>
        {!isLoaded[current] && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center bg-gray-50 z-0"
          >
            <div className="flex flex-col items-center gap-4">
              <Loader2 className="animate-spin text-blue-600/30" size={32} />
              <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                  className="w-full h-full bg-blue-600/20"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Imagem com z-10 para sobrepor o skeleton */}
      <AnimatePresence mode="wait">
        <motion.img
          ref={imgRef}
          key={current}
          src={images[current]}
          onLoad={() => handleImageLoad(current)}
          onError={(e) => {
            // Fallback para garantir que algo seja exibido se o link falhar
            const target = e.target as HTMLImageElement;
            if (!target.src.includes('placeholder')) {
              target.src = `https://via.placeholder.com/800x600/f3f4f6/3b82f6?text=Imagem+Indisponível`;
              handleImageLoad(current);
            }
          }}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: isLoaded[current] ? 1 : 0, 
            scale: 1 
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="relative z-10 w-full h-full object-cover select-none"
          alt={`Visualização do produto ${current + 1}`}
          loading="eager"
          decoding="async"
        />
      </AnimatePresence>
      
      {images.length > 1 && (
        <>
          <div className="absolute inset-0 pointer-events-none z-20 group-hover:bg-black/5 transition-colors duration-500" />
          
          <button 
            onClick={prev} 
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/90 backdrop-blur-xl p-4 rounded-full text-white hover:text-gray-900 transition-all opacity-0 group-hover:opacity-100 shadow-xl border border-white/20 active:scale-90 z-30"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={next} 
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/90 backdrop-blur-xl p-4 rounded-full text-white hover:text-gray-900 transition-all opacity-0 group-hover:opacity-100 shadow-xl border border-white/20 active:scale-90 z-30"
          >
            <ChevronRight size={24} />
          </button>
          
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-30 px-4 py-2 bg-black/10 backdrop-blur-md rounded-full border border-white/10">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/60'}`} 
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
