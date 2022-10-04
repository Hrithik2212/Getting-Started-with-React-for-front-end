import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

/* 
Quiz 

1. What is a React Component ?
ans - A function that returns Reacts elements . It can be used again and again 

2. What is use of Pascal case in React ?
ans - Pascal case is any react Component should be named with Capital letter 

3. What is the correct way to call a react component or create an instanse of the component?
ans - Using a html tag as such - reactDOM.render(<Component_name/> , document.getElementById('root'));


*/


const root = ReactDOM.createRoot(
    document.getElementById('root')
  );


function TemporayName(){
    return (
    <div>
        <img src ="https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png" width="100px"></img>
        <h1>Welcome to my React website</h1> 
        <ul>
            <li>I am Hrithik</li>
            <li>I am a 2nd year student from SRMIST</li>
            <li>I am pursuing my BTech in AI</li>
            <li>I love Machine Learning</li>
        </ul>
    </div>
)
}

// Challenge : create an ordered list to display elements



function MainContent(){
    return (
        <div>
            <ol>
                <li>hi , I am Hrithik</li>
                <li>I dont know react</li>
                <li>So I am trying to learn it</li>
                <li>Help Me</li>
            </ol>
        </div>
    )
}

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

// Mini Challenge two :- Create a footer as its own component 
// Solution for footer 
function Footer(){
    return (
        <footer>
                <small>@ 2022 Hrithik development </small>
        </footer>
    )
}

function Page(){ // Page is a Parent Component 
    return (// Header , MainContent and Footer are child components
        <div>
        <Header/> 
        <MainContent/>
        <Footer/>
        </div>
    )
}

root.render(<Page/>);
// root.render(<TemporayName />);

// Challenge add a navigation bar 

function NavBar(){
    return (
        <div>
        <nav className='nav'>
        <img src = "https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png" width="100px"></img>
            <ul className='nav-items'>
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
        </div>
    )
}




