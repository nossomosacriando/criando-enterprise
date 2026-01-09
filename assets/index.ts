/**
 * Gestão de Assets via Cloudinary (Links Externos)
 * Isso elimina os erros de "Module not found" no ambiente do AI Studio.
 */

const CLOUD_NAME = 'dbd2ydqcy';
const BASE_URL = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;

export const ASSETS = {
  layout: {
    logo: `${BASE_URL}/v1/logo-criando_id.png`,
    backgrounds: {
      about: `${BASE_URL}/v1/about_id.png`,
      home: `${BASE_URL}/v1/home_id.png`,
    },
  },
  products: {
    oLeitor: [
      `${BASE_URL}/v1/o-leitor-1_id.png`,
      `${BASE_URL}/v1/o-leitor-2_id.png`,
      `${BASE_URL}/v1/o-leitor-3_id.png`,
      `${BASE_URL}/v1/o-leitor-4_id.png`,
      `${BASE_URL}/v1/o-leitor-5_id.png`,
      `${BASE_URL}/v1/o-leitor-6_id.png`,

    ],
    harvestWords: [
      `${BASE_URL}/v1/harvest-1_id.png`,
      `${BASE_URL}/v1/harvest-2_id.png`,
      `${BASE_URL}/v1/harvest-3_id.png`,
      `${BASE_URL}/v1/harvest-4_id.png`,
      `${BASE_URL}/v1/harvest-5_id.png`,
      `${BASE_URL}/v1/harvest-6_id.png`,
      `${BASE_URL}/v1/harvest-7_id.png`,
    ],
  },
};