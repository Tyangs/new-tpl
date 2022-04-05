import { FileInfoList, Names, GetFileList } from '../type';

/**
 * Inject names to getFileList callback, return file info list.
 * @params `Names` the converted names object.
 * @params `GetFileList` getFileList callback.
 * @return `FileInfoList` execute getFileList callback, get file info list.
 */
export const getFileInfoListByNames = (names: Names, callback: GetFileList): FileInfoList =>
	callback({ ...names });
