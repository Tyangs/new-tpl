import * as fs from 'fs';

import { consoleError, consoleSuccess } from './consoleLog';

export type CreateFileSuccess = () => void;

/**
 * create a file by custom `path` and `data`.
 * @param path the path that file will be created.
 * @param data the content of the file that will be written.
 * @param onSuccess the file is created successfully callback.
 * @example 
    createFile('./index.ts', 'a new file', () => {
      console.log('file be created successfully');
    });
 */
export const createFile = (path: string, data: string, onSuccess?: CreateFileSuccess) => {
  // TODO: need to mkdir when no dir or file
  fs.writeFile(path, data, error => {
    if (error) {
      consoleError(error);
      return;
    }
    if (onSuccess) {
      onSuccess();
      return;
    }
    consoleSuccess(`${path} file has been created successfully!`);
  });
};
