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
        //console.dir(this.state)
        const { title, body, comment_count, votes } = this.state.article;
        if (this.state.isLoading) return <p>Loading...</p>
        else {
            return (
                <>
                    <div>
                        <p>Title: {title}</p>
                        <p>Comments: {comment_count}</p>
                        <p>Rating: {votes}</p>
                    </div>
                    <div>
                        <p>{body}</p>
                    </div>
                    <CommentList article_id={this.props.article_id} />
                </>
            )
        }
    }
}

export default ViewArticle