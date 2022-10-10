import React from 'react'
import { useRef } from 'react'
import Data from '../Data'
import { ReactComponent as Logo } from '/src/assets/Twitter.svg'


const Wrapper = (props) => {

const getQuote = useRef(null)
const getAuthor = useRef(null)
const handleClick = () => {
 getQuote.current.innerHTML = `"${Data[Math.floor(Math.random() * Data.length )].quote}"`
 getAuthor.current.innerHTML = `- ${Data[Math.floor(Math.random() * Data.length )].author}`
}

return (
    <div id="quote-box" className="mx-auto mt-10 bg-green-400 w-[500px] rounded-md shadow-lg">
        <h1 ref={getQuote} id="text" className="text-center mt-2">"{props.quote}"</h1>
        <h1 ref={getAuthor} id="author" className="text-right mt-2 mr-2">- {props.author}</h1>
        <div className="flex mb-2">
        <a href="https://twitter.com/intent/tweet`" id="tweet-quote" className="ml-2"><Logo /></a>
        <button onClick={handleClick} id="new-quote" className="ml-[180px] hover:bg-slate-50 hover:rounded-sm">Click me</button>
        
        </div>
        
    </div>
)
}

export default Wrapper