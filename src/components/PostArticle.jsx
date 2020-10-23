// import axios from "axios"
import Axios from "axios"
import React from "react"

class PostArticle extends React.Component {
    state = {
        title: "", body: ""
    }
    handleTitle = (event) => {
        console.dir(event.target.value)
        const value = event.target.value
        this.setState({ title: value })
    }
    handleBody = (event) => {
        console.dir(event.target.value)
        const value = event.target.value
        this.setState({ body: value })
        console.dir(this.state)
    }

    addArticle = () => {
        Axios.post
    }

    render() {
        return (
            <form onSubmit={addArticle}>
                <label>Title: </label>
                <input name="title" type="text" value={this.state.title} onChange={this.handleTitle} />
                <br />
                <label>Body: </label>
                <textarea name="body" value={this.state.body} onChange={this.handleBody} />
                <button>Submit</button>
            </form>
        )
    }
}

export default PostArticle