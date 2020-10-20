import Axios from "axios"
import React from "react"

class ViewArticle extends React.Component {
    state = {
        article: {}
    }
    componentDidMount() {
        Axios.get(`https://bensymonsncnews.herokuapp.com/api/articles/${this.props.article_id}`).then(res => {
            console.dir(res.data.article)
            this.setState({ article: res.data.article })
        })
    }

    render() {
        const { title, body, comment_count, votes } = this.state.article;
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
            </>
        )
    }
}

export default ViewArticle