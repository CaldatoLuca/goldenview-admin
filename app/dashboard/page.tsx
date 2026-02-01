import { serverFetch } from "@/lib/server-fetch";
import { LoginResponse } from "@/lib/types/api.types";

export default async function Dashboard() {
  const { user } = await serverFetch<LoginResponse>("/users/me");

  return (
    <div>
      <header>
        <p>Loggato come: {user.email}</p>
      </header>
      <main>
        <h1>Benvenuto nella dashboard!</h1>
      </main>
    </div>
  );
}
