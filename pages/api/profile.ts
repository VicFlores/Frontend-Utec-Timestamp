import jwt from 'jsonwebtoken';

export default async function profileHandler(req: any, res: any) {
  try {
    const { MyTokenCookie } = req.cookies;

    const decodedToken: any = jwt.decode(MyTokenCookie);

    return res.status(200).json({ role: decodedToken?.rol });
  } catch (error) {
    return res.status(400).json(error);
  }
}
