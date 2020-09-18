import React, { useCallback, useState } from 'react'

import {
  Button,
  Card,
  CardContent,
  CardIcon,
  CardTitle,
  createTheme,
  Input,
  Modal,
  ModalActions,
  ModalContent,
  ModalTitle,
  Notice,
  NoticeContent,
  NoticeIcon,
  Spacer,
  Switch,
  SwitchButton,
  ThemeProvider,
} from 'react-neu'
import 'react-neu/dist/index.css'

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
        <Notice>
          <NoticeIcon>🍠</NoticeIcon>
          <NoticeContent>Test</NoticeContent>
        </Notice>
        <Card>
          <CardIcon>🍠</CardIcon>
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
