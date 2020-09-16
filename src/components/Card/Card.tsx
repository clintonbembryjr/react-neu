import React from 'react'

import Surface from '../Surface'

const Card: React.FC = ({ children }) => (
  <Surface elevation="N1">
    {children}
  </Surface>
)

export default Card