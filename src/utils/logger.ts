/**
 * Logging infrastructure for the Physical AI & Humanoid Robotics Textbook
 */

export type LogLevel = 'debug' | 'info' | 'warn' | 'error';

export interface LogEntry {
  timestamp: string;
  level: LogLevel;
  message: string;
  context?: any;
  stack?: string;
}

export class Logger {
  private static instance: Logger;
  private logLevel: LogLevel = 'info';
  private enabled: boolean = true;

  private constructor() {}

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  public setLogLevel(level: LogLevel): void {
    this.logLevel = level;
  }

  public enable(enabled: boolean): void {
    this.enabled = enabled;
  }

  private shouldLog(level: LogLevel): boolean {
    if (!this.enabled) return false;

    const levels: LogLevel[] = ['debug', 'info', 'warn', 'error'];
    const currentLevelIndex = levels.indexOf(this.logLevel);
    const messageLevelIndex = levels.indexOf(level);

    return messageLevelIndex >= currentLevelIndex;
  }

  private log(level: LogLevel, message: string, context?: any): void {
    if (!this.shouldLog(level)) return;

    const logEntry: LogEntry = {
      timestamp: new Date().toISOString(),
      level,
      message,
      context,
    };

    // Add stack trace for error logs
    if (level === 'error') {
      logEntry.stack = new Error().stack;
    }

    // Output to console
    this.outputLog(logEntry);
  }

  private outputLog(entry: LogEntry): void {
    const formattedMessage = `[${entry.timestamp}] ${entry.level.toUpperCase()}: ${entry.message}`;

    switch (entry.level) {
      case 'error':
        console.error(formattedMessage, entry.context || '');
        break;
      case 'warn':
        console.warn(formattedMessage, entry.context || '');
        break;
      case 'info':
        console.info(formattedMessage, entry.context || '');
        break;
      case 'debug':
        console.debug(formattedMessage, entry.context || '');
        break;
    }
  }

  public debug(message: string, context?: any): void {
    this.log('debug', message, context);
  }

  public info(message: string, context?: any): void {
    this.log('info', message, context);
  }

  public warn(message: string, context?: any): void {
    this.log('warn', message, context);
  }

  public error(message: string, context?: any): void {
    this.log('error', message, context);
  }
}

// Create a global logger instance
export const logger = Logger.getInstance();

// Export convenience functions
export const debug = (message: string, context?: any) => logger.debug(message, context);
export const info = (message: string, context?: any) => logger.info(message, context);
export const warn = (message: string, context?: any) => logger.warn(message, context);
export const error = (message: string, context?: any) => logger.error(message, context);