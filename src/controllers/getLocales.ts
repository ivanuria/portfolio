import pool from "./db";
import deepmerge from "deepmerge";
import { getLocales as getLocalesPortfolio } from "../services/usePortfolio";
import Locales from '../models/Locales';

export default async function getLocales() {
  const localesFromDB:{ rows: Locales[] } = await pool.query('SELECT uuid, lang, value FROM locales');
  let finalLocales = {};
  for (const row of localesFromDB.rows) {
    finalLocales = {
      ...finalLocales,
      [row['lang']]: {
        [row['uuid']]: row['value']
      }
    };
  }
  console.log("Final Locales", finalLocales);
  return deepmerge.all([
    finalLocales,
    getLocalesPortfolio()
  ]) as Locales;
  //return getLocalesPortfolio();
}