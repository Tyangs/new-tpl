import * as _ from 'lodash';

import { FileInfoList, GenTemplateOptions } from './type';
import {
	createFileList,
	getConvertedName,
	getDefaultFileInfoList,
	getFileInfoListByNames,
} from './utils';

/**
 * Create files by template options.
 * @param {GenTemplateOptions} options the customize or default template file's dir and getFileList callback.
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
