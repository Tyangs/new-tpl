export type FileTemplateInfo = {
  file: string;
  template?: string;
};

export type FileInfoList = {
  [x in string]: FileTemplateInfo[];
};

export type Names = {
  name: string;
  camelCaseName: string;
  pascalCaseName: string;
  snakeCaseName: string;
  kebabCaseName: string;
};

export type GetFileList = (names: Names) => FileInfoList;

export interface IGenTemplateOptions {
  templateDirPath: string;
  getFileList: GetFileList;
}
