import React, { useCallback, useState } from 'react'

import {
  Button,
  Card,
  CardContent,
  CardTitle,
  createTheme,
  Input,
  Modal,
  ModalActions,
  ModalContent,
  ModalTitle,
  Spacer,
  Switch,
  SwitchButton,
  ThemeProvider,
} from 'react-neu-ui'
import 'react-neu-ui/dist/index.css'

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const handleCloseModal = useCallback(() => {
    setModalIsOpen(false)
  }, [setModalIsOpen])

  const handlePresentModal = useCallback(() => {
    setModalIsOpen(true)
  }, [setModalIsOpen])

  return (
    <ThemeProvider theme={createTheme({
      baseColor: { h: 338, s: 100, l: 41 },
      borderRadius: 28,
    })}>
      <div style={{
        margin: '72px auto',
        maxWidth: 512,
        width: '100%'
      }}>
        <Card>
          <CardTitle text="Card Title" />
          <CardContent>
            <Button
              onClick={handlePresentModal}
              text="test"
              variant="secondary"
            />
            <Spacer />
            <Switch>
              <SwitchButton active >Option 1</SwitchButton>
              <SwitchButton>Option 2</SwitchButton>
            </Switch>
            <Spacer />
            <Input />
          </CardContent>
        </Card>
        <Modal isOpen={modalIsOpen}>
          <ModalTitle text="Modal Title" />
          <ModalContent>
            test
          </ModalContent>
          <ModalActions>
            <Button onClick={handleCloseModal} text="Confirm" />
          </ModalActions>
        </Modal>
      </div>
    </ThemeProvider>
  )
}

export default App
