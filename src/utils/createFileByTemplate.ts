import * as fs from 'fs';
import * as path from 'path';
import * as _ from 'lodash';
import { getConvertedName } from './getConvertedName';
import { createFile } from './createFile';
import { FileTemplateInfo } from '../type';

/**
 * Create file by template.
 * @params `string` the name that will to convert.
 * @params `string` the dir path that will create files.
 * @params `string` the customize or default template file's dir.
 * @params `fileInfo.file` the file path that will to be created.
 * @params `fileInfo.template` the template content that will to be created.
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
