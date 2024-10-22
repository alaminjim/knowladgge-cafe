import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({ handelToBookMark, handelReading }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="md:w-2/3">
      <h1 className="text-3xl">Blogs:{blogs.length}</h1>\
      <div>
        {blogs.map((blog) => (
          <Blog
            handelToBookMark={handelToBookMark}
            key={blog.id}
            blog={blog}
            handelReading={handelReading}
          ></Blog>
        ))}
      </div>
    </div>
  );
};

Blogs.propTypes = {
  handelToBookMark: PropTypes.func.isRequired,
  handelReading: PropTypes.func.isRequired,
};

export default Blogs;
