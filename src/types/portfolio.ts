import {
  PortfolioSchema,
  LocaleSchema,
  LocaleDataSchema
} from '../validations/portfolio';
import zod from 'zod';

export type portfolioI18N = zod.infer<typeof LocaleDataSchema>;
export type localeType = zod.infer<typeof LocaleSchema>;
export type portfolioType = zod.infer<typeof PortfolioSchema>;
export interface localeItem {
  [key:string]: portfolioI18N
};