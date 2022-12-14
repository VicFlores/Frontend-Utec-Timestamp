import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import fetchAdapter from '@vespaiach/axios-fetch-adapter';
import axios from 'axios';

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('MyTokenCookie');

  if (token === undefined) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  try {
    const axiosInstance = axios.create({
      adapter: fetchAdapter,
    });

    await axiosInstance.get(
      'https://utec-timestamp-rebuild.onrender.com/api/v1/login/validation/token',
      {
        headers: {
          Authorization: token,
        },
      }
    );

    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

export const config = {
  matcher: ['/private/:path*', '/teachers/:path*'],
};
