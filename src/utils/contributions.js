function generateMockContributions() {
  const items = [];
  const years = [2024, 2025, 2026];
  const rng = (seed) => () => ((seed = (seed * 9301 + 49297) % 233280) / 233280);
  const rand = rng(12345);
  for (const year of years) {
    const start = new Date(year, 0, 1);
    const end = new Date(year, 11, 31);
    for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
      const count = rand() > 0.6 ? Math.floor(rand() * 15) : 0;
      items.push({
        date: d.toISOString().split("T")[0],
        count,
      });
    }
  }
  return items;
}

export const MOCK_CONTRIBUTIONS = generateMockContributions();
