/**
 * Environment configuration management for the Physical AI & Humanoid Robotics Textbook
 */

interface Config {
  // API Configuration
  readonly OPENAI_API_KEY: string;
  readonly GEMINI_API_KEY?: string;
  readonly QDRANT_URL: string;
  readonly QDRANT_API_KEY?: string;
  readonly NEON_DATABASE_URL: string;

  // Authentication
  readonly BETTER_AUTH_SECRET: string;
  readonly BETTER_AUTH_URL: string;

  // Application
  readonly NODE_ENV: 'development' | 'production' | 'test';
  readonly PORT?: number;
  readonly BASE_URL: string;

  // Features
  readonly ENABLE_TRANSLATION: boolean;
  readonly ENABLE_RAG_CHAT: boolean;
  readonly ENABLE_PERSONALIZATION: boolean;

  // Performance
  readonly CACHE_TTL: number; // in seconds
  readonly REQUEST_TIMEOUT: number; // in milliseconds
  readonly MAX_CONTENT_SIZE: number; // in bytes
}

// Default configuration values
const defaults = {
  PORT: 3000,
  ENABLE_TRANSLATION: true,
  ENABLE_RAG_CHAT: true,
  ENABLE_PERSONALIZATION: true,
  CACHE_TTL: 3600, // 1 hour
  REQUEST_TIMEOUT: 30000, // 30 seconds
  MAX_CONTENT_SIZE: 1048576, // 1 MB
  BASE_URL: 'http://localhost:3000',
};

// Validate required environment variables
const requiredEnvVars = [
  'OPENAI_API_KEY',
  'QDRANT_URL',
  'NEON_DATABASE_URL',
  'BETTER_AUTH_SECRET',
  'BETTER_AUTH_URL',
];

const validateEnvironment = () => {
  const missing: string[] = [];

  for (const envVar of requiredEnvVars) {
    if (!process.env[envVar]) {
      missing.push(envVar);
    }
  }

  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
  }

  // Validate NODE_ENV
  const nodeEnv = process.env.NODE_ENV;
  if (nodeEnv && !['development', 'production', 'test'].includes(nodeEnv)) {
    throw new Error(`Invalid NODE_ENV value: ${nodeEnv}. Must be 'development', 'production', or 'test'`);
  }
};

// Initialize configuration
const initializeConfig = (): Config => {
  validateEnvironment();

  return {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY!,
    GEMINI_API_KEY: process.env.GEMINI_API_KEY,
    QDRANT_URL: process.env.QDRANT_URL!,
    QDRANT_API_KEY: process.env.QDRANT_API_KEY,
    NEON_DATABASE_URL: process.env.NEON_DATABASE_URL!,

    BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET!,
    BETTER_AUTH_URL: process.env.BETTER_AUTH_URL!,

    NODE_ENV: (process.env.NODE_ENV as 'development' | 'production' | 'test') || 'development',
    PORT: parseInt(process.env.PORT || defaults.PORT.toString(), 10),
    BASE_URL: process.env.BASE_URL || defaults.BASE_URL,

    ENABLE_TRANSLATION: process.env.ENABLE_TRANSLATION === 'true' || defaults.ENABLE_TRANSLATION,
    ENABLE_RAG_CHAT: process.env.ENABLE_RAG_CHAT === 'true' || defaults.ENABLE_RAG_CHAT,
    ENABLE_PERSONALIZATION: process.env.ENABLE_PERSONALIZATION === 'true' || defaults.ENABLE_PERSONALIZATION,

    CACHE_TTL: parseInt(process.env.CACHE_TTL || defaults.CACHE_TTL.toString(), 10),
    REQUEST_TIMEOUT: parseInt(process.env.REQUEST_TIMEOUT || defaults.REQUEST_TIMEOUT.toString(), 10),
    MAX_CONTENT_SIZE: parseInt(process.env.MAX_CONTENT_SIZE || defaults.MAX_CONTENT_SIZE.toString(), 10),
  };
};

// Create and export the configuration
export const config: Config = initializeConfig();

// Utility function to check if running in development
export const isDevelopment = config.NODE_ENV === 'development';

// Utility function to check if running in production
export const isProduction = config.NODE_ENV === 'production';

// Utility function to check if running in test
export const isTest = config.NODE_ENV === 'test';

// Export the Config interface for type checking
export type { Config };