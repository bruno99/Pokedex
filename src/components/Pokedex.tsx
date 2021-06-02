import React from 'react'
import Container from './PokedexStyles'
import LeftPanel from './LeftPanel'
import Divider from './Divider'
import RightPanel from './RightPanel'
import { usePokemon, useProgressiveImage } from '../hooks'
import { Loading } from './shared'
import { Global, css } from '@emotion/core'
import pikachu from '../assets/pikachu.png'

//llamamos a una carpeta con fondos de pantalla de los pokemons de la primera generacion

const Pokedex = () => {
  const { pokemon, pokemonIndex, loading, changePokemonIndex } = usePokemon()
  const loadedImage = useProgressiveImage(`/backgrounds/${getBackground()}.jpg`)

  if (loading) {
    return <Loading noBackground />
  }

  function getBackground() {
    // si el pokemon no es de la primera gen (1-152) se pone el fondo de pikachu
    if (pokemonIndex < 152 && pokemon?.pokemonData.name) {
      return pokemon?.pokemonData.name
    }

    return 'pikachu'
  }

  return (
    <Container>
      <Global
        styles={css`
          body {
            background-image: url(${loadedImage || pikachu});
          }
        `}
      />
      <div className="inner-container">
        <LeftPanel pokemon={pokemon} pokemonIndex={pokemonIndex} />
        <Divider />
        <RightPanel
          pokemon={pokemon}
          pokemonIndex={pokemonIndex}
          changePokemonIndex={changePokemonIndex}
        />
      </div>
    </Container>
  )
}

export default Pokedex
