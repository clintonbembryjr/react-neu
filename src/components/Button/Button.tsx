import React, { useContext, useMemo } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { ThemeContext } from '../../theme'

export interface ButtonProps {
  children?: React.ReactNode,
  disabled?: boolean,
  full?: boolean,
  href?: string,
  onClick?: () => void,
  round?: boolean,
  size?: 'sm' | 'md' | 'lg',
  text?: string,
  to?: string,
  variant?: 'default' | 'secondary' | 'tertiary'
}

const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  full,
  href,
  onClick,
  round,
  size,
  text,
  to,
  variant,
}) => {
  const {
    baseBg,
    buttonSizes,
    colors,
    spacing,
    surfaces,
    textColor
  } = useContext(ThemeContext).theme

  let boxShadow: string
  let buttonSize: number
  let buttonPadding: number
  let fontSize: number
  switch (size) {
    case 'sm':
      boxShadow = `${surfaces[1].shadow}, ${surfaces[1].highlight}`
      buttonPadding = spacing[3]
      buttonSize = buttonSizes.sm
      fontSize = 14
      break
    case 'lg':
      boxShadow =  `${surfaces[2].shadow}, ${surfaces[2].highlight}`
      buttonPadding = spacing[4]
      buttonSize = buttonSizes.lg
      fontSize = 18
      break
    case 'md':
    default:
      boxShadow =  `${surfaces[2].shadow}, ${surfaces[2].highlight}`
      buttonPadding = spacing[4]
      buttonSize = buttonSizes.md
      fontSize = 16
  }

  let background: string
  let buttonColor: string
  switch (variant) {
    case 'secondary':
      background = baseBg
      buttonColor = colors.primary.main
      break
    case 'tertiary':
      background = 'transparent'
      boxShadow = `${surfaces[0].shadow}, ${surfaces[0].highlight}`
      buttonColor = textColor
      break
    case 'default':
    default:
      background = colors.primary.main
      buttonColor = colors.white
  }

  const ButtonText = useMemo(() => {
    return (
      <StyledButtonText color={buttonColor} disabled={disabled}>{text}</StyledButtonText>
    )
  }, [
    buttonColor,
    disabled,
    text,
  ])

  const ButtonChild = useMemo(() => {
    if (to) {
      return <StyledLink to={to}>{ButtonText}</StyledLink>
    } else if (href) {
      return <StyledExternalLink href={href} target="__blank">{ButtonText}</StyledExternalLink>
    } else {
      return ButtonText
    }
  }, [
    ButtonText,
    href,
    text,
    to
  ])

  return (
    <StyledButton
      background={background}
      boxShadow={boxShadow}
      color={buttonColor}
      disabled={disabled}
      fontSize={fontSize}
      full={full}
      onClick={onClick}
      padding={buttonPadding}
      round={round}
      size={buttonSize}
    >
      {children}
      {ButtonChild}
    </StyledButton>
  )
}

interface StyledButtonProps {
  background: string,
  boxShadow?: string,
  color: string,
  disabled?: boolean,
  fontSize: number,
  full?: boolean,
  padding: number,
  round?: boolean,
  size: number,
}

const StyledButton = styled.button<StyledButtonProps>`
  align-items: center;
  background: ${props => props.background};
  border: 0;
  border-radius: ${props => props.theme.borderRadius}px;
  box-shadow: ${props => props.boxShadow};
  box-sizing: border-box;
  color: ${props => !props.disabled ? props.color : `${props.color}`};
  cursor: pointer;
  display: flex;
  font-size: ${props => props.fontSize}px;
  font-weight: 700;
  height: ${props => props.size}px;
  justify-content: center;
  margin: 0;
  min-width: ${props => props.size}px;
  outline: none;
  padding-left: ${props => props.round ? 0 : props.padding}px;
  padding-right: ${props => props.round ? 0 : props.padding}px;
  pointer-events: ${props => !props.disabled ? undefined : 'none'};
  white-space: nowrap;
  width: ${props => props.full ? '100%' : undefined};
`

interface StyledButtonTextProps {
  color: string,
  disabled?: boolean
}
const StyledButtonText = styled.span<StyledButtonTextProps>`
  color: ${props => props.disabled ? props.theme.textColor : props.color};
  opacity: ${props => props.disabled ? 0.66 : 1};
`

const StyledExternalLink = styled.a`
  align-items: center;
  color: inherit;
  display: flex;
  flex: 1;
  height: 100%;
  justify-content: center;
  margin: 0 ${props => -props.theme.spacing[4]}px;
  padding: 0 ${props => props.theme.spacing[4]}px;
  text-decoration: none;
`

const StyledLink = styled(Link)`
  align-items: center;
  color: inherit;
  display: flex;
  flex: 1;
  height: 100%;
  justify-content: center;
  margin: 0 ${props => -props.theme.spacing[4]}px;
  padding: 0 ${props => props.theme.spacing[4]}px;
  text-decoration: none;
`

export default Button