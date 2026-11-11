import { OLEITOR_POLICY_UPDATED_AT } from './content/oleitor';

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
    lastUpdate: OLEITOR_POLICY_UPDATED_AT,
    content: 'leitor',
  },
  'harvest-words': {
    slug: 'harvest-words',
    productName: 'Harvest Words: Inglês Jogando',
    lastUpdate: '14 de Novembro de 2025',
    content: 'harvest',
  },
};
