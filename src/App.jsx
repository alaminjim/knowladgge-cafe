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
  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-6xl mx-auto">
        <Blogs handelToBookMark={handelToBookMark}></Blogs>
        <Bookmark bookmarks={bookmarks}></Bookmark>
      </div>
    </>
  );
}

export default App;
