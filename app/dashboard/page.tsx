import { HttpError, serverFetch } from "@/lib/server-fetch";
import { redirect } from "next/navigation";
import { LoginResponse } from "@/lib/types/api.types";

export default async function DashboardLayout() {
  try {
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
  } catch (err) {
    if (err instanceof HttpError && err.status === 401) {
      redirect("/login");
    }

    throw err;
  }
}
