import { useLocation } from 'react-router-dom'
import { getPokemonNames } from '../helpers'

// lo deja vacio y el predeterminado lo pone como pikachu
const usePokemonName = (): number => {
  const slug = useLocation().pathname.split('/')[1]
  const name = useLocation().pathname.split('/')[2]

 // si no encuentra al pokemon o su numero o el valor metido no es un numero
  if (slug !== 'pokemon' || !name || !isNaN(Number(name))) {
    return 0
  }

  // si el nombre no es valido
  const pokemonNameIndex = getPokemonNames()[name.toLowerCase()]
  if (!pokemonNameIndex) {
    return 0
  }

  return pokemonNameIndex
}

export default usePokemonName
