import React, { useContext } from 'react'
import styled from 'styled-components'

import { ThemeContext } from '../../theme'

import { ButtonProps } from '../Button'

interface SwitchButtonProps extends ButtonProps {
  active?: boolean
}

const SwitchButton: React.FC<SwitchButtonProps> = ({
  active,
  children,
  onClick,
  round,
  size,
  text
}) => {

  const {
    baseBg,
    buttonSizes,
    surfaces
  } = useContext(ThemeContext).theme

  let boxShadow: string
  let fontSize: number
  switch (size) {
    case 'lg':
      boxShadow = `${surfaces[1].shadow}`
      fontSize = 16
      break
    case 'sm':
      boxShadow = `${surfaces[1].shadow}`
      fontSize = 14
      break
    default:
      boxShadow = `${surfaces[1].shadow}`
      fontSize = 16
  }

  let background: string
  if (active) {
    background = baseBg
  } else {
     background = 'transparent'
  }

  return (
    <StyledSwitchButton
      active={active}
      background={background}
      boxShadow={boxShadow}
      fontSize={fontSize}
      round={round}
      size={buttonSizes.sm}
      onClick={onClick}
    >
      {children}
      {text}
    </StyledSwitchButton>
  )
}

interface StyledSwitchButtonProps {
  active?: boolean,
  background: string,
  boxShadow: string,
  fontSize: number,
  round?: boolean,
  size: number
}

const StyledSwitchButton = styled.button<StyledSwitchButtonProps>`
  align-items: center;
  background: ${props => props.background};
  border: 0;
  border-radius: ${props => props.theme.borderRadius}px;
  box-shadow: ${props => props.active ? props.boxShadow : undefined};
  box-sizing: border-box;
  color: ${props => props.active ? props.theme.colors.primary.main : `${props.theme.textColor}`};
  cursor: pointer;
  display: flex;
  flex: 1;
  font-size: ${props => props.fontSize}px;
  font-weight: 700;
  height: ${props => props.size}px;
  justify-content: center;
  margin: -2px 0 0;
  min-width: ${props => props.size}px;
  outline: none;
  padding: 0;
  width: 100%;
`

export default SwitchButton