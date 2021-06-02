import { useLocation } from 'react-router-dom'

//el predeterminado es pikachu
const usePokemonIndex = (): number => {
  const slug = useLocation().pathname.split('/')[1]
  const index = useLocation().pathname.split('/')[2]

  // si no encuentra al pokemon o su numero o el valor metido no es un numero
  
  if (slug !== 'pokemon' || !index || isNaN(Number(index))) {
    return 25
  }

  // comporbamos que no supere el maximo
  
  if (Number(index) < 1 || Number(index) > 807) {
    return 25
  }

  return Number(index)
}

export default usePokemonIndex
