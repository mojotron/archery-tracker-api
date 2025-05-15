const getEnv = (key: string) => {
  const value = process.env[key];
  if (value === undefined) {
    throw new Error(`no env variable with ${key} key`);
  }
  return value;
};

export const PORT = getEnv("PORT");
export const NODE_ENV = getEnv("NODE_ENV");
export const JWT_SECRET = getEnv("JWT_SECRET");
export const JWT_REFRESH_SECRET = getEnv("JWT_REFRESH_SECRET");
export const APP_ORIGIN = getEnv("APP_ORIGIN");
export const EMAIL_SENDER = getEnv("EMAIL_SENDER");
export const RESEND_API_KEY = getEnv("RESEND_API_KEY");
