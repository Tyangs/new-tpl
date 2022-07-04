const SUCCESS_COLOR = '\x1B[32m%s\x1B[39m';
const ERROR_COLOR = '\x1B[32m%s\x1B[39m';
const WARNING_COLOR = '\x1B[32m%s\x1B[39m';

const consoleColorMap = {
  success: SUCCESS_COLOR,
  error: ERROR_COLOR,
  warning: WARNING_COLOR,
};

type ConsoleStatus = keyof typeof consoleColorMap;

export const consoleByStatus = <T>(status: ConsoleStatus, content: T): void => {
  const color = consoleColorMap[status];
  console.log(color, content);
};

export const consoleSuccess = <T>(content: T): void => consoleByStatus<T>('success', content);

export const consoleError = <T>(content: T): void => consoleByStatus<T>('error', content);

export const consoleWarning = <T>(content: T): void => consoleByStatus<T>('warning', content);
