import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import PostList from "./components/PostList";
import CreatePost from "./components/CreatePost";
import PostListProvider from "./store/post-list-store";
import "./SocialMedia.css";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const SocialMedia = () => {
  const [selectedOption, setSelectedOption] = useState("Home");

  return (
    <PostListProvider>
      <div className="social-media-container d-flex">
        <Sidebar
          selectedOption={selectedOption}
          selectTab={setSelectedOption}
        ></Sidebar>
        <div className="content">
          <Header></Header>
          <Outlet />
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
};

export default SocialMedia;
