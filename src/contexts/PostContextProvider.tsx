import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Post from "../models/Posts";
import { fetchPost } from "../services/api/jsonplaceholder/posts";

type PostContextType = {
  post: Post | null;
};

const PostContext = createContext<PostContextType>({ post: null });

export const PostContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [post, setPost] = useState<Post | null>(null);
  const navigate = useNavigate();
  const { postId } = useParams();

  useEffect(() => {
    const loadPost = async () => {
      const id = Number(postId);
      if (!Number.isInteger(id) || id <= 0) {
        navigate("/not-found", { replace: true });
        return;
      }

      try {
        const data = await fetchPost(id);
        setPost(data);
      } catch {
        navigate("/not-found", { replace: true });
      }
    };

    loadPost();
  }, [postId, navigate]);

  return <PostContext.Provider value={{ post }}>{children}</PostContext.Provider>;
};

export const usePostContext = () => useContext(PostContext);
