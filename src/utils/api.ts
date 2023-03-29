const BASE_URL = "https://randomuser.me/api";

export async function fetchUsers(nationality: string) {
  const url = `${BASE_URL}/?nat=${nationality}&results=3`;
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
}