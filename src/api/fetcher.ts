export async function fetcher<T>(
  url: string,
  access_token: string
): Promise<T> {
  const http = "http";
  const host = "localhost";
  const port = "9090";

  const res = await fetch(http + "://" + host + ":" + port + url, {
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
