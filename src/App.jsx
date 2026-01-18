import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import languages from './data/languages'

function App() {
  const [selected_id, setSelected_id] = useState(0)

  return (
    <>
      <h1 className='fw-bold fs-1' >Learn Web Development</h1>
      <div className="container mt-5">
        {languages.map((language, index) => (
          <button key={index} className={`btn btn-primary m-2 ${selected_id == index ? "selected" : ""}`} onClick={() => setSelected_id(index)}>{language.title}</button>
        ))}
        <div key={languages[selected_id].id} className="card p-1 mt-4">
          <h2>{languages[selected_id].title}</h2>
          <p>{languages[selected_id].description}</p>
        </div>
      </div>
    </>
  )
}

export default App
