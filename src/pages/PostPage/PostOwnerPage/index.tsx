import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { usePostContext } from "../../../contexts/PostContextProvider";
import { fetchUser } from "../../../services/api/jsonplaceholder/user";
import User from "../../../models/User";

const PostOwnerPage = () => {
  const { post } = usePostContext();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!post) return;

    const loadUser = async () => {
      const userId = post.userId;

      if (!Number.isInteger(userId) || userId <= 0) {
        navigate("/not-found", { replace: true });
        return;
      }

      try {
        const data = await fetchUser(userId);
        setUser(data);
        setLoading(false);
      } catch (err: any) {
        setError(err.message || "Failed to load user");
        setLoading(false);
        navigate("/not-found", { replace: true });
      }
    };

    loadUser();
  }, [post, navigate]);

  if (loading) return <p>Loading user...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!user) return <p>User not found</p>;

  return (
    <div>
      <div style={{ marginTop: "10px",display:"flex" , justifyContent:"center" }}>
      <button className="LinkNav" onClick={() => navigate(-1)}>Description</button>
        <Link className="LinkNav" to={`./`}>OWner</Link>
      </div>
      <h2>{user.name}</h2>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default PostOwnerPage;
