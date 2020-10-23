import React from "react"
import { Link } from "@reach/router"

const Header = () => {
    return (<section className="header">
        <Link to="/" className="link_button link">
            <h1 className="title">NC News</h1>
        </Link>
        <p className="intro">The latest news from Northcoders</p>
    </ section>
    )
}

export default Header