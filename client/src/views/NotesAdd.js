import { Typography } from "@mui/material";
import { Container, Box } from "@mui/material";
import { useState } from "react";
import NoteForm from "../components/Forms/NoteForm";
import { DEFAULT_STATE } from "../constants/note";
import useApi from "../hooks/useApi";


const NotesAdd = () => {
    const [note, setNote] = useState(DEFAULT_STATE);
    const addRequest = useApi(API_URL + "/notes", {}, false);

    const handleSubmit = () => {
        event.preventDefault();

        // Definimos la llamada para regsiter
        addRequest.updateParams({
            method: "POST",
            body: JSON.stringify({
                title: note.title,
                content: note.content,
            })
        });

        addRequest.perform();
        setNote(DEFAULT_STATE);
    }

    return (
        <Container>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography variant="h5">Crear nota</Typography>
                <NoteForm note={note} setNote={setNote} handleSubmit={handleSubmit} />
            </Box>
        </Container>
    )
}

export default NotesAdd;