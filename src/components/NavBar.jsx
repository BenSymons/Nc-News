import React from "react"
import { Link } from "@reach/router"

const NavBar = () => {
    return (<section>
        <Link to="/"><h2>Articles</h2></Link>
        <Link to="/topics"><h2>Topics</h2></Link>
    </section>)
}

export default NavBar