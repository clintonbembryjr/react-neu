import React, { Fragment } from 'react'

import Box from '../Box'
import Spacer from '../Spacer'

const ModalActions: React.FC = ({ children }) => {
  const l = React.Children.toArray(children).length
  return (
    <Box
      alignItems="center"
      height={96}
      justifyContent="flex-end"
      paddingHorizontal={4}
      row
    >
      {React.Children.map(children, (child, i) => (
        <Fragment>
          {child}
          {i < l - 1 && <Spacer />}
        </Fragment>
      ))}
    </Box>
  )
}

export default ModalActions