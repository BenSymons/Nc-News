import Axios from "axios"
import React from "react"

class ViewArticle extends React.Component {
    state = {
        article: {},
        isLoading: true
    }
    componentDidMount() {
        Axios.get(`https://bensymonsncnews.herokuapp.com/api/articles/${this.props.article_id}`).then(res => {
            console.dir(res.data.article)
            this.setState({ article: res.data.article, isLoading: false })
        })
    }

    render() {
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
                </>
            )
        }
    }
}

export default ViewArticle