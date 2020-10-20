import axios from "axios"
import React from "react"

class PostArticle extends React.Component {
    state = {

    }

    render() {
        return (
            <form>
                <label>Title: </label>
                <input type="text" onChange={this.handleTitle} />
                <label>Body: </label>
                <textarea name="body" />
            </form>
        )
    }
}

export default PostArticle