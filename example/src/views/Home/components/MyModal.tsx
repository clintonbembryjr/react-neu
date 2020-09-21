import React from 'react'

import {
  Button,
  Modal,
  ModalActions,
  ModalContent,
  ModalProps,
  ModalTitle,
} from 'react-neu'

const MyModal: React.FC<ModalProps> = ({
  isOpen,
  onDismiss,
}) => (
  <Modal isOpen={isOpen}>
    <ModalTitle text="My Modal" />
    <ModalContent>

    </ModalContent>
    <ModalActions>
      <Button onClick={onDismiss} text="Confirm" />
    </ModalActions>
  </Modal>
)

export default MyModal