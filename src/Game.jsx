import {useState} from 'react'
import PokeCard from './PokeCard'

function Game() {

  const [ids, setIds] = useState(getTwoRandomIds())

  function getTwoRandomIds(max = 1000) {
    const id1 = Math.floor(Math.random() * max) + 1;
    let id2 = Math.floor(Math.random() * max) +1;

    while(id2 === id1) {
      id2 = Math.floor(Math.random() * max) +1;
    }

    return [id1, id2];
  }



  return (
    <div>
      <h2>Which Pokemon has higher base stats?</h2>
      <PokeCard pokeId={ids[0]} />
      <p>VS</p>
      <PokeCard pokeId={ids[1]} />
      <br />
      <button onClick={() => setIds(getTwoRandomIds())}>New Matchup</button>
    </div>
  )
}

export default Game;