import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>     
      <div className='envolver_tudo'>
       <div className='foto_bola'></div>
      <div className='div_nome'>
        <h2 className='texto1'>Nome: Evil Morty</h2>
        <h2 className='texto1'>Status: Vivo</h2>
        <h2 className='texto1'>Especie: Humano</h2>
        <h2 className='texto1'>Tipo: Marionete sem alma</h2>
        <h2 className='texto1'>Gênero: Masculino</h2>
        <h2 className='texto1'>Localização: Ricks’s Story</h2>
        <h2 className='texto1'>Ultimo ep que foi visto: Unmortricken</h2>
      </div>
       
      </div>     
    </>
  )
}

export default App
