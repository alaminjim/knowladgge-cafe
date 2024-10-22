import PropTypes from "prop-types";
import { PiBookmarkSimple } from "react-icons/pi";

const Blog = ({ blog, handelToBookMark }) => {
  const {
    cover_img,
    title,
    author,
    author_img,
    posted_date,
    reading_time,
    hashtag,
  } = blog;
  return (
    <div className="mb-20">
      <img
        className="w-full"
        src={cover_img}
        alt={`Cover picture of the title ${title}`}
      />
      <div className="flex justify-between gap-5">
        <div className="flex">
          <img className="w-14 mb-5" src={author_img} alt="" />
          <div className="ml-6">
            <h3>{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="p-2">
          {reading_time}
          <button
            onClick={() => handelToBookMark(blog)}
            className="ml-2 mt-2 text-xl"
          >
            <PiBookmarkSimple></PiBookmarkSimple>
          </button>
        </div>
      </div>
      <h2 className="text-4xl font-bold">{title}</h2>
      {hashtag.map((hash, idx) => (
        <h3 key={idx}>
          {" "}
          <a className="flex" href="">
            #{hash}
          </a>{" "}
        </h3>
      ))}
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handelToBookMark: PropTypes.func.isRequired,
};

export default Blog;
