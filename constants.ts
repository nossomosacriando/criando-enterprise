
import { Product, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'quem-somos', label: 'Quem Somos' },
  { id: 'produtos', label: 'Produtos' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'o-leitor',
    name: 'O Leitor - Mangá, novel e mais',
    description: 'Cansado de perder suas leituras ou de um milhão de abas abertas? O Leitor é o agregador perfeito para fãs de histórias em quadrinhos, novels e mangás. Agrupe todos os seus links em um único local e desfrute de uma experiência de leitura otimizada!',
    images: [
      'assets/products/o-leitor/oLeitor.png'
    ],
    playStore: 'https://play.google.com/store/apps/details?id=com.criando.oleitor&hl=pt_BR',
    policyPage: 'politica-leitor'
  },
  {
    id: 'harvest-word',
    name: 'Harvest Words: Inglês Jogando',
    description: 'Você acaba de se mudar para a charmosa vila de Bloom town, em um país completamente novo — com uma língua totalmente diferente. Depois de herdar a antiga fazenda do seu avô, você chega cheio de sonhos e desafios pela frente: cuidar da terra, conhecer os vizinhos e aprender a se comunicar nesse novo idioma!',
    images: [
      'assets/products/harvest-words/harvest-1.png',
      'assets/products/harvest-words/harvest-2.png',
      'assets/products/harvest-words/harvest-3.png',
      'assets/products/harvest-words/harvest-4.png'
    ],
    appStore: 'https://apps.apple.com/br/app/harvest-words-ingl%C3%AAs-jogando/id6755827485',
    playStore: 'https://play.google.com/store/apps/details?id=com.nomerge.englishappgame',
    coCreatorLink: 'https://inativestudio.com/policies.html',
    policyPage: 'politica-harvest'
  }
];
