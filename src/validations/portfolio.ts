import zod from 'zod';
import { portfolioType, localeType, portfolioI18N } from '@/src/types/portfolio';
import { locales } from '../navigation';

interface ValidatedPortfolio {
  id?: string;
  src?: string;
  href?: string;
  locale?: localeType;
}

interface ValidatedLocale {
  es?: portfolioI18N;
  en?: portfolioI18N;
}

function validateLocaleDict(localeDict: unknown, l:string): portfolioI18N {
  if (!localeDict || typeof localeDict !== 'object')
    throw new Error('Locale must be an object');
  if (!('title' in localeDict))
    throw new Error (`title in ${l} is required`);
  if (!('alt' in localeDict))
    throw new Error (`alt in ${l} is required`);
  if (!('extract' in localeDict))
    throw new Error (`extract in ${l} is required`);

  return {
    'title': zod.string().parse(localeDict.title),
    'alt': zod.string().parse(localeDict.alt),
    'extract': zod.string().parse(localeDict.extract),
  } as portfolioI18N;
}

function validateLocale(locale: unknown): localeType {
  if (!locale || typeof locale !== 'object')
    throw new Error('Incorrect or missing Locale Data');
  const finalLocale: ValidatedLocale = {};
  for (const [l, localeDict] of Object.entries(locale)) {
    const thisLocale = zod.string().parse(l);
    if (!locales.includes(thisLocale)) {
      throw new Error('Locale not in en or es');
    }
    finalLocale[l as keyof ValidatedLocale] = validateLocaleDict(localeDict, l);
  }
  return finalLocale as localeType;
}

export function validatePortfolio(portfolio: unknown): portfolioType {
  const validatedPortfolio: ValidatedPortfolio = {};
  if (!portfolio || typeof portfolio !== 'object')
    throw new Error('Incorrect or missing data');

  if (!('id' in portfolio))
    throw new Error('ID is required');
  if (!('src' in portfolio))
    throw new Error('SRC is required');
  if (!('href' in portfolio))
    throw new Error('HREF is required');
  if (!('locale' in portfolio))
    throw new Error('Locale is required');
  if (!portfolio.locale || typeof portfolio.locale !== 'object')
    throw new Error('Locale must be an object');

  validatedPortfolio.id = zod.string().parse(portfolio.id);
  validatedPortfolio.src = zod.string().parse(portfolio.src);
  validatedPortfolio.href = zod.string().parse(portfolio.href);
  validatedPortfolio.locale = validateLocale(portfolio.locale);

  return validatedPortfolio as portfolioType;
}