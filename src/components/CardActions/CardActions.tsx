import React, { Fragment } from 'react'
import styled from 'styled-components'

import Spacer from '../Spacer'

const CardActions: React.FC = ({ children }) => {
  const l = React.Children.toArray(children).length
  return (
    <StyledCardActions>
      {React.Children.map(children, (child, i) => (
        <Fragment>
          <StyledCardAction>
            {child}
          </StyledCardAction>
          {i < l - 1 && <Spacer />}
        </Fragment>
      ))}
    </StyledCardActions>
  )
}

const StyledCardActions = styled.div`
  align-items: center;
  display: flex;
  margin: 0;
  padding: ${props => props.theme.spacing[4]}px;
`

const StyledCardAction = styled.div`
  flex: 1;
`

export default CardActions