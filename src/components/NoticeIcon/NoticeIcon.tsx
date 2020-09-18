import React from 'react'
import styled from 'styled-components'

const NoticeIcon: React.FC = ({ children }) => (
  <StyledIcon>{children}</StyledIcon>
)


const StyledIcon = styled.span.attrs({ role: 'img' })`
  font-size: 32px;
`

export default NoticeIcon