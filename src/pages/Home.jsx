import Form from "../components/Form"
import { Container, List } from '@mui/material'
import { useState } from "react";
import TodoItem from "../components/TodoItem";

export default function Home() {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    }

    const deleteTodo = (id) => {
        let filtered = todos.filter((todo) => todo.id !== id);
        setTodos(filtered);
    }

    return (
        <Container maxWidth="xs" style={{ marginTop: "1em" }}>
            <Form addTodo={addTodo} />
            <List sx={{ marginTop: "1em" }}>
                {todos.map((todo) => (
                    <div key={todo.id} style={{ marginTop: '1em' }}>
                        <TodoItem todo={todo} deleteTodo={deleteTodo} />
                    </div>
                ))}
            </List>
        </Container >
    )
}
