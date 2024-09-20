import fs from 'fs';
import path from 'node:path';
import { portfolioType } from '@/src/types/portfolio';
import { validatePortfolio } from '@/src/validations/portfolio';

const dir = './data/portfolio/';
const files = fs.readdirSync(dir);
const data: portfolioType[] =
  files.map(file => validatePortfolio(JSON.parse(fs.readFileSync(path.resolve(dir, file)).toString())));

export default data;