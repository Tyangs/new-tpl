import * as fs from 'fs';

import { createFile } from './createFile';
import { getFileContent } from './getFileContent';

export interface ICreateFileByTplsParams {
  tplDir: string;
  outputDir: string;
}

export const createFileByTpls = (params: ICreateFileByTplsParams) => {
  const { tplDir, outputDir } = params;

  const tplFiles = fs.readdirSync(tplDir).filter(res => res.includes('.tpl'));

  tplFiles.forEach(file => {
    const fileContent = getFileContent(`${tplDir}/${file}`);
    const newFileName = file.replace(/\.tpl$/, '');
    createFile(`${outputDir}/${newFileName}`, fileContent);
  });
};
