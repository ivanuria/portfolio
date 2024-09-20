import data from '@/data/portfolio';
import {
  portfolioType,
  localeItem
} from '@/src/types/portfolio';

export interface locales {
  "es": localeItem,
  "en": localeItem
}

export function getFiles(): portfolioType[] {
  return data;
}

export function getLocales() : locales {
  const final:locales = {
    es: {},
    en: {}
  };
  const files = getFiles();
  for (const file of files) {
    final.es[file.id] = file.locale.es;
    final.en[file.id] = file.locale.en;
  }
  return final;
}

export default function usePortfolio() {
  const files = getFiles();
  return files;
}