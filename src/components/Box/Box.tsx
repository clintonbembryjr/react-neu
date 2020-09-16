import React, { useContext, useMemo } from 'react'
import styled, { ThemeContext } from 'styled-components'

export interface BoxProps {
  alignItems?: 'baseline' | 'center' | 'flex-end' | 'flex-start',
  children?: React.ReactNode,
  column?: boolean,
  flex?: number | string,
  height?: number,
  justifyContent?: 'center' | 'flex-end' | 'flex-start',
  padding?: number,
  paddingBottom?: number,
  paddingHorizontal?: number,
  paddingLeft?: number,
  paddingRight?: number,
  paddingTop?: number,
  reverse?: boolean,
  row?: boolean,
}

const Box: React.FC<BoxProps> = ({
  children,
  column,
  padding = 0,
  paddingBottom = 0,
  paddingHorizontal = 0,
  paddingLeft = 0,
  paddingRight = 0,
  paddingTop = 0,
  reverse,
  row,
  ...props
}) => {
  const { spacing } = useContext(ThemeContext)

  const display = useMemo(() => {
    if (row || column) {
      return 'flex'
    }
    return 'block'
  }, [column, row])

  const flexDirection = useMemo(() => {
    if (row && reverse) {
      return 'row-reverse'
    } if (column && reverse) {
      return 'column-reverse'
    } else if (column) {
      return 'column'
    }
    return undefined
  }, [column])


  return (
    <StyledBox
      {...props}
      display={display}
      flexDirection={flexDirection}
      padding={spacing[padding || 0]}
      paddingBottom={spacing[paddingBottom || 0]}
      paddingLeft={spacing[paddingLeft || paddingHorizontal || 0]}
      paddingRight={spacing[paddingRight || paddingHorizontal || 0]}
      paddingTop={spacing[paddingTop || 0]}
    >
      {children}
    </StyledBox>
  )
}

interface StyledBoxProps extends BoxProps {
  display: string,
  flexDirection?: string,
}

const StyledBox = styled.div<StyledBoxProps>`
  align-items: ${props => props.alignItems};
  display: ${props => props.display};
  flex: ${props => props.flex};
  flex-direction: ${props => props.flexDirection};
  height: ${props => props.height}px;
  justify-content: ${props => props.justifyContent};
  padding: ${props => props.padding}px;
  padding-bottom: ${props => props.paddingBottom}px;
  padding-left: ${props => props.paddingLeft}px;
  padding-right: ${props => props.paddingRight}px;
  padding-top: ${props => props.paddingTop}px;
`

export default Box