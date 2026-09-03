import { getToken } from '@vercel/connect';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // Get GitHub token for authenticated API calls
    const token = await getToken('github/casa-cutuco-v10', {
      subject: { type: 'app' }
    });

    if (!token) {
      return NextResponse.json(
        { error: 'Failed to retrieve GitHub token' },
        { status: 401 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'GitHub token retrieved successfully',
        // Note: Never expose the full token to the client in production
        // This is just for verification
        tokenLength: token.length
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('GitHub token error:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve GitHub token', details: String(error) },
      { status: 500 }
    );
  }
}
