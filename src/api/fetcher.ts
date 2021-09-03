import { serverURI } from "./url";

export async function fetcher<T>(access_token: string): Promise<T> {
  const res = await fetch(serverURI, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + access_token,
    },
  });

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  return res.json() as Promise<T>;
}
