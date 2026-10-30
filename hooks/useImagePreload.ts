import { useEffect } from 'react';
import { ProductImage } from '../types';

export function preloadImage(image: ProductImage) {
  const img = new Image();
  if (typeof image === 'string') {
    img.src = image;
    return;
  }
  // sizes antes de srcset: o navegador baixa só a variação adequada
  img.sizes = image.sizes;
  img.srcset = image.srcSet;
  img.src = image.src;
}

export function useImagePreload(images: ProductImage[]) {
  useEffect(() => {
    images.forEach(preloadImage);
  }, [images]);
}
