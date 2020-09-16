import React from 'react'

import Box from '../Box'

const ModalActions: React.FC = ({ children }) => {
  return (
    <Box
      alignItems="center"
      height={96}
      justifyContent="flex-end"
      paddingHorizontal={4}
      row
    >
      {children}
    </Box>
  )
}

export default ModalActions