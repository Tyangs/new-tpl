import * as fs from 'fs';
import * as _ from 'lodash';
import * as path from 'path';

import { FileInfoList } from '../type';
import { consoleError, consoleSuccess } from './consoleLog';
import { createFile } from './createFile';
import { createFileByTemplate } from './createFileByTemplate';

const cwdPath = process.cwd();

/**
 * Create files by file template list.
 * @param {string} name the name that will to convert.
 * @param {string} templateDirPath the customize or default template file's dir.
 * @param {FileInfoList} fileInfoList the file template list for generate files.
 */
export const createFileList = (
	name: string,
	templateDirPath: string,
	fileInfoList: FileInfoList
) => {
	Object.keys(fileInfoList).forEach(dir => {
		const curDir = path.resolve(cwdPath, dir);
		// create dir
		fs.mkdir(curDir, { recursive: true }, error => {
			if (error) {
				consoleError(error);
				return;
			}
			consoleSuccess(`${curDir} directory has been created successfully！`);
			// generate files in this dir
			const curFiles = fileInfoList[dir];
			curFiles.forEach(item => {
				if (item.template) {
					createFileByTemplate(name, curDir, templateDirPath, item);
				} else {
					const file = path.resolve(curDir, item.file);
					createFile(file, '');
				}
			});
		});
	});
};
