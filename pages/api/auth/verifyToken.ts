export default async function profileHandler(req: any, res: any) {
  try {
    const { MyTokenCookie } = req.cookies;
    return res.status(200).json(MyTokenCookie);
  } catch (error) {
    return res.status(400).json(error);
  }
}
