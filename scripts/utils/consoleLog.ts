const SUCCESS_COLOR = '\x1B[32m%s\x1B[39m';
const ERROR_COLOR = '\x1B[32m%s\x1B[39m';
const WARNING_COLOR = '\x1B[32m%s\x1B[39m';

const consoleStatusMap = {
  success: { color: SUCCESS_COLOR, prefix: 'Success: ' },
  error: { color: ERROR_COLOR, prefix: 'Error: ' },
  warning: { color: WARNING_COLOR, prefix: 'Warning: ' },
};

type ConsoleStatus = keyof typeof consoleStatusMap;

export const consoleByStatus = <T>(status: ConsoleStatus, content: T): void => {
  const { color, prefix } = consoleStatusMap[status];
  console.log(color, `${prefix}${content}`);
};

export const consoleSuccess = <T>(content: T): void => consoleByStatus<T>('success', content);

export const consoleError = <T>(content: T): void => consoleByStatus<T>('error', content);

export const consoleWarning = <T>(content: T): void => consoleByStatus<T>('warning', content);
