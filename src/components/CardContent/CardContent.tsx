import React from 'react'

import Box from '../Box'

const CardContent: React.FC = ({ children }) => (
  <Box column margin={4}>
    {children}
  </Box>
)

export default CardContent