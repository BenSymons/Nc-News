import React from 'react';
import './App.css';
import Header from "./components/Header"
import ArticleList from "./components/ArticleList"
import { Router } from "@reach/router"
import ViewArticle from "./components/ViewArticle"
import TopicList from "./components/TopicList"
// import UserList from "./components/UserList"

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <TopicList path="/topics"/>
        {/* <UserList path="/users"/> */}
        <ArticleList path="/"/>
        <ViewArticle path="/articles/:article_id"/>
      </Router>
    </div>
  );
}

export default App;
