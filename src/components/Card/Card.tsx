import React from 'react'

import Box from '../Box'
import Surface from '../Surface'

const Card: React.FC = ({ children }) => (
  <Surface elevation="N1">
    <Box overflow="hidden">
      {children}
    </Box>
  </Surface>
)

export default Card