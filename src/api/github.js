const GITHUB_GRAPHQL = "https://api.github.com/graphql";

function getToken() {
  return import.meta.env.VITE_GITHUB_TOKEN || "";
}

export async function fetchContributions(username, fromDate, toDate) {
  const token = getToken();
  if (!token) return null;

  const query = `
    query($user: String!, $from: DateTime!, $to: DateTime!) {
      user(login: $user) {
        contributionsCollection(from: $from, to: $to) {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                contributionCount
                date
              }
            }
          }
        }
      }
    }
  `;

  try {
    const res = await fetch(GITHUB_GRAPHQL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables: {
          user: username,
          from: fromDate,
          to: toDate,
        },
      }),
    });
    const json = await res.json();
    if (json.errors) return null;
    const weeks =
      json.data?.user?.contributionsCollection?.contributionCalendar?.weeks ||
      [];
    const items = [];
    for (const week of weeks) {
      for (const day of week.contributionDays || []) {
        items.push({ date: day.date, count: day.contributionCount });
      }
    }
    return items;
  } catch {
    return null;
  }
}
