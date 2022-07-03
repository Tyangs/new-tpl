import { FileInfoList, IGenTemplateOptions } from './type';
import {
  createFileList,
  getConvertedName,
  getDefaultFileInfoList,
  getFileInfoListByNames,
} from './utils';

/**
 * Create files by template options.
 * @param {IGenTemplateOptions} options the customize or default template file's dir and getFileList callback.
 */
const newTemplate = (options?: IGenTemplateOptions) => {
  let getFileList, templateDirPath;
  if (!options) {
    getFileList = getDefaultFileInfoList;
    templateDirPath = './template';
  } else {
    getFileList = options.getFileList;
    templateDirPath = options.templateDirPath;
  }
  const name = process.argv[2];
  const names = getConvertedName(name);
  const fileList: FileInfoList = getFileInfoListByNames(names, getFileList);
  createFileList(name, templateDirPath, fileList);
};

export default newTemplate;
