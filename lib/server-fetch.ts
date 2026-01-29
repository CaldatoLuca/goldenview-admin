import { cookies } from "next/headers";

export class HttpError extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function serverFetch<T>(
  path: string,
  options: RequestInit = {},
): Promise<T> {
  const cookieStore = await cookies();

  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      cookie: cookieStore.toString(),
      ...options.headers,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new HttpError(res.status, res.statusText);
  }

  return res.json();
}
