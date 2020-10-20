import React from 'react';
import './App.css';
import Header from "./components/Header"
import ArticleList from "./components/ArticleList"
import { Router, link } from "@reach/router"
import ViewArticle from "./components/ViewArticle"

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <ArticleList path="/"/>
        <ViewArticle path="/articles/:article_id"/>
      </Router>
    </div>
  );
}

export default App;
