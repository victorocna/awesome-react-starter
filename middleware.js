import { NextResponse } from 'next/server';

export const config = {
  matcher: ['/(.*)'],
};

// Define public assets that should remain accessible even during maintenance mode
const PUBLIC_FILES_OR_DIRECTORIES = [
  'documents',
  'favicon.ico',
  'favicon.png',
  'icons',
  'images',
  'manifest.json',
];

const isPublicFileOrDirectory = (pathname) =>
  PUBLIC_FILES_OR_DIRECTORIES.some((item) => pathname.startsWith(`/${item}`));

export default async function middleware(req) {
  const url = req.nextUrl.clone();
  // Check if maintenance mode is enabled via environment variable
  const isMaintenanceMode = process.env.MAINTENANCE_MODE === 'yes';

  if (!isMaintenanceMode && url.pathname === '/maintenance') {
    url.pathname = '/';
    return NextResponse.redirect(url);
  }

  if (
    isMaintenanceMode &&
    url.pathname !== '/maintenance' &&
    !url.pathname.startsWith('/_next') &&
    !isPublicFileOrDirectory(url.pathname)
  ) {
    url.pathname = '/maintenance';
    return NextResponse.redirect(url);
  }

  // Allow the request to continue normally
  return NextResponse.next();
}
