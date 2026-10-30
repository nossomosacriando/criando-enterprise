/**
 * Gestão de Assets LOCAIS (Vite Friendly)
 * Compatível com build + GitHub Pages
 */

/* Layout */
import logo from '../assets/layout/logo/logo.png';
import homeBg from '../assets/layout/backgrounds/home.png';
import aboutBg from '../assets/layout/backgrounds/about.png';

import type { ResponsiveImage } from '../types';

/**
 * Products - O Leitor
 * Arquivos: o-leitor-{slide}-{largura}.webp
 * portrait  → celular/tablet (< lg): 720, 1080, 1440 (tablet 10")
 * landscape → computador (lg+): 1280, 1920, 2560
 */
const oLeitorPortrait = import.meta.glob<string>(
  './products/o-leitor/portrait/*.webp',
  { eager: true, import: 'default' }
);
const oLeitorLandscape = import.meta.glob<string>(
  './products/o-leitor/landscape/*.webp',
  { eager: true, import: 'default' }
);

/**
 * Agrupa as variações de cada slide em um ResponsiveImage
 */
const toResponsiveSlides = (
  files: Record<string, string>,
  fallbackWidth: number,
  sizes: string
): ResponsiveImage[] => {
  const slides = new Map<number, { url: string; width: number }[]>();

  for (const [file, url] of Object.entries(files)) {
    const match = file.match(/-(\d+)-(\d+)\.webp$/);
    if (!match) continue;
    const slide = Number(match[1]);
    const variants = slides.get(slide) ?? [];
    variants.push({ url, width: Number(match[2]) });
    slides.set(slide, variants);
  }

  return [...slides.entries()]
    .sort(([a], [b]) => a - b)
    .map(([, variants]) => {
      variants.sort((a, b) => a.width - b.width);
      const fallback = variants.find(v => v.width === fallbackWidth) ?? variants[0];
      return {
        src: fallback.url,
        srcSet: variants.map(v => `${v.url} ${v.width}w`).join(', '),
        sizes,
      };
    });
};

/* Products - Harvest Words */
import harvest1 from '../assets/products/harvest-words/harvest-1.png';
import harvest2 from '../assets/products/harvest-words/harvest-2.png';
import harvest3 from '../assets/products/harvest-words/harvest-3.png';
import harvest4 from '../assets/products/harvest-words/harvest-4.png';
import harvest5 from '../assets/products/harvest-words/harvest-5.png';
import harvest6 from '../assets/products/harvest-words/harvest-6.png';
import harvest7 from '../assets/products/harvest-words/harvest-7.png';

export const ASSETS = {
  layout: {
    logo,
    backgrounds: {
      home: homeBg,
      about: aboutBg,
    },
  },

  products: {
    oLeitor: {
      // Card limitado a 420px (container com px-6 abaixo disso)
      portrait: toResponsiveSlides(
        oLeitorPortrait,
        1080,
        '(max-width: 467px) calc(100vw - 48px), 420px'
      ),
      // Coluna lg:w-7/12 da página de produtos
      landscape: toResponsiveSlides(
        oLeitorLandscape,
        1920,
        '(min-width: 1536px) 812px, 52vw'
      ),
    },

    harvestWords: [
      harvest1,
      harvest2,
      harvest3,
      harvest4,
      harvest5,
      harvest6,
      harvest7,
    ],
  },
};
