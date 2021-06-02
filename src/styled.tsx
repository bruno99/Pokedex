//**
//** Este archivo resuelve los tipos de los componentes de estilo
//**

import styled, { CreateStyled } from '@emotion/styled'
import { theme } from './components/shared'

type Theme = typeof theme

export default styled as CreateStyled<Theme>
