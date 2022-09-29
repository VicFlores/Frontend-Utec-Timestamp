import axios from 'axios';

export default async function verifyTokenHandler(req: any, res: any) {
  try {
    const { MyTokenCookie } = req.cookies;

    console.log('MyTokenCookie', MyTokenCookie);

    const result = await axios.get(
      'https://backend-utec-timestamp.herokuapp.com/api/v1/login/validation/token',
      {
        headers: {
          token: MyTokenCookie,
        },
      }
    );

    return result;
  } catch (error) {
    console.log(error);
  }
}
