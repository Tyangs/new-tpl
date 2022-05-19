import * as fs from 'fs';
import * as _ from 'lodash';
import * as path from 'path';

import { FileTemplateInfo } from '../type';
import { createFile } from './createFile';
import { getConvertedName } from './getConvertedName';

/**
 * Create file by template.
 * @param {string} name the name that will to convert.
 * @param {string} dir the dir path that will create files.
 * @param {string} templateDirPath the customize or default template file's dir.
 * @param {FileTemplateInfo} fileInfo the file path and template content that will to be created.
 */
export const createFileByTemplate = (
	name: string,
	dir: string,
	templateDirPath: string,
	fileInfo: FileTemplateInfo
): void => {
	const { file, template } = fileInfo;

	const templatePath = path.resolve(__dirname, `${templateDirPath}/${template}`);
	let data = fs.readFileSync(templatePath).toString();
	const compiled = _.template(data);
	const compiledNames = getConvertedName(name);
	data = compiled(compiledNames);
	const filePath = path.resolve(dir, file);
	createFile(filePath, data);
};
