import { ConsoleStatus, consoleStatusMap } from '../constants/colors';

const consoleLog = <T>(status: ConsoleStatus, content: T) => {
  const { color, prefix } = consoleStatusMap[status];

  console.log(color, `${prefix}${content}`);
};

export const consoleSuccess = <T>(content: T) => consoleLog<T>('success', content);

export const consoleError = <T>(content: T) => consoleLog<T>('error', content);

export const consoleWarning = <T>(content: T) => consoleLog<T>('warning', content);
