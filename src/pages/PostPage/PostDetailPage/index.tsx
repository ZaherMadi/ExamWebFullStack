import React from "react";
import { usePostContext } from "../../../contexts/PostContextProvider";
import { Link } from "react-router-dom";

const PostDetailPage = () => {
  const { post } = usePostContext();

  if (!post) return <p>Loading post...</p>;

  return (
    <div>
      <div  style={{ marginTop: "10px", display:"flex" , justifyContent:"center" }}>
        <Link className="LinkNav" to={`/posts/${post.id}`}>Description</Link>
        <Link className="LinkNav" to={`/posts/${post.id}/owner/${post.userId}`}>OWner</Link>
      </div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>

    </div>
  );
};

export default PostDetailPage;
