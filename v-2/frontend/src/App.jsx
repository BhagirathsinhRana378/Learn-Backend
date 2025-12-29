import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {

  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
      .then((Response) => {
        setJokes(Response.data)
      })// we did a get request to the 3000/jokes then if we get it 'then' the respons in the 'then' set jokes to the getted data of the responces
      .catch((error) => {
        console.log(error)
      })// and if we didnt get the responsce throw the error

  })

  return (
    <>
      <h1>hello</h1>
      <h2>i am learning the backend to be the pro</h2>

      <p>jokes:{jokes.length}</p>


      {
        jokes.map((jokes, index) => (

          <div key={jokes.id}>
            <h3>{jokes.status}</h3>
            <p>{jokes.joke}</p>

          </div>

          //map() goes through the jokes array one by one
          //For each joke, it creates a <div>
          //React prints all of them on the page

        ))// here if you have '{}' in the react component so you have to use 'return' keyword 
        // so we used '()' instead of '{}' in the map function
      }



    </>
  )
}

export default App
