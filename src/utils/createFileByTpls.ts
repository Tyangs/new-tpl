import * as fs from 'fs';

import { consoleError } from './consoleLog';
import { createFile } from './createFile';
import { getFileContent } from './getFileContent';

/**
 * generate files by tpls.
 * @param tplDir tpls's dir path.
 * @param outputDir target dir path thar file will output.
 * @param isTpl is it a tpl file.
 */
export const createFileByTpls = (tplDir: string, outputDir: string, isTpl?: boolean) => {
  const tplFiles = fs.readdirSync(tplDir).filter(res => res.includes('.tpl'));

  const createFiles = () => {
    tplFiles.forEach(file => {
      const fileContent = getFileContent(`${tplDir}/${file}`);
      const newFileName = isTpl ? file : file.replace(/\.tpl$/, '');
      const filePath = `${outputDir}/${newFileName}`;
      createFile(filePath, fileContent);
    });
  };

  fs.promises
    .access(outputDir, fs.constants.F_OK)
    .then(createFiles)
    .catch(() => fs.promises.mkdir(outputDir, { recursive: true }))
    .then(createFiles)
    .catch(error => {
      consoleError(error);
    });
};
