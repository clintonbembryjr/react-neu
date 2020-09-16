import React, { Fragment } from 'react'

import Box from '../Box'
import Spacer from '../Spacer'
import Surface from '../Surface'

const Switch: React.FC = ({ children }) => {
  const l = React.Children.toArray(children).length

  return (
    <Surface elevation="N2">
      <Box padding={2} row>
        {React.Children.map(children, (child, i) => (
          <Fragment>
            {child}
            {i < l - 1 && <Spacer size="sm" />}
          </Fragment>
        ))}
      </Box>
  </Surface>
  )
}

export default Switch