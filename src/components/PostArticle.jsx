// import axios from "axios"
import React from "react"

class PostArticle extends React.Component {
    state = {

    }

    render() {
        return (
            <form>
                <label>Title: </label>
                <input type="text" onChange={this.handleTitle} />
                <br />
                <label>Body: </label>
                <textarea name="body" />
                <button>Submit</button>
            </form>
        )
    }
}

export default PostArticle