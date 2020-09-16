import React, { useContext } from 'react'
import styled from 'styled-components'

import { ThemeContext } from '../../theme'

export interface SurfaceProps {
  detached?: boolean,
  elevation?: "N2" | "N1" | 0 | 1 | 2
}

const Surface: React.FC<SurfaceProps> = ({
  children,
  detached,
  elevation = 0,
}) => {
  const { surfaces } = useContext(ThemeContext).theme
  const { background, border, highlight, shadow } = surfaces[elevation]

  let boxShadow = shadow
  if (!detached) {
    boxShadow = `${boxShadow}, ${highlight}`
  }
  return (
    <StyledSurface
      background={background}
      border={border}
      boxShadow={boxShadow}
    >
      {children}
    </StyledSurface>
  )
}

interface StyledSurfaceProps {
  background: string,
  border: string,
  boxShadow: string
}

const StyledSurface = styled.div<StyledSurfaceProps>`
  background: ${props => props.background};
  border: ${props => props.border};
  border-radius: ${props => props.theme.borderRadius}px;
  box-shadow: ${props => props.boxShadow};
`

export default Surface