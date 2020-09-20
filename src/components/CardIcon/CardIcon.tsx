import React from 'react'
import styled from 'styled-components'

const CardIcon: React.FC = ({ children }) => {
  return (
    <StyledCardIcon>
      {children}
    </StyledCardIcon>
  )
}

const StyledCardIcon = styled.div`
  align-items: center;
  display: flex;
  font-size: 48px;
  justify-content: center;
  margin: ${props => props.theme.spacing[4]}px auto;
`

export default CardIcon