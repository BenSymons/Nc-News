import React from "react"
import axios from "axios"
const formatDate = require("../Utils/formatDate")

class CommentList extends React.Component {
    state = {
        comments: [], isLoading: true, username: "", body: ""
    }
    componentDidMount() {
        axios.get(`https://bensymonsncnews.herokuapp.com/api/articles/${this.props.article_id}/comments`).then(res => {
            this.setState({ comments: res.data.comments, isLoading: false })
        })
    }
    DeleteComment = (id) => {
        const newComments = this.state.comments.filter(comment => {
            return comment.comment_id !== id
        })
        this.setState({ comments: newComments })
        axios.delete(`https://bensymonsncnews.herokuapp.com/api/comments/${id}`)
    }

    addComment = (e) => {
        e.preventDefault()
        axios.post(`https://bensymonsncnews.herokuapp.com/api/articles/${this.props.article_id}/comments`,
            { body: this.state.body, username: this.state.username }).then(res => {
                console.dir(res)
                const commentsCopy = [...this.state.comments]
                commentsCopy.push(res.data.comment)
                this.setState({ comments: commentsCopy })
            }).catch(err => {
                console.dir(err)
            })
    }
    handleUsername = (event) => {
        const value = event.target.value
        this.setState({ username: value })
    }
    handleBody = (event) => {
        const value = event.target.value
        this.setState({ body: value })
    }
    render() {
        if (this.state.isLoading) return <p>Loading...</p>
        return <section className="comment_section">
            <ul className="no-bullets">
                {this.state.comments.map(comment => {
                    return <li key={comment.comment_id} className="comment">
                        <section>
                            <p>{comment.author}</p>
                            <p>{comment.body}</p>
                            <p>Date: {formatDate(comment.created_at)}</p>
                            <p>Votes: {comment.votes}</p>
                            <section>
                                <button>like</button><button>dislike</button>
                            </section>
                            <button onClick={() => { this.DeleteComment(comment.comment_id) }}>Delete</button>
                        </section>
                    </li>
                })}
            </ul>
            <form onSubmit={this.addComment}>
                <label>Username: </label>
                <input name="username" type="text" value={this.state.username} onChange={this.handleUsername} />
                <br />
                <label>Body: </label>
                <textarea name="body" value={this.state.body} onChange={this.handleBody} />
                <button>Submit</button>
            </form>
        </section>

    }
}

export default CommentList