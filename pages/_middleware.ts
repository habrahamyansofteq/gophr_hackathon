import {NextRequest, NextResponse} from 'next/server';

import {stripDefaultLocale} from '~/utils';

const PUBLIC_FILE = /\.(.*)$/;

export const middleware = (request: NextRequest): NextResponse | undefined => {
  const url = request.nextUrl.clone();
  const shouldHandleLocale =
    !PUBLIC_FILE.test(request.nextUrl.pathname) &&
    !request.nextUrl.pathname.includes('/api/') &&
    request.nextUrl.locale === 'default';

  if (!shouldHandleLocale) return;

  url.pathname = `/en${stripDefaultLocale(request.nextUrl.pathname)}${request.nextUrl.search}`;

  return NextResponse.redirect(url);
};
