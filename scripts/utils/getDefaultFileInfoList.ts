import { GetFileList } from '../type';

/**
 * Default file info list.
 * @param {Names} name to generate file info list.
 * @return {FileInfoList} default file info list.
 */
export const getDefaultFileInfoList: GetFileList = names => {
  const { name, pascalCaseName } = names;
  return {
    [`src/components/${name}`]: [
      {
        file: 'index.ts',
        template: 'index.ts.tpl',
      },
      {
        file: `${pascalCaseName}.tsx`,
        template: 'name.tsx.tpl',
      },
      {
        file: `type.ts`,
        template: 'type.ts.tpl',
      },
      {
        file: `index.scss`,
        template: 'index.scss.tpl',
      },
    ],
  };
};
