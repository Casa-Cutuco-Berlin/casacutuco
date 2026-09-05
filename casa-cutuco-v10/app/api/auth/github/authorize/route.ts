import { startAuthorization } from '@vercel/connect';
import { NextRequest, NextResponse } from 'next/server';

/**
 * Initiate GitHub OAuth authorization flow for user
 * Redirects user to GitHub login/consent screen
 */
export async function GET(request: NextRequest) {
  try {
    // Get or generate user ID (in production, use authenticated session user ID)
    const searchParams = request.nextUrl.searchParams;
    const userId = searchParams.get('userId') || 'usr_anonymous_' + Math.random().toString(36).substring(7);

    // Start authorization flow
    const { url: authorizationUrl } = await startAuthorization('github/casa-cutuco-v10', {
      subject: {
        type: 'user',
        id: userId
      }
    });

    if (!authorizationUrl) {
      return NextResponse.json(
        { error: 'Failed to start authorization flow' },
        { status: 500 }
      );
    }

    // Redirect user to GitHub authorization page
    return NextResponse.redirect(authorizationUrl);
  } catch (error) {
    console.error('Authorization flow error:', error);
    return NextResponse.json(
      { error: 'Failed to initiate GitHub authorization', details: String(error) },
      { status: 500 }
    );
  }
}
