export type PolicyKey = 'o-leitor' | 'harvest-words';

export interface PolicyConfig {
  slug: string;
  productName: string;
  lastUpdate: string;
  content: 'leitor' | 'harvest';
}

export const POLICY_REGISTRY: Record<PolicyKey, PolicyConfig> = {
  'o-leitor': {
    slug: 'o-leitor',
    productName: 'O Leitor',
    lastUpdate: '11 de Fevereiro de 2023',
    content: 'leitor',
  },
  'harvest-words': {
    slug: 'harvest-words',
    productName: 'Harvest Words: Inglês Jogando',
    lastUpdate: '14 de Novembro de 2025',
    content: 'harvest',
  },
};
