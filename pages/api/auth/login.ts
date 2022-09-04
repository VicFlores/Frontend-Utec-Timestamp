import axios from 'axios';
import { serialize } from 'cookie';

type TLogin = {
  email: string;
  passwd: string;
};

export default async function loginHandler(req: any, res: any) {
  try {
    const { email, passwd } = req.body as unknown as TLogin;

    const result = await axios.post(
      'https://backend-utec-timestamp.herokuapp.com/api/v1/login',
      {
        email,
        passwd,
      }
    );

    const serialized = serialize('MyTokenCookie', result.data.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 1000 * 60 * 60 * 24 * 30,
      path: '/',
    });

    res.setHeader('Set-Cookie', serialized);

    return res.status(200).json('Login Successfully');
  } catch (error: any) {
    if (error.response) {
      return res.status(401).json(error.response.data);
    }
  }
}
