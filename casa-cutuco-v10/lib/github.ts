import { getToken } from '@vercel/connect';

/**
 * Get authenticated GitHub token for API calls
 * @returns GitHub access token string
 */
export async function getGitHubToken(): Promise<string> {
  try {
    const token = await getToken('github/casa-cutuco-v10', {
      subject: { type: 'app' }
    });

    if (!token) {
      throw new Error('Failed to retrieve GitHub token from Vercel Connect');
    }

    return token;
  } catch (error) {
    console.error('Error getting GitHub token:', error);
    throw error;
  }
}

/**
 * Make authenticated requests to GitHub API
 * @param endpoint GitHub API endpoint (e.g., '/repos/owner/repo')
 * @param method HTTP method (default: GET)
 * @param body Request body for POST/PATCH/PUT
 * @returns API response data
 */
export async function callGitHubAPI(
  endpoint: string,
  method: string = 'GET',
  body?: Record<string, unknown>
) {
  try {
    const token = await getGitHubToken();

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
    console.error('GitHub API call failed:', error);
    throw error;
  }
}

/**
 * Create a commit in a GitHub repository
 * @param owner Repository owner
 * @param repo Repository name
 * @param branch Branch name
 * @param message Commit message
 * @param changes Object with filename: content pairs
 */
export async function createCommit(
  owner: string,
  repo: string,
  branch: string,
  message: string,
  changes: Record<string, string>
) {
  try {
    // Get current branch ref
    const ref = await callGitHubAPI(`/repos/${owner}/${repo}/git/ref/heads/${branch}`);
    const commitSha = ref.object.sha;

    // Create tree with file changes
    const tree = Object.entries(changes).map(([path, content]) => ({
      path,
      mode: '100644',
      type: 'blob',
      content
    }));

    const treeResponse = await callGitHubAPI(
      `/repos/${owner}/${repo}/git/trees`,
      'POST',
      {
        base_tree: commitSha,
        tree
      }
    );

    // Create commit
    const commitResponse = await callGitHubAPI(
      `/repos/${owner}/${repo}/git/commits`,
      'POST',
      {
        message,
        tree: treeResponse.sha,
        parents: [commitSha]
      }
    );

    // Update branch reference
    await callGitHubAPI(
      `/repos/${owner}/${repo}/git/refs/heads/${branch}`,
      'PATCH',
      { sha: commitResponse.sha }
    );

    return commitResponse;
  } catch (error) {
    console.error('Failed to create commit:', error);
    throw error;
  }
}
