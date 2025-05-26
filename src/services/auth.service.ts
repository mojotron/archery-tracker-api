import prisma from "../config/prisma.js";
import { hashPassword } from "../utils/bcrypt";

type RegisterParams = {
  email: string;
  password: string;
  userAgent?: string;
};

export const registerUser = async ({
  email,
  password,
  userAgent,
}: RegisterParams) => {
  // verify existing user
  const userExists = await prisma.user.findUnique({ where: { email } });
  if (userExists) {
    throw new Error("User already exists");
  }
  // create user
  const hashedPassword = await hashPassword(password);
  const user = await prisma.user.create({
    data: { email, password: hashedPassword },
  });
  // create verification code
  // send verification email
  // create session
  // sigh access and refresh tokens
  // return user and tokens
};
