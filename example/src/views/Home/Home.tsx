import React, { useCallback, useState } from 'react'

import {
  Box,
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
          <Box height={32} width={32}>
            <Surface fill />
          </Box>
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