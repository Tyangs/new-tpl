import * as path from 'path';

import { CONFIG_DIR_PATH, CWD_PATH } from './constants/path';
import { createFileByTpls } from './utils/createFileByTpls';

export interface IInitConfigOptions {}

export const initConfig = () => {
  const configPath = path.resolve(CWD_PATH, CONFIG_DIR_PATH);

  createFileByTpls({
    tplDir: path.resolve(__dirname, './template/initConfig'),
    outputDir: configPath,
  });

  createFileByTpls({
    tplDir: path.resolve(__dirname, './template/initConfig/template'),
    outputDir: `${configPath}/template`,
  });
};

// initConfig();
