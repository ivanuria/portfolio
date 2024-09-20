import zod from 'zod';

export const LocaleDataSchema = zod.object({
  title: zod.string(),
  alt: zod.string(),
  extract: zod.string(),
});

export const LocaleSchema = zod.object({
  es: LocaleDataSchema,
  en: LocaleDataSchema,
});

export const PortfolioSchema = zod.object({
  id: zod.string(),
  src: zod.string(),
  href: zod.string(),
  locale: LocaleSchema,
});