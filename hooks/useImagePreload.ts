import { useEffect } from 'react';

export function useImagePreload(images: string[]) {
  useEffect(() => {
    images.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);
}
