import React, { useState } from 'react'
import { TextField, Button, Paper } from '@mui/material';

export default function Form({ addTodo }) {
    const [text, setText] = useState('');
    const [id, setId] = useState(0);

    const todoCreate = (text) => {
        if (text) {
            const todoObject = { text: text, id: id };

            setId(id + 1);
            addTodo(todoObject);
            setText('');
        }
    }

    return (
        <Paper style={{ padding: "1em" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <TextField
                    id="outlined-basic"
                    label="Tarefa"
                    variant="outlined"
                    fullWidth
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <Button variant="text" onClick={() => todoCreate(text)}>Add</Button>
            </div>
        </Paper>
    )
}
