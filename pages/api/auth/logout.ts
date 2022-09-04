import { serialize } from 'cookie';

export default function logoutHandler(req: any, res: any) {
  const { MyTokenCookie } = req.cookies;

  if (!MyTokenCookie) {
    return res.status(401).json({ error: 'No token provided' });
  }

  try {
    const serialized = serialize('MyTokenCookie', 'null', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 0,
      path: '/',
    });

    res.setHeader('Set-Cookie', serialized);
    res.status(200).json('logout successfully');
  } catch (error) {
    return res.status(401).json('Invalid token');
  }
}
