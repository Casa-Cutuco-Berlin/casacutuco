import { getToken } from '@vercel/connect';
import { NextRequest, NextResponse } from 'next/server';

/**
 * OAuth callback handler - processes GitHub authorization response
 * Vercel Connect redirects back to this endpoint after user authorizes
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const userId = searchParams.get('userId');
    const code = searchParams.get('code');
    const error = searchParams.get('error');

    if (error) {
      return NextResponse.json(
        { error: `Authorization failed: ${error}` },
        { status: 400 }
      );
    }

    if (!userId) {
      return NextResponse.json(
        { error: 'Missing userId parameter' },
        { status: 400 }
      );
    }

    // Get user's authenticated token
    const token = await getToken('github/casa-cutuco-v10', {
      subject: {
        type: 'user',
        id: userId
      }
    });

    if (!token) {
      return NextResponse.json(
        { error: 'Failed to retrieve user token' },
        { status: 401 }
      );
    }

    // Success! Token is ready for this user
    // In production, store this in a database or session
    return NextResponse.json(
      {
        success: true,
        message: 'GitHub authorization successful',
        userId,
        tokenAvailable: true
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('OAuth callback error:', error);
    return NextResponse.json(
      { error: 'OAuth callback failed', details: String(error) },
      { status: 500 }
    );
  }
}
