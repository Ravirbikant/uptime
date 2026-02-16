import { createContext, useContext, useState, useEffect, useMemo, ReactNode } from "react";
import profileConfig from "../config/profileConfig.json";
import { fetchContributions, fetchUser } from "../api/github";
import { MOCK_CONTRIBUTIONS } from "../utils/contributions";

interface ContributionDay {
  date: string;
  count: number;
}

interface ProfileValue {
  user: Record<string, unknown>;
  contributions: { contributions: ContributionDay[] };
}

const ProfileContext = createContext<ProfileValue | null>(null);

export function ProfileProvider({ children }: { children: ReactNode }) {
  const [contributions, setContributions] = useState<{ contributions: ContributionDay[] } | null>(null);
  const [user, setUser] = useState<Record<string, unknown>>(() => (profileConfig as { user: Record<string, unknown> }).user);

  useEffect(() => {
    const username = (profileConfig as { user?: { login?: string } }).user?.login || "shreeramk";
    const now = new Date();
    const toDate = now.toISOString();
    const fromDate = new Date(now.getFullYear() - 2, 0, 1).toISOString();

    fetchContributions(username, fromDate, toDate).then((data) => {
      setContributions(data?.length ? { contributions: data } : { contributions: MOCK_CONTRIBUTIONS });
    });

    fetchUser(username).then((data) => {
      if (data) setUser({ ...(profileConfig as { user: Record<string, unknown> }).user, ...data });
    });
  }, []);

  const value = useMemo<ProfileValue>(
    () => ({
      user,
      contributions: contributions ?? { contributions: MOCK_CONTRIBUTIONS },
    }),
    [user, contributions]
  );

  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
}

export function useProfile(): ProfileValue {
  const ctx = useContext(ProfileContext);
  if (!ctx) throw new Error("useProfile must be used within ProfileProvider");
  return ctx;
}
