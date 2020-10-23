import React from 'react';
import './App.css';
import Header from "./components/Header"
import ArticleList from "./components/ArticleList"
import { Router } from "@reach/router"
import ViewArticle from "./components/ViewArticle"
import TopicList from "./components/TopicList"
import NavBar from "./components/NavBar"


function App() {
  return (
    <div className="app">
      <Header className = "header" />
      <NavBar />
      <Router>
        <TopicList path="/topics"/>
        <ArticleList path="/"/>
        <ViewArticle path="/articles/:article_id"/>
      </Router>
    </div>
  );
}

export default App;
