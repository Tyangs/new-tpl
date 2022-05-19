import * as _ from 'lodash';

import { Names } from '../type';

/**
 * Convert name to different case name, return converted names object.
 * @param {string} name the string to convert.
 * @return {Names} return the compiled names object.
 */
export const getConvertedName = (name: string): Names => {
	return {
		name,
		camelCaseName: _.camelCase(name),
		pascalCaseName: _.startCase(_.camelCase(name)).replace(/ /g, ''),
		snakeCaseName: _.snakeCase(name),
		kebabCaseName: _.kebabCase(name),
	};
};
