import React from 'react'
import styled from 'styled-components'

import Box from '../Box'
import Separator from '../Separator'

interface CardTitleProps {
  text?: string
}

const CardTitle: React.FC<CardTitleProps> = ({ text }) => (
  <Box marginTop={4}>
    <StyledCardTitle>{text}</StyledCardTitle>
    <Box marginTop={4} marginHorizontal={4}>
      <Separator />
    </Box>
  </Box>
)

const StyledCardTitle = styled.span`
  display: flex;
  flex: 1;
  flex-direction: column;
  font-size: 18px;
  text-align: center;
`

export default CardTitle