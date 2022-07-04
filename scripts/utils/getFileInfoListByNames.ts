import { FileInfoList, GetFileList, Names } from '../type';

/**
 * Inject names to getFileList callback, return file info list.
 * @param {Names} names the converted names object.
 * @param {GetFileList} callback getFileList callback.
 * @return {FileInfoList} execute getFileList callback, get file info list.
 */
export const getFileInfoListByNames = (names: Names, callback: GetFileList): FileInfoList =>
  callback({ ...names });
