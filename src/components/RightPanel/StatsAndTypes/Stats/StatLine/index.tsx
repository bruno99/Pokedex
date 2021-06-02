import React from 'react'
import Container from './styles'
import { padTexts } from '../../../../../helpers'

type StatLineProps = {
  name: string
  baseStat: number
}

const StatLine = ({ name, baseStat }: StatLineProps) => {
  return (
    <Container baseStat={baseStat}>
      {padTexts(name, baseStat, '.', 22)}
    </Container>
  )
}

export default StatLine
