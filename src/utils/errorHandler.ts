/**
 * Error handling utilities for the Physical AI & Humanoid Robotics Textbook
 */

export class TextbookError extends Error {
  public statusCode: number;
  public isOperational: boolean;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true; // Mark as operational error vs programming error

    Object.setPrototypeOf(this, TextbookError.prototype);
  }
}

export class ValidationError extends TextbookError {
  constructor(message: string) {
    super(message, 400); // Bad Request
    Object.setPrototypeOf(this, ValidationError.prototype);
  }
}

export class NotFoundError extends TextbookError {
  constructor(message: string = 'Resource not found') {
    super(message, 404);
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
}

export class UnauthorizedError extends TextbookError {
  constructor(message: string = 'Unauthorized access') {
    super(message, 401);
    Object.setPrototypeOf(this, UnauthorizedError.prototype);
  }
}

export class ForbiddenError extends TextbookError {
  constructor(message: string = 'Forbidden access') {
    super(message, 403);
    Object.setPrototypeOf(this, ForbiddenError.prototype);
  }
}

export class RateLimitError extends TextbookError {
  constructor(message: string = 'Rate limit exceeded') {
    super(message, 429);
    Object.setPrototypeOf(this, RateLimitError.prototype);
  }
}

/**
 * Error handling middleware for Express/Fastify
 */
export const errorHandler = (err: any, req: any, res: any, next: any) => {
  // Set default error if not already set by application
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  // Log error for monitoring
  logError(err, req);

  // Don't leak error details in production
  const isDevelopment = process.env.NODE_ENV === 'development';
  const error = isDevelopment ? err : { ...err };

  // Clean up error object for production
  if (!isDevelopment) {
    error.message = err.isOperational ? err.message : 'Something went wrong!';
  }

  // Send response
  res.status(err.statusCode).json({
    status: err.status,
    message: error.message,
    ...(isDevelopment && { stack: err.stack }),
  });
};

/**
 * Logging utility
 */
export const logError = (error: Error, context?: any) => {
  const errorLog = {
    timestamp: new Date().toISOString(),
    message: error.message,
    stack: error.stack,
    context: context || {},
    ...(error instanceof TextbookError && { statusCode: (error as TextbookError).statusCode }),
  };

  // In a real application, you might send this to a logging service
  console.error('Textbook Error:', JSON.stringify(errorLog, null, 2));
};

export const logInfo = (message: string, context?: any) => {
  const infoLog = {
    timestamp: new Date().toISOString(),
    level: 'info',
    message,
    context: context || {},
  };

  console.log('Textbook Info:', JSON.stringify(infoLog, null, 2));
};

export const logWarning = (message: string, context?: any) => {
  const warningLog = {
    timestamp: new Date().toISOString(),
    level: 'warning',
    message,
    context: context || {},
  };

  console.warn('Textbook Warning:', JSON.stringify(warningLog, null, 2));
};