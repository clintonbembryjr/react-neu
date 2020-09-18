import React, { Fragment, useCallback, useState } from 'react'

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
            height={96}
            paddingHorizontal={4}
            row
          >
            {children}
            <Button
              onClick={handleDismissClick}
              round
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

export default Notice