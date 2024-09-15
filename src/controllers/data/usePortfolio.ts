import fs from 'fs';
import path from 'node:path';

interface portfolioI18N {
  "title": string,
  "alt": string,
  "extract": string,
}

interface portfolioType {
  "id": string,
  "src": string,
  "href": string,
  "locale": {
    "es": portfolioI18N,
    "en": portfolioI18N
  }
}

type localeItem = {
  [key:string]: portfolioI18N
}

export interface locales {
  "es": localeItem,
  "en": localeItem
}

export function getFiles() : portfolioType[] {
  const dir = './src/controllers/data/portfolio/';
  const files = fs.readdirSync(dir);
  return files.map(file => JSON.parse(fs.readFileSync(path.resolve(dir, file)).toString()));
}

export function getLocales() : locales {
  const final:locales = {
    es: {},
    en: {}
  }
  const files = getFiles();
  for (let file of files) {
    final.es[file.id] = file.locale.es;
    final.en[file.id] = file.locale.en;
  }
  return final
}

export default function usePortfolio() {
  const files = getFiles();
  return files
}