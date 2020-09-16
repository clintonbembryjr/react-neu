import React from 'react'

import Box from '../Box'

const ModalContent: React.FC = ({ children }) => (
  <Box column padding={4}>
    {children}
  </Box>
)

export default ModalContent