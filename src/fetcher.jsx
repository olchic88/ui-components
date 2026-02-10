const BASE_URL = "https://www.greatfrontend.com/api/projects/challenges/";

export async function get(endpoint) {
  const response = await fetch(BASE_URL + endpoint);

  if (!response.ok) {
    throw new Error(
      `Failed to fetch: ${response.status} ${response.statusText}`,
    ); // HTTP (4xx, 5xx)
  }

  const data = await response.json();

  return data;
}

export async function callApi(method, endpoint, data) {
  const response = await fetch(BASE_URL + endpoint, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(
      `Failed to fetch: ${response.status} ${response.statusText}`,
    ); // HTTP (4xx, 5xx)
  }

  const result = await response.json();

  return result;
}
