const BASE_URL = "https://www.greatfrontend.com/api/projects/challenges/";

export async function get(endpoint) {
  const response = await fetch(BASE_URL + endpoint);

  if (!response.ok) {
    throw new Error(
      `Failed to fetch: ${response.status} ${response.statusText}`,
    );
  }
  return response.json();
}
