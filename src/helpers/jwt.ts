import jwt from 'jsonwebtoken';

type Payload = {
  user?: number;
};

const tokenGenerator = (payload: Payload, secret: string) => {
  const token = jwt
    .sign(payload, secret, { expiresIn: '7d', algorithm: 'HS256' });
  return token;
};

export default tokenGenerator;