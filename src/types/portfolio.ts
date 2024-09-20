export interface portfolioI18N {
  'title': string,
  'alt': string,
  'extract': string,
}

export interface localeType {
  'es': portfolioI18N,
  'en': portfolioI18N
}

export interface portfolioType {
  'id': string,
  'src': string,
  'href': string,
  'locale': localeType,
}

export type localeItem = {
  [key:string]: portfolioI18N
};