import * as fs from 'fs';

import { consoleError, consoleSuccess } from './consoleLog';

/**
 * Create file by `path` and `data`.
 * @param {string} path the path that file will be created.
 * @param {string} data the data content that file will be created.
 */
export const createFile = (path: string, data: string): void => {
  fs.writeFile(path, data, error => {
    if (error) {
      consoleError(error);
      return;
    }
    consoleSuccess(`${path} file has been created successfully！`);
  });
};
