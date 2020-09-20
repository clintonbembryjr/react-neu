import React, { Fragment, useCallback, useState } from 'react'
import styled from 'styled-components'

import Box from '../Box'
import Button from '../Button'
import CloseIcon from '../icons/Close'
import Surface from '../Surface'

export interface NoticeProps {
  onDismiss?: () => void
}

const Notice: React.FC<NoticeProps> = ({ children, onDismiss }) => {
  const [hidden, setHidden] = useState(false)

  const handleDismissClick = useCallback(() => {
    setHidden(true)
    onDismiss && onDismiss()
  }, [onDismiss, setHidden])

  return (
    <Fragment>
      {!hidden && (
        <Surface>
          <Box
            alignItems="center"
            padding={4}
            row
          >
            <StyledInner>
              {children}
            </StyledInner>
            <Button
              onClick={handleDismissClick}
              round
              size="sm"
              variant="tertiary"
            >
              <CloseIcon />
            </Button>
          </Box>
        </Surface>
      )}
    </Fragment>
  )
}

const StyledInner = styled.div`
  align-items: center;
  display: flex;
  width: 100%;
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    align-items: center;
  }
`

export default Notice