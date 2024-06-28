//import React, { StrictMode } from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList"
export default function App() {
  return (
    <div className="App">
      
        <Header blog={blogData} />
        <About blog={blogData} />
        <ArticleList posts={blogData.posts}/>
       
    </div>
  );
}
