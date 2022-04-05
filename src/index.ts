import * as _ from 'lodash';
import {
	getConvertedName,
	createFileList,
	getFileInfoListByNames,
	getDefaultFileInfoList,
} from './utils';
import { FileInfoList, GenTemplateOptions } from './type';

/**
 * Create files by template options.
 * @params `string` the customize or default template file's dir.
 * @params `GetFileList` getFileList callback.
 */
const genTemplate = (options?: GenTemplateOptions) => {
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

export default genTemplate;
