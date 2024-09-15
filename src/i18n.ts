import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { AbstractIntlMessages } from 'next-intl';
import { routing } from './routing';

import deepmerge from 'deepmerge';

import getLocales from './controllers/getLocales';
const controllersMessages = getLocales();
type localeType = 'es' | 'en';

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!routing.locales.includes(locale as any)) notFound();
  const messages = (await import(`../messages/${locale}.json`)).default;
  const final = deepmerge.all([
    messages,
    controllersMessages[locale as localeType]
  ]);
  return { messages: final as AbstractIntlMessages };
});