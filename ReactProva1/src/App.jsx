import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="card">
        <h1>React Prova 1</h1>
        <button onClick={() => setCount((count) => count + 1)}>
          Contatore: {count}
        </button>
        <p>
          Modifica <code>src/App.jsx</code> e salva per vedere le modifiche.
        </p>
      </div>
    </div>
  )
}

export default App
