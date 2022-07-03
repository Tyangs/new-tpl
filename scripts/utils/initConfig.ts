import * as path from 'path';

import { CONFIG_DIR_PATH, CWD_PATH } from './../constants/path';
import { createFile } from './createFile';
import { getFileContent } from './getFileContent';

export interface IInitConfigOptions {}

export const initConfig = () => {
  const configPath = path.resolve(CWD_PATH, CONFIG_DIR_PATH);

  const configJsContent = getFileContent('./config.ts.tpl');

  createFile(`${configPath}/config.js`, configJsContent);
};
