import * as path from 'path';

import { CONFIG_DIR_PATH, CWD_PATH } from './constants/path';
import { createFileByTpls } from './utils/createFileByTpls';

export interface IInitConfigOptions {}

export const initConfig = () => {
  const configPath = path.resolve(CWD_PATH, CONFIG_DIR_PATH);
  const configJsTplDir = path.resolve(__dirname, './template/initConfig');

  const initTplOutputDir = path.resolve(CWD_PATH, `${CONFIG_DIR_PATH}/template`);
  const initTplDir = path.resolve(__dirname, './template/initConfig/template');

  createFileByTpls(configJsTplDir, configPath);

  createFileByTpls(initTplDir, initTplOutputDir, true);
};
