export const SUCCESS_COLOR = '\x1b[32m';
export const ERROR_COLOR = '\x1b[31m';
export const WARNING_COLOR = '\x1b[33m';

export const consoleStatusMap = {
  success: { color: SUCCESS_COLOR, prefix: 'Success: ' },
  error: { color: ERROR_COLOR, prefix: 'Error: ' },
  warning: { color: WARNING_COLOR, prefix: 'Warning: ' },
};

export type ConsoleStatus = keyof typeof consoleStatusMap;
