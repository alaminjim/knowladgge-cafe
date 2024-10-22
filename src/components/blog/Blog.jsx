import PropTypes from "prop-types";

const Blog = ({ blog }) => {
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
    <div>
      <img src={cover_img} alt={`Cover picture of the title ${title}`} />
      <div className="flex justify-between">
        <div className="flex">
          <img className="w-14" src={author_img} alt="" />
          <div className="ml-6">
            <h3>{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>{reading_time}</div>
      </div>
      <h2 className="text-3xl font-bold">{title}</h2>
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
};

export default Blog;
