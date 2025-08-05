import {useState, useEffect} from "react"

export default function PokeCard({ pokeId }) {
  const [pokeData, setPokeData] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
      .then(res => res.json())
      .then(setPokeData)
  }, [pokeId])

  if (!pokeData) return <div>Loading...</div>

  return (
    <div className="pokemon">
      <h3>{pokeData.name}</h3>
      <img alt={pokeData.name} src={pokeData.sprites.front_default} />
    </div>
  )
}