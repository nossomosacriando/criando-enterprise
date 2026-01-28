/**
 * Gestão de Assets LOCAIS (Vite Friendly)
 * Compatível com build + GitHub Pages
 */

/* Layout */
import logo from '../assets/layout/logo/logo.png';
import homeBg from '../assets/layout/backgrounds/home.png';
import aboutBg from '../assets/layout/backgrounds/about.png';

/* Products - O Leitor */
import oLeitor1 from '../assets/products/o-leitor/o-leitor-1.png';
import oLeitor2 from '../assets/products/o-leitor/o-leitor-2.png';
import oLeitor3 from '../assets/products/o-leitor/o-leitor-3.png';
import oLeitor4 from '../assets/products/o-leitor/o-leitor-4.png';
import oLeitor5 from '../assets/products/o-leitor/o-leitor-5.png';
import oLeitor6 from '../assets/products/o-leitor/o-leitor-6.png';
import oLeitor7 from '../assets/products/o-leitor/o-leitor-7.png';

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
    oLeitor: [
      oLeitor1,
      oLeitor2,
      oLeitor3,
      oLeitor4,
      oLeitor5,
      oLeitor6,
      oLeitor7,
    ],

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
