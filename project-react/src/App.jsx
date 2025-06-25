import { useState } from 'react'
import './App.css'
import Perfil from './components/perfil';
import Formulario from './components/formulario'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Perfil/>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count=>(count +1))}>Clique aqui</button>
      <Formulario/>
    </>
  )
}

export default App
