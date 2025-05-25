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
  // create user
  // create verification code
  // send verification email
  // create session
  // sigh access and refresh tokens
  // return user and tokens
};
