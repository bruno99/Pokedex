import styled from 'styled'
import { PokeBallProps } from './'

const Container = styled.div<PokeBallProps>`
  ${({ theme }) => theme.spriteScreen}
  background: #83887b;
  position: relative;
  height: ${(props) => (props.nameClass === 'bigScreen' ? '343px' : '120px')};
  width: ${(props) => (props.nameClass === 'bigScreen' ? '100%' : '120px')};
  margin: ${(props) => (props.nameClass === 'bigScreen' ? '10px 0' : '7px 0')};

  &::before {
    position: absolute;
    top: ${(props) => (props.nameClass === 'bigScreen' ? '35%' : '10px')};
    left: ${(props) => (props.nameClass === 'bigScreen' ? '35%' : '10px')};
    content: '';
    background: 0 0;
    width: 6px;
    height: 6px;
    color: #060606;
    transform: rotate(0);
  }
`

export default Container
