import React from "react"

// Mini-Challenge create a header element 

// Solution Header Component 
function Header(){
    return (
        <header>
            <nav>
            <NavBar/>
            <div>
                <h1>I am excited to learn React</h1>
            </div>
            </nav>
        </header>
    )
}

// Challenge add a navigation bar 

function NavBar(){
    return (
        <div>
        <nav className='nav'>
        <img className='nav-logo' src = "https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png"></img>
            <ul className='nav-items'>
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
        </div>
    )
}
export default Header;