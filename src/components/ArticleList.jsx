import React from "react"
import axios from "axios"
import { Link } from "@reach/router"

class ArticleList extends React.Component {
    state = {
        articles: [],
        isLoading: true
    }

    componentDidMount() {
        axios.get("https://bensymonsncnews.herokuapp.com/api/articles").then(res => {
            this.setState({ articles: res.data.articles, isLoading: false })
        })
    }

    SortBy(criterion) {
        axios.get(`https://bensymonsncnews.herokuapp.com/api/articles?sort_by=${criterion}`).then(res => {
            this.setState({ articles: res.data.articles })
        })
    }

    render() {
        if (this.state.isLoading) return <p>Loading...</p>
        else {
            return (
                <div>
                    <div className="sort_by">
                        <p>Sort by</p>
                        <button onClick={() => { this.SortBy("created_at") }}>Newest</button>
                        <button onClick={() => { this.SortBy("votes") }}>Votes</button>
                        <button onClick={() => { this.SortBy("comment_count") }}>Comments</button>
                    </div>
                    <ul className="no-bullets article_list">
                        {this.state.articles.map(article => {
                            return (
                                <li className="article_panel" key={article.article_id}>
                                    <div>
                                        <Link to={`/articles/${article.article_id}`} className="link">
                                            <h3>{article.title}</h3>
                                            <p>rating: {article.votes}</p>
                                            <p>comments: {article.comment_count}</p>
                                        </Link>
                                    </div>
                                </li>
                            )
                        })}
                    </ ul>
                </div>

            )
        }
    }
}

export default ArticleList