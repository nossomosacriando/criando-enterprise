/**
 * Pages (State-based Routing)
 * Cada Page representa uma rota semântica real do site.
 * Esta é a FONTE ÚNICA DE VERDADE para navegação interna.
 */
export type Page =
  | 'home'
  | 'quem-somos'
  | 'produtos'
  | 'politica-o-leitor'
  | 'politica-harvest-words'
  | 'app-ads';

/**
 * Mapeamento único de rotas
 * Fonte de verdade para URLs públicas (SEO / compartilhamento)
 */
export const PAGE_ROUTES: Record<Page, string> = {
  home: '/',
  'quem-somos': '/quem-somos',
  produtos: '/produtos',
  'politica-o-leitor': '/politicas/o-leitor',
  'politica-harvest-words': '/politicas/harvest-words',
  'app-ads': '/app-ads.txt',
};

/**
 * Imagem com múltiplas resoluções
 * O navegador escolhe a melhor variação via srcset + sizes
 */
export interface ResponsiveImage {
  /** Fallback para navegadores sem suporte a srcset */
  src: string;

  /** Variações no formato "url 720w, url 1080w" */
  srcSet: string;

  /** Largura exibida em cada breakpoint */
  sizes: string;
}

export type ProductImage = string | ResponsiveImage;

/**
 * Produto exibido na página de produtos
 */
export interface Product {
  /** Identificador interno único */
  id: string;

  /** Nome público do produto */
  name: string;

  /** Descrição curta exibida no site */
  description: string;

  /** Imagens promocionais (retrato) */
  images: ProductImage[];

  /**
   * Imagens promocionais em paisagem, exibidas em telas largas (lg+)
   * Quando presentes, as imagens em retrato são exibidas sem corte
   */
  wideImages?: ProductImage[];

  /** Link opcional para Google Play */
  playStore?: string;

  /** Link opcional para App Store */
  appStore?: string;

  /** Link opcional para co-criação ou landing externa */
  coCreatorLink?: string;

  /**
   * Página de política vinculada ao produto
   * Deve apontar para um Page válido
   */
  policyPage: Page;
}

/**
 * Item de navegação do Navbar
 */
export interface NavItem {
  /** Page associada ao item */
  id: Page;

  /** Label exibido no menu */
  label: string;
}
