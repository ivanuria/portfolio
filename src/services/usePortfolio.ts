import data from '@/data/portfolio';
import {
  portfolioType
} from '@/src/types/portfolio';
import { LocalesType } from '@/src/types/locales';

export function getFiles(): portfolioType[] {
  return data;
}

export function getLocales(): LocalesType {
  const final:LocalesType = {
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