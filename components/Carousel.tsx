
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CarouselProps {
  images: string[];
}

export const Carousel = ({ images }: CarouselProps) => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  if (images.length === 0) return null;

  return (
    <div className="relative group overflow-hidden rounded-[2.5rem] shadow-2xl bg-gray-50 aspect-[4/3]">
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={images[current]}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="w-full h-full object-cover"
          alt={`Slide ${current + 1}`}
        />
      </AnimatePresence>
      
      {images.length > 1 && (
        <>
          <button onClick={prev} className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/90 backdrop-blur-xl p-4 rounded-full text-white hover:text-gray-900 transition-all opacity-0 group-hover:opacity-100">
            <ChevronLeft size={24} />
          </button>
          <button onClick={next} className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/90 backdrop-blur-xl p-4 rounded-full text-white hover:text-gray-900 transition-all opacity-0 group-hover:opacity-100">
            <ChevronRight size={24} />
          </button>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <div 
                key={i} 
                className={`h-1.5 rounded-full transition-all ${i === current ? 'w-8 bg-white' : 'w-2 bg-white/50'}`} 
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
