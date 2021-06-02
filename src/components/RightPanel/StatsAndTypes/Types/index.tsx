import React from 'react'
import Container from './styles'
import TypeItem from '../../../shared/TypeItem'
import { TypeProps } from 'components/shared/types'
import BioStats from './BioStats'

interface TypesProps {
  types: TypeProps[]
  weight: number
  height: number
}

const Types = ({ types, weight, height }: TypesProps) => {
  return (
    <Container>
      <BioStats weight={weight} height={height} />
      {types.map(({ type: { name } }) => {
        return <TypeItem name={name} key={name} />
      })}
    </Container>
  )
}

export default Types
