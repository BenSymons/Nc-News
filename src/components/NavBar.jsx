import React from "react"
import { Link } from "@reach/router"

const NavBar = () => {
    return (<section className="nav">
        <Link to="/" className="link_button link"><h2>Articles</h2></Link>
        <Link to="/topics" className="link_button link"><h2>Topics</h2></Link>
    </section>)
}

export default NavBar