import Axios from "axios"
import React from "react"
import CommentList from "./CommentList"

class ViewArticle extends React.Component {
    state = {
        article: {},
        isLoading: true
    }
    componentDidMount() {
        Axios.get(`https://bensymonsncnews.herokuapp.com/api/articles/${this.props.article_id}`).then(res => {
            this.setState({ article: res.data.article, isLoading: false })
        })
    }

    render() {
        const { title, body, comment_count, votes } = this.state.article;
        if (this.state.isLoading) return <p>Loading...</p>
        else {
            return (
                <>
                    <section className="article">
                        <h3>{title}</h3>
                        <p>Comments: {comment_count}</p>
                        <p>Rating: {votes}</p>

                        <div>
                            <p>{body}</p>
                        </div>
                    </section>
                    <h3>Comments</h3>
                    <CommentList article_id={this.props.article_id} />
                </>
            )
        }
    }
}

export default ViewArticle