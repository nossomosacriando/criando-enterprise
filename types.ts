
export type Page = 'home' | 'quem-somos' | 'produtos' | 'politica-leitor' | 'politica-harvest';

export interface Product {
  id: string;
  name: string;
  description: string;
  images: string[];
  playStore?: string;
  appStore?: string;
  coCreatorLink?: string;
  policyPage: Page;
}

export interface NavItem {
  id: Page;
  label: string;
}
