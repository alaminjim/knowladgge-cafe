import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmark from "./components/Bookmark/Bookmark";
import Header from "./components/header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const handelToBookMark = (blog) => {
    // console.log(blog);
    const newBookMark = [...bookmarks, blog];
    setBookmarks(newBookMark);
  };
  const [reading, setReading] = useState(0);
  const handelReading = (time, id) => {
    console.log(time);
    let readingTime = reading + time;
    setReading(readingTime);
    const remaingBookMark = bookmarks.filter((bookmark) => bookmark.id !== id);
    setBookmarks(remaingBookMark);
  };
  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-6xl mx-auto">
        <Blogs
          handelToBookMark={handelToBookMark}
          handelReading={handelReading}
        ></Blogs>
        <Bookmark reading={reading} bookmarks={bookmarks}></Bookmark>
      </div>
    </>
  );
}

export default App;
