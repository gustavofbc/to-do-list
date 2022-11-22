import Form from "./components/Form"
import './App.css'
import TodoItem from "./components/TodoItem"
import { Container } from '@mui/material'

function App() {

  return (
    <Container maxWidth="xs" style={{ marginTop: "1em" }}>
      <Form />
      <TodoItem />
    </Container>
  )
}

export default App
