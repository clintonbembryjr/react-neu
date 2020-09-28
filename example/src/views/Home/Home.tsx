import React, { useCallback, useState } from 'react'

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardTitle,
  Container,
  Surface,
} from 'react-neu'

import MyModal from './components/MyModal'

const Home: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const handleCloseModal = useCallback(() => {
    setModalIsOpen(false)
  }, [setModalIsOpen])

  const handlePresentModal = useCallback(() => {
    setModalIsOpen(true)
  }, [setModalIsOpen])

  return (
    <>
      <Container>
        <div style={{ height: 512, width: 512 }}>
          <Surface fill />
        </div>
        <Card>
          <CardTitle text="My App" />
          <CardContent>

          </CardContent>
          <CardActions>
            <Button onClick={handlePresentModal} text="Confirm" variant="tertiary" />
          </CardActions>
        </Card>
      </Container>
      <MyModal isOpen={modalIsOpen} onDismiss={handleCloseModal} />
    </>
  )
}

export default Home