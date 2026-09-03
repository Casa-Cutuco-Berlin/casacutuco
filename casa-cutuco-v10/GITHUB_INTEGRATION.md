# GitHub Integration with Vercel Connect

This project uses **Vercel Connect** to securely authenticate with GitHub and perform automated tasks.

## Setup

### 1. Install Dependencies
```bash
npm install @vercel/connect
```

### 2. Configure GitHub Connection in Vercel

1. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project: `casa-cutuco-v10`
3. Navigate to **Settings > Integrations**
4. Click **Connect > GitHub**
5. Authorize the connection

### 3. Update Project Identifier

Replace `'github/casa-cutuco-v10'` with your actual Vercel project identifier if different.

## Usage

### Get GitHub Token

```typescript
import { getGitHubToken } from '@/lib/github';

const token = await getGitHubToken();
// Use token for authenticated GitHub API calls
```

### Make GitHub API Calls

```typescript
import { callGitHubAPI } from '@/lib/github';

// Get repository info
const repo = await callGitHubAPI('/repos/jsoriano1045/casacutuco');

// Create an issue
const issue = await callGitHubAPI('/repos/jsoriano1045/casacutuco/issues', 'POST', {
  title: 'New Issue',
  body: 'Issue description'
});
```

### Create Automated Commits

```typescript
import { createCommit } from '@/lib/github';

await createCommit(
  'jsoriano1045',           // owner
  'casacutuco',             // repo
  'main',                   // branch
  'Update files',           // commit message
  {
    'file1.md': '# Content',
    'file2.json': '{"key": "value"}'
  }
);
```

## API Routes

### GET `/api/github-token`
Verifies GitHub token retrieval (for testing).

**Response:**
```json
{
  "success": true,
  "message": "GitHub token retrieved successfully",
  "tokenLength": 40
}
```

## Security Notes

- ✅ Tokens are only used server-side
- ✅ Never expose tokens in client-side code
- ✅ Use GitHub's fine-grained personal access tokens when possible
- ✅ Implement rate limiting for API calls
- ✅ Log and monitor API usage

## Features

- 📝 Create commits programmatically
- 📋 Read/write issues and pull requests
- 🔀 Manage branches and refs
- 🚀 Trigger GitHub Actions workflows
- 📊 Read repository data and statistics

## Documentation

- [Vercel Connect Docs](https://vercel.com/docs/workflow-automation/integrations)
- [GitHub API Reference](https://docs.github.com/en/rest)
