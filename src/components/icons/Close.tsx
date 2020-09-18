import React from 'react'
import styled from 'styled-components'

import { useTheme } from '../../theme'

interface CloseProps {
  color?: string,
}

const Close: React.FC<CloseProps> = ({ color }) => {
  const { textColor } = useTheme()
  return (
    <StyledSVG color={color ? color : textColor}>
      <path d="M0 0h24v24H0z" fill="none"/>
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
    </StyledSVG>
  )
}

interface StyledSVGProps {
  color: string,
}
const StyledSVG = styled.svg.attrs(() => ({
  height: '24',
  viewBox: '0 0 24 24',
  width: '24'
}))<StyledSVGProps>`
  fill: ${props => props.color};
`

export default Close