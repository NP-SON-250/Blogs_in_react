import ArticleBlog from "../components/ArticleBlog";
import Hero from "../components/Hero";
import { useState, useEffect } from "react";
import axios from "axios";
import PropagateLoader from "react-spinners/PropagateLoader";
export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const [ispending, setIsPending] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://sandrahermajesty.onrender.com/PostgreSQL/API/posts/get/all"
      );
      const data = response.data.data;
      setBlogs(data);
      setIsPending(false);
    };
    getData();
  }, []);
  return (
    <>
      <Hero />
      {ispending && (
        <div className="Loader container">
          <PropagateLoader
            color="#ffd369"
            cssOverride={{}}
            loading
            size={20}
            speedMultiplier={1}
          />
        </div>
      )}
      <div className="Articles-section container">
        {blogs &&
          blogs.map((post, index) => (
            <ArticleBlog
              key={index}
              Id={post.id}
              title={post.postTitle}
              image={post.postImage}
              desc={post.postContent}
              profile={post.postedBy.profile}
              fullname={post.postedBy.firstName + " " + post.postedBy.lastName}
              views={post.views}
              likes={post.allLikes}
              comments={post.allComents}
              data={post.createdAt}
              
            />
          ))}
      </div>
    </>
  );
}
