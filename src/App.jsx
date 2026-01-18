import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import languages from './data/languages'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='fw-bold fs-1' >Learn Web Development</h1>
      <div className="container mt-5">
        {languages.map((language, index) => (
          <button key={index} className='btn btn-primary m-2'>{language.title}</button>
        ))}
        <div key={languages[0].id} className="card p-1 mt-4">
          <h2>{languages[0].title}</h2>
          <p>{languages[0].description}</p>
        </div>
      </div>
    </>
  )
}

export default App
