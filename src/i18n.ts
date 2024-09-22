import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { AbstractIntlMessages } from 'next-intl';
import { routing } from './routing';

import deepmerge from 'deepmerge';

import getLocales from './controllers/getLocales';
import { Locales, LocalesType } from './types/locales';

const controllersMessages = await getLocales();

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!routing.locales.includes(locale as Locales)) notFound();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  const messages = (await import(`../messages/${locale}`)).default as LocalesType;
  const final = deepmerge.all([
    messages,
    controllersMessages[locale as Locales]
  ]);
  return { messages: final as AbstractIntlMessages };
});