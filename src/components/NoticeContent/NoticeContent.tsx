import React from 'react'

import Box from '../Box'

const NoticeContent: React.FC = ({ children }) => (
  <Box
    flex={1}
    paddingHorizontal={2}
  >
    {children}
  </Box>
)

export default NoticeContent