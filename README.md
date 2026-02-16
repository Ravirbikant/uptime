# GitHub Profile Page Clone

A React app that replicates the GitHub user profile page layout and behavior. Built with Vite.

## Features

- GitHub-style UI: navbar, profile tabs, left profile panel, main content (popular repos, contribution heatmap, activity overview, contribution activity), footer
- **User profile (left panel):** Fetched from [GitHub User API](https://docs.github.com/en/rest/reference/users#get-a-user) (`GET https://api.github.com/users/:username`)
- **Contribution heatmap:** Fetched via GitHub GraphQL API and rendered with ECharts. Requires a personal access token for live data.
- Responsive layout, CSS-only styling
- Working tabs (Overview, Repositories, Projects, Packages, Stars); non-Overview tabs show placeholder content

## Setup

```bash
npm install
npm run dev
```

## Optional: Contribution graph live data

The contribution calendar uses the GitHub GraphQL API, which requires authentication. Without a token, the app falls back to mock contribution data.

1. Create a [GitHub personal access token](https://github.com/settings/tokens) with no scopes (or `read:user`).
2. Create a `.env` file in the project root:
   ```
   VITE_GITHUB_TOKEN=your_token_here
   ```
3. Restart the dev server. The contribution heatmap will show real data for the user in `src/config/profileConfig.json` (default: `shreeramk`).

## API references

- [GitHub REST API](https://docs.github.com/en/rest/reference)
- [GitHub Users API](https://docs.github.com/en/rest/reference/users#get-a-user)
