import { rootUrl } from "./index";

export const postsUrl = `${rootUrl}/posts`;

export const fetchPosts = async () => {
  const response = await fetch(postsUrl);
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return response.json();
};

export const fetchPost = async (id: number) => {
    const response = await fetch(`${postsUrl}/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch post");
    }
    return response.json();
  };
  