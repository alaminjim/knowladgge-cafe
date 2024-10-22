import PropTypes from "prop-types";
import Bookmarks from "../Bookmarks/Bookmarks";

const Bookmark = ({ bookmarks, reading }) => {
  return (
    <div className="md:w-1/3 bg-gray-300 mt-3 ml-4 pt-4">
      <div>
        <h2>Spent Your Reading Time:{reading}</h2>
      </div>
      <h1 className="text-3xl text-center border-2 border-b-green-200 rounded-lg">
        Book Marked Blogs:{bookmarks.length}
      </h1>
      {bookmarks.map((bookmark, idx) => (
        <Bookmarks key={idx} bookmark={bookmark}></Bookmarks>
      ))}
    </div>
  );
};

Bookmark.propTypes = {
  bookmarks: PropTypes.func.isRequired,
  reading: PropTypes.number.isRequired,
};

export default Bookmark;
