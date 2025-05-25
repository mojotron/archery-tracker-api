import bcrypt from "bcrypt";

export const hashPassword = async (
  password: string,
  saltRounds: number = 10
) => {
  const salt = await bcrypt.genSalt(saltRounds);
  return bcrypt.hash(password, salt);
};

export const comparePasswords = async (
  password: string,
  hashedPassword: string
) => bcrypt.compare(password, hashedPassword).catch(() => false);
