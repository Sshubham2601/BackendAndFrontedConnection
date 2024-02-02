import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'

function App() {
  const [jokes, setjokes] = useState([])

 useEffect(()=>{
         axios.get('/api/jokes')
         .then((response)=>{
          setjokes(response.data)
         }
         )
         .catch((error)=>{
          console.log(error)  //AxiosError {message:'request failed with}
         }
         )

 })
  
  return (
    <>
      <h1>Backend Connection</h1>
      <p>JOKES:{jokes.length}</p>

      {
          jokes.map((joke,index)=>(
               <div key={joke.id}>
               <h3>{joke.title}</h3>
               <p>{joke.contents}</p>
               </div>
          ))
      }
      
    </>
  )
}

export default App
