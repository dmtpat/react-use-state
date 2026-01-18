import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='fw-bold fs-1' >Learn Web Development</h1>
      <div className="container mt-5"></div>
    </>
  )
}

export default App
