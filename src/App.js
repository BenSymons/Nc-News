import React from 'react';
import './App.css';
import Header from "./components/Header"
import ArticleList from "./components/ArticleList"
import { Router } from "@reach/router"
import ViewArticle from "./components/ViewArticle"
import TopicList from "./components/TopicList"
import Home from "./components/Home"

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Home path="/"/>
        <TopicList path="/topics"/>
        {/* <UserList/> */}
        <ArticleList path="/articles"/>
        <ViewArticle path="/articles/:article_id"/>
      </Router>
    </div>
  );
}

export default App;
