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
    render() {
        if (this.state.isLoading) return <p>Loading...</p>
        else {
            return (
                this.state.articles.map(article => {
                    return (
                        <div>
                            <Link to={`/articles/${article.article_id}`}>
                                <h3>{article.title}</h3>
                            </Link>
                            <p>rating: {article.votes}</p>
                            <p>comments: {article.comment_count}</p>
                        </div>
                    )
                })

            )
        }
    }
}

export default ArticleList