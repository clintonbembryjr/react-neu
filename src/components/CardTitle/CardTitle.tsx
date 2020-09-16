import React from 'react'
import styled from 'styled-components'

import Box from '../Box'
import Separator from '../Separator'

interface CardTitleProps {
  text?: string
}

const CardTitle: React.FC<CardTitleProps> = ({ text }) => (
  <Box>
    <StyledCardTitle>{text}</StyledCardTitle>
    <Box paddingHorizontal={4}>
      <Separator />
    </Box>
  </Box>
)

const StyledCardTitle = styled.span`
  display: flex;
  flex: 1;
  flex-direction: column;
  font-size: 18px;
  padding: ${props => props.theme.spacing[4]}px;
  text-align: center;
`

export default CardTitle