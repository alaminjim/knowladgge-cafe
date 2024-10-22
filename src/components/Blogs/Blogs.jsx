import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      <h1 className="text-lg font-extrabold">Knowledge Cafe</h1>
    </div>
  );
};

export default Blogs;
