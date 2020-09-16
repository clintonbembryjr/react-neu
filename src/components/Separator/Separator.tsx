import React, { useContext, useMemo } from 'react'
import styled from 'styled-components'

import { ThemeContext } from '../../theme'

type SeparatorOrientation = 'horizontal' | 'vertical'

interface SeparatorProps {
  orientation?: SeparatorOrientation,
  stretch?: boolean
}

const Separator: React.FC<SeparatorProps> = ({ orientation, stretch }) => {

  const { highlightColor, shadowColor } = useContext(ThemeContext).theme

  let boxShadow = `0 -1px 0px ${shadowColor}, 0 1px 0px ${highlightColor}`
  if (orientation === 'vertical') {
    boxShadow = `-1px 0px 0px ${shadowColor}, 1px 0px 0px ${highlightColor}`
  }

  const Content = useMemo(() => {
    return <StyledSeparator boxShadow={boxShadow} orientation={orientation} />
  }, [boxShadow, orientation])

  if (stretch) {
    return (
      <div style={{ alignSelf: 'stretch' }}>
        {Content}
      </div>
    )
  }

  return Content
}

interface StyledSeparatorProps {
  boxShadow: string,
  orientation?: SeparatorOrientation
}

const StyledSeparator = styled.div<StyledSeparatorProps>`
  box-shadow: ${props => props.boxShadow};
  height: ${props => props.orientation === 'vertical' ? '100%' : '1px'};
  width: ${props => props.orientation === 'vertical' ? '1px' : '100%'};
`

export default Separator