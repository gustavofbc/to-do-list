import React from 'react'
import { TextField, Button, Paper } from '@mui/material';

export default function Form() {
    return (
        <Paper style={{ padding: "1em" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <TextField id="outlined-basic" label="Tarefa" variant="outlined" fullWidth />
                <Button variant="text">Add</Button>
            </div>
        </Paper>
    )
}
