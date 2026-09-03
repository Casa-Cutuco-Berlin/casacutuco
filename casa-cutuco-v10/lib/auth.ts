import { getToken } from '@vercel/connect';

/**
 * Get authenticated GitHub token for a specific user
 * @param userId Unique user identifier
 * @returns GitHub access token for the user
 */
export async function getUserGitHubToken(userId: string): Promise<string> {
  try {
    const token = await getToken('github/casa-cutuco-v10', {
      subject: {
        type: 'user',
        id: userId
      }
    });

    if (!token) {
      throw new Error(`No token found for user: ${userId}`);
    }

    return token;
  } catch (error) {
    console.error('Error getting user GitHub token:', error);
    throw error;
  }
}

/**
 * Get GitHub authorization URL for a user
 * Redirects user to this URL to start OAuth flow
 * @param userId Unique user identifier
 * @returns Authorization URL
 */
export async function getGitHubAuthUrl(userId: string): Promise<string> {
  return `/api/auth/github/authorize?userId=${encodeURIComponent(userId)}`;
}

/**
 * Make authenticated GitHub API call on behalf of a user
 * @param userId User identifier
 * @param endpoint GitHub API endpoint
 * @param method HTTP method
 * @param body Request body for POST/PATCH/PUT
 * @returns API response
 */
export async function callUserGitHubAPI(
  userId: string,
  endpoint: string,
  method: string = 'GET',
  body?: Record<string, unknown>
) {
  try {
    const token = await getUserGitHubToken(userId);

    const options: RequestInit = {
      method,
      headers: {
        Authorization: `token ${token}`,
        'Content-Type': 'application/json',
        'X-GitHub-Api-Version': '2022-11-28'
      }
    };

    if (body && (method === 'POST' || method === 'PATCH' || method === 'PUT')) {
      options.body = JSON.stringify(body);
    }

    const response = await fetch(`https://api.github.com${endpoint}`, options);

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`GitHub API call failed for user ${userId}:`, error);
    throw error;
  }
}

/**
 * Get authenticated GitHub user information
 * @param userId User identifier
 * @returns GitHub user profile data
 */
export async function getGitHubUser(userId: string) {
  return callUserGitHubAPI(userId, '/user');
}

/**
 * Get user's GitHub repositories
 * @param userId User identifier
 * @returns List of repositories
 */
export async function getUserGitHubRepos(userId: string) {
  return callUserGitHubAPI(userId, '/user/repos?type=all&per_page=100');
}
