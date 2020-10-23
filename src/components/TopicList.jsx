import Axios from "axios"
import React from "react"

class TopicList extends React.Component {
    state = {
        topics: [],
        isLoading: true
    }

    componentDidMount() {
        Axios.get("https://bensymonsncnews.herokuapp.com/api/topics").then(res => {
            this.setState({ topics: res.data.topics, isLoading: false })
        })
    }
    render() {
        if (this.state.isLoading) return <p>Loading...</p>
        return (
            <ul className="no-bullets article_list">
                {this.state.topics.map(topic => {
                    return <li className="article_panel">
                        <div>
                            <h3>{topic.slug}</h3>
                            <p>{topic.description}</p>
                        </div>
                    </li>
                })}

            </ul>
        )
    }
}

export default TopicList