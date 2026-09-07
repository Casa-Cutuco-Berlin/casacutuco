'use client';

import { useRouter } from 'next/navigation';

interface GitHubLoginButtonProps {
  userId?: string;
  className?: string;
}

/**
 * GitHub Login Button Component
 * Initiates OAuth flow for GitHub authentication
 */
export function GitHubLoginButton({ userId, className = '' }: GitHubLoginButtonProps) {
  const router = useRouter();

  const handleLogin = async () => {
    try {
      // Use provided userId or generate a temporary one
      const id = userId || 'usr_' + Math.random().toString(36).substring(7);

      // Redirect to authorization endpoint
      router.push(`/api/auth/github/authorize?userId=${encodeURIComponent(id)}`);
    } catch (error) {
      console.error('Login failed:', error);
      alert('Failed to initiate GitHub login');
    }
  };

  return (
    <button
      onClick={handleLogin}
      className={`px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-semibold ${className}`}
      aria-label="Login with GitHub"
    >
      <span className="flex items-center gap-2">
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.544 2.914 1.19.092-.926.35-1.557.636-1.917-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.817c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.375.203 2.394.1 2.647.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.578.688.48C17.138 18.195 20 14.44 20 10.017 20 4.484 15.522 0 10 0z"
            clipRule="evenodd"
          />
        </svg>
        Login with GitHub
      </span>
    </button>
  );
}
