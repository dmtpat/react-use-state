import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import languages from './data/languages'
import Card from "./Card.components"
import Button from "./Button.components"

function App() {
  const [selected_id, setSelected_id] = useState(-1)

  return (
    <>
      <h1 className='fw-bold fs-1' >Learn Web Development</h1>
      <div className="container mt-5">
        {languages.map((language, index) => (
          <Button index={index} id={selected_id} title={language.title} set_id={setSelected_id} />
        ))}
        {selected_id >= 0 && <Card id={languages[selected_id].id} title={languages[selected_id].title} description={languages[selected_id].description} />
        }
        {selected_id < 0 && <Card id={selected_id} title={"None"} description={"Nessun linguaggion selezionato"} />
        }
      </div>
    </>
  )
}

export default App
