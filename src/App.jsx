
import { useEffect, useState, useRef } from 'react'
import Wrapper from './components/Wrapper'
import Data from './Data'

function App() {
  const [initQuote, setInitQuote] = useState(Data)

  

  // const randomQuote = Math.floor(Math.random() * Data.length )

  
  return (
    <div className="mx-auto flex justify-center">
      <Wrapper 
      quote={initQuote[Math.floor(Math.random() * Data.length )].quote}
      author={initQuote[Math.floor(Math.random() * Data.length )].author}
      />
      {/* <h1 id="quotes" ref={getQuote}>{initQuote[Math.floor(Math.random() * Data.length )].quote}</h1> */}
      
    </div>
  )
}

export default App
