import { NextFunction, Request, Response } from 'express';

type Exception = {
  message: string,
  code: number
};

const classeValidation = (classe: string): Exception | undefined => {
  if (!classe) return { message: '"classe" is required', code: 400 };
  if (typeof classe !== 'string') {
    return { message: '"classe" must be a string', code: 422 };
  }
  if (classe.length <= 2) {
    return { message: '"classe" length must be at least 3 characters long', code: 422 };
  }
};

const userNameValidation = (username: string): Exception | undefined => {
  if (!username) return { message: '"username" is required', code: 400 };
  if (typeof username !== 'string') {
    return { message: '"username" must be a string', code: 422 };
  }
  if (username.length <= 2) {
    return { message: '"username" length must be at least 3 characters long', code: 422 };
  }
};

const levelValidation = (level: number): Exception | undefined => {
  if (level <= 0) {
    return { message: '"level" must be greater than or equal to 1', code: 422 };
  }
  if (!level) return { message: '"level" is required', code: 400 };
  if (typeof level !== 'number') {
    return { message: '"level" must be a number', code: 422 };
  }
};

const passwordValidation = (password: string): Exception | undefined => {
  if (!password) return { message: '"password" is required', code: 400 };
  if (typeof password !== 'string') {
    return { message: '"password" must be a string', code: 422 };
  }
  if (password.length <= 8) {
    return { message: '"password" length must be at least 8 characters long', code: 422 };
  }
};

const userValidation = (req:Request, res:Response, next:NextFunction) => {
  const { classe, username, level, password } = req.body;
  const classeError = classeValidation(classe);
  const userNameError = userNameValidation(username);
  const levelError = levelValidation(level);
  const passwordError = passwordValidation(password);
  if (classeError) return res.status(classeError.code).json({ message: classeError.message });
  if (userNameError) return res.status(userNameError.code).json({ message: userNameError.message });
  if (levelError) return res.status(levelError.code).json({ message: levelError.message });
  if (passwordError) return res.status(passwordError.code).json({ message: passwordError.message });
  return next();
};

export default userValidation;