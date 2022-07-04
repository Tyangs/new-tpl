import * as fs from 'fs';

/**
 * get specified file's content or compiled content.
 * @param path the path that file will be read.
 * @param compiledOptions
 * @returns specified file's content or compiled content.
 */
export const getFileContent = (path: string, compiledOptions?: object) => {
  const content = fs.readFileSync(path).toString();
  if (!compiledOptions) return content;
  // TODO: handle compiled case
  return '';
};
