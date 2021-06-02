import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVenus, faUndo } from '@fortawesome/free-solid-svg-icons'
import Container, { ShinyButton } from './styles'
import { Button } from '../../shared'
import { PokeBall } from '../../shared'
import { SpritesProps, SpriteProps } from './types'

interface SpriteComponentProps {
  sprites?: SpritesProps
  name: string
  [key: string]: any
}

const Sprite = ({ sprites, name }: SpriteComponentProps) => {
  const [sprite, setSprite] = useState<SpriteProps>({
    front: true,
    female: false,
    shiny: false,
  })
  const [src, setSrc] = useState<string | null>('')
  const [error, setError] = useState(false)

  useEffect(() => {
    if (sprites) {
      const source = buildImage(sprite)
      setSrc(sprites[source])
    }
  }, [sprite, sprites])

  function buildImage({ front, shiny, female }: SpriteProps): string {
    const direction = front ? 'front' : 'back'
    const light = shiny ? '_shiny' : '_default'
    const gender = female ? '_female' : ''

    if (light === '_default' && gender === '_female') {
      return direction + gender
    }
    return direction + light + gender
  }

  const handleChange = (attribute: string) => {
    // hacer una copia y actualizar el estado
    const spriteCopy = { ...sprite, [attribute]: !sprite[attribute] }
    const source = buildImage(spriteCopy)

    // si no existe la version femenina rebota la imagen
    if (sprites && !sprites[source]) {
      setError(true)
      return setTimeout(() => {
        setError(false)
      }, 500)
    }

    return setSprite({ ...sprite, [attribute]: !sprite[attribute] })
  }

  const renderScreen = () => {
    if (src) {
      return <img src={src} alt={name} />
    }

    return <PokeBall nameClass="bigScreen" />
  }
//cambio de apariencia del pokemon
  return (
    <Container error={error}>
      {renderScreen()}
      <div className="controls">
        <Button
          active={sprite.female}
          onClick={() => handleChange('female')}
          aria-label="Change Gender"
        >
          <FontAwesomeIcon icon={faVenus} />
        </Button>

        <ShinyButton
          active={sprite.shiny}
          onClick={() => handleChange('shiny')}
          aria-label="Change to Shiny"
        >
          <div className="button">
            <span className="button__mask"></span>
            <span className="button__text">Shiny</span>
            <span className="button__text button__text--bis">Shiny</span>
          </div>
        </ShinyButton>

        <Button
          active={!sprite.front}
          onClick={() => handleChange('front')}
          aria-label="Change front"
        >
          <FontAwesomeIcon icon={faUndo} />
        </Button>
      </div>
    </Container>
  )
}

export default Sprite
