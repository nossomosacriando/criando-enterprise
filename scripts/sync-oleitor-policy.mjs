// Gera o texto da política do site da Criando a partir do arquivo do app (fonte única).
// Uso: node scripts/sync-oleitor-policy.mjs <oleitor/src/constants/privacyPolicy.js> .
// Depois: npm run build (gera docs/) e commit.
import { readFileSync, writeFileSync, copyFileSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { pathToFileURL } from 'node:url';

const [appPolicy, site] = process.argv.slice(2);
const tmp = join(tmpdir(), 'oleitor-privacy-policy.mjs');
copyFileSync(appPolicy, tmp);
const { PRIVACY_POLICY_SECTIONS: sections, PRIVACY_POLICY_UPDATED_AT: updatedAt } = await import(pathToFileURL(tmp));

// 1) Conteúdo da versão React do site
const ts = `// Gerado a partir de oleitor/src/constants/privacyPolicy.js (mesmo texto do app).\n`
    + `// Para mudar a política, altere o arquivo do app e gere de novo.\n\n`
    + `export interface PolicySection {\n  title: string;\n  paragraphs?: string[];\n  items?: string[];\n}\n\n`
    + `export const OLEITOR_POLICY_UPDATED_AT = ${JSON.stringify(updatedAt)};\n\n`
    + `export const OLEITOR_POLICY_SECTIONS: PolicySection[] = ${JSON.stringify(sections, null, 2)};\n`;
writeFileSync(join(site, 'features/policy/content/oleitor.ts'), ts);

// 2) Página estática /politicas/o-leitor (a que o app abre)
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const html = sections.map((s) => [
    '      <section>',
    `        <h2>${esc(s.title)}</h2>`,
    ...(s.paragraphs || []).map((p) => `        <p>${esc(p)}</p>`),
    ...(s.items ? ['        <ul>', ...s.items.map((i) => `          <li>${esc(i)}</li>`), '        </ul>'] : []),
    '      </section>',
].join('\n')).join('\n\n');

const pagePath = join(site, 'public/politicas/o-leitor/index.html');
const page = readFileSync(pagePath, 'utf8');
const start = page.indexOf('</h1>') + '</h1>'.length;
const end = page.indexOf('    </main>');
if (start < 5 || end < start) throw new Error('marcadores </h1> / </main> não encontrados');
const body = `\n\n${html}\n\n      <p class="updated">Última atualização: ${esc(updatedAt)}.</p>\n`;
writeFileSync(pagePath, page.slice(0, start) + body + page.slice(end));
console.log(`OK: ${sections.length} seções, atualização ${updatedAt}`);
