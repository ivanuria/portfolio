import { getLocales as getLocalesPortfolio } from "../services/usePortfolio";

export default function getLocales() {
  return getLocalesPortfolio();
}