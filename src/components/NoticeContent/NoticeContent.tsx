import React from 'react'

import Box from '../Box'

const NoticeContent: React.FC = ({ children }) => (
  <Box
    alignItems="center"
    flex={1}
    paddingHorizontal={4}
    row
  >
    {children}
  </Box>
)

export default NoticeContent