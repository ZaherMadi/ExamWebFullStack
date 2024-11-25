import { rootUrl } from ".";

export const usersUrl = `${rootUrl}/users`;

export const fetchUser = async (id: number) => {
  const response = await fetch(`${usersUrl}/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch user");
  }
  return response.json();
};
