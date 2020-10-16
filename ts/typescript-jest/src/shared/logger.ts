export interface Logger {
  debug: (message: string, ...optional: string[]) => void;
  info: (message: string, ...optional: string[]) => void;
  warn: (message: string, ...optional: string[]) => void;
  error: (message: string, ...optional: string[]) => void;
}
