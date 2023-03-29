import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./homepage.css";
import axios from "axios";

export default function Homepage() {
  const [posts, setPosts] = useState([]);
  const url = "http://localhost:5000/api";
  const { search } = useLocation();

  useEffect(() => {
    const fetchAllPosts = async () => {
      const res = await axios
        .get(`${url}/posts` + search)
        .catch(function (err) {
          console.log(err.toJSON());
        });
      setPosts(res.data);
    };
    fetchAllPosts();
  }, [search]);
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}
