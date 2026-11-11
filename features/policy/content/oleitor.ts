// Gerado a partir de oleitor/src/constants/privacyPolicy.js (mesmo texto do app).
// Para mudar a política, altere o arquivo do app e gere de novo.

export interface PolicySection {
  title: string;
  paragraphs?: string[];
  items?: string[];
}

export const OLEITOR_POLICY_UPDATED_AT = "11 de novembro de 2026";

export const OLEITOR_POLICY_SECTIONS: PolicySection[] = [
  {
    "title": "Termos Gerais",
    "paragraphs": [
      "O O Leitor é um aplicativo para Android, desenvolvido pela Criando Enterprise, para organizar e acompanhar suas leituras de mangás, manhwas e novels publicados em sites de terceiros.",
      "O O Leitor não hospeda obras: ao abrir uma obra, o leitor do app exibe o site de origem. Os direitos sobre as obras pertencem aos seus autores e aos sites que as publicam.",
      "O uso é gratuito, com anúncios. A versão VIP remove os anúncios e libera recursos extras.",
      "Ao utilizar o aplicativo, você declara estar ciente e de acordo com esta Política de Privacidade e Termos de Uso, em conformidade com a Lei Geral de Proteção de Dados (LGPD)."
    ]
  },
  {
    "title": "Dados que Coletamos",
    "paragraphs": [
      "Você pode usar o app sem conta, no modo visitante: nesse caso, sua biblioteca fica apenas no aparelho. Com conta, tratamos:"
    ],
    "items": [
      "Conta: e-mail, nome de usuário e senha (guardada apenas de forma criptografada, nunca em texto).",
      "Foto de perfil: somente a imagem que você escolher. O app acessa suas fotos apenas quando você seleciona uma imagem de perfil ou uma capa de obra.",
      "Biblioteca: link, título, apelido, capa e último capítulo das obras, pastas e ordem, para sincronizar entre aparelhos.",
      "Uso: tempo de uso do app (base do nível VIP), status VIP, conclusão da apresentação inicial e notificações lidas.",
      "Denúncias de conteúdo: link e título da obra denunciada e um identificador anônimo de quem denunciou.",
      "Registros técnicos: dados mínimos de acesso (tipo e caminho da requisição, data, hora e erros), sem o conteúdo das requisições."
    ]
  },
  {
    "title": "O que Não Coletamos",
    "paragraphs": [
      "Não coletamos nome completo, localização, contatos, câmera nem microfone. Não vendemos nem alugamos dados pessoais."
    ]
  },
  {
    "title": "Para que Usamos os Dados",
    "items": [
      "Criar e manter sua conta, verificar seu e-mail, permitir o login e sincronizar sua biblioteca (execução de contrato).",
      "Calcular o nível VIP e o tempo de uso (execução de contrato).",
      "Exibir anúncios não personalizados na versão gratuita (legítimo interesse).",
      "Segurança, prevenção de abuso e moderação do conteúdo exibido no Explorar (legítimo interesse).",
      "Cumprir obrigações legais e ordens de autoridades (obrigação legal)."
    ]
  },
  {
    "title": "Anúncios",
    "paragraphs": [
      "A versão gratuita exibe anúncios do Google AdMob, configurados como não personalizados. Mesmo assim, o Google pode usar identificadores do aparelho para limitar a frequência, medir resultados e prevenir fraudes, conforme a política de privacidade do Google (policies.google.com/privacy).",
      "A versão VIP não exibe anúncios."
    ]
  },
  {
    "title": "Compartilhamento",
    "paragraphs": [
      "Compartilhamos apenas o necessário para o funcionamento do app, com:"
    ],
    "items": [
      "Google (Google Play e AdMob): distribuição do app e anúncios.",
      "Render: hospedagem dos servidores do app.",
      "MongoDB Atlas: banco de dados.",
      "Provedor de e-mail: envio dos e-mails de verificação e avisos.",
      "AniList: recebe apenas títulos públicos de obras do Explorar, para classificar o conteúdo, sem nenhum dado seu."
    ]
  },
  {
    "title": "Transferência Internacional",
    "paragraphs": [
      "Esses fornecedores podem armazenar ou processar dados fora do Brasil, inclusive nos Estados Unidos, com as salvaguardas previstas no art. 33 da LGPD."
    ]
  },
  {
    "title": "Cookies e Sites de Terceiros",
    "paragraphs": [
      "O app não utiliza cookies próprios. O leitor abre sites de terceiros, que têm suas próprias políticas e podem usar cookies e anúncios. O O Leitor não controla esses sites."
    ]
  },
  {
    "title": "Retenção",
    "items": [
      "Conta e biblioteca: enquanto a conta existir.",
      "Códigos de verificação de e-mail: minutos; são apagados após o uso ou o vencimento.",
      "Registros técnicos: pelo tempo necessário à operação e à segurança.",
      "Denúncias: enquanto a obra estiver em análise ou bloqueada."
    ]
  },
  {
    "title": "Seus Direitos",
    "paragraphs": [
      "Pela LGPD (art. 18), você pode pedir confirmação e acesso aos seus dados, correção, anonimização, bloqueio ou eliminação, portabilidade, informações sobre compartilhamento e revogação de consentimento.",
      "Para exercer seus direitos ou excluir sua conta e seus dados, envie um e-mail para contato@oleitor.app a partir do endereço cadastrado. Respondemos em até 15 dias."
    ]
  },
  {
    "title": "Segurança",
    "paragraphs": [
      "Senhas guardadas com criptografia (bcrypt), comunicação por HTTPS, sessões com tokens renovados periodicamente, limites de requisições contra abuso e acesso administrativo restrito. Nenhum sistema é totalmente seguro; em caso de incidente relevante, avisaremos os usuários e a ANPD, conforme a lei."
    ]
  },
  {
    "title": "Crianças e Adolescentes",
    "paragraphs": [
      "O cadastro de menores de 12 anos exige o consentimento específico de um dos pais ou responsável legal, na forma do art. 14 da LGPD. Se identificarmos dados tratados sem essa autorização, eles serão eliminados."
    ]
  },
  {
    "title": "Conteúdo do Explorar",
    "paragraphs": [
      "Os carrosséis do Explorar mostram obras coletadas automaticamente de sites de terceiros.",
      "Aplicamos filtros para retirar dos carrosséis conteúdo adulto (+18), ecchi ou sugestivo e romances de conteúdo sexual, usando listas de termos, uma lista de obras bloqueadas, classificação de bases públicas (como o AniList) e denúncias dos usuários. Os filtros reduzem, mas não garantem a ausência total desse conteúdo.",
      "Se encontrar uma obra imprópria, segure a capa e toque em \"Denunciar\". A obra sai do seu Explorar na hora e é analisada; após denúncias de usuários diferentes ou decisão da equipe, sai dos carrosséis de todos. Para contar denúncias de pessoas diferentes, guardamos o link e o título da obra e um identificador anônimo (resumo criptográfico da conta ou do endereço IP), sem dados que identifiquem você diretamente."
    ]
  },
  {
    "title": "Obras Adicionadas pelo Usuário",
    "paragraphs": [
      "Obras que você adiciona à sua galeria manualmente, por link ou pela pesquisa, são escolha sua. O O Leitor não revisa, não filtra e não endossa esse conteúdo.",
      "Você é o único responsável pelo conteúdo que adiciona e acessa por meio do aplicativo, incluindo respeitar a classificação etária, a legislação aplicável e os termos e direitos autorais dos sites de origem. Não utilize o O Leitor para acessar ou armazenar conteúdo ilegal."
    ]
  },
  {
    "title": "Alterações e Contato",
    "paragraphs": [
      "Podemos atualizar esta política. Mudanças relevantes serão avisadas no app, com a nova data de atualização.",
      "Controlador dos dados: Criando Enterprise. Contato para privacidade: contato@oleitor.app."
    ]
  }
];
