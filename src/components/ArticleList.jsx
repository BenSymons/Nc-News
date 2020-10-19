import React from "react"
import axios from "axios"


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
                    return (<p>{article.title}</p>)
                })
            )
        }

    }
}

export default ArticleList