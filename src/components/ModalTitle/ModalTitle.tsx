import React from 'react'
import styled from 'styled-components'

import Box from '../Box'
import Separator from '../Separator'

interface ModalTitleProps {
  text?: string
}

const ModalTitle: React.FC<ModalTitleProps> = ({ text }) => (
  <Box padding={4}>
    <StyledModalTitle>
      {text}
    </StyledModalTitle>
    <Separator />
  </Box>
)

const StyledModalTitle = styled.div`
  align-items: center;
  display: flex;
  font-size: 24px;
  font-weight: 700;
  justify-content: center;
  margin-bottom: ${props => props.theme.spacing[4]}px;
`

export default ModalTitle