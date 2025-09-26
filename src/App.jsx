import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(1)
  const [character, setCharacter] = useState(null);

useEffect(() => {
  fetch(`https://rickandmortyapi.com/api/character/${count}`)
    .then(res => res.json())
    .then(data => setCharacter(data))
    .catch(error => console.log('error', error));
}, [count]);


return (
  <>
  
    <div className='envolver_tudo'>
      {character && (
        <>
          <div className='foto_bola'>
            <img className='img' src={character.image} alt={character.name} />
          </div>

          <div className='div_nome'>
            <h4 className='texto1'>Nome: {character.name}</h4>
            <h4 className='texto1'>Status: {character.status}</h4>
            <h4 className='texto1'>Espécie: {character.species}</h4>
            <h4 className='texto1'>Tipo: {character.type || "Não definido"}</h4>
            <h4 className='texto1'>Gênero: {character.gender}</h4>
            <h4 className='texto1'>Localização: {character.location?.name}</h4>
            <h4 className='texto1'>Último ep: {character.episode?.slice(-1)[0]}</h4>
          </div>
        </>
      )}

      <div className="button-get">
        <button className='button_top' onClick={() => setCount(count >= 826 ? 1 : count + 1)}>
          Gerar um novo personagem
        
        </button>
      </div>
    </div>
    
  </>
);
}

export default App
