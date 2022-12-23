import { Alert } from "@mui/material";
import { Container, Typography, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NoteForm from "../components/Forms/NoteForm";
import { DEFAULT_STATE } from "../constants/note";
import useApi from "../hooks/useApi";


const NotesEdit = () => {
    const [note, setNote] = useState(DEFAULT_STATE);
    const { id } = useParams();
    const getNoteRequest = useApi(API_URL + "/notes" + id, {}, true);
    const updateNoteRequest = useApi(API_URL + "/notes"+ id, { method: "PUT" }, false);

    useEffect(() => {
        if (getNoteRequest.data !== null) {
            setNote(getNoteRequest.data)
        }
    }, [getNoteRequest.data])

    useEffect(() => {
        if (updateNoteRequest.data !== null) {
            setNote(updateNoteRequest.data)
        }
    }, [updateNoteRequest.data])

    const handleSubmit = () => {
        event.preventDefault();

        updateNoteRequest.updateParams({
            body: JSON.stringify({
                title: note.title,
                content: note.content,
            }),
        });
        updateNoteRequest.perform();
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
                <Typography variant="h5">Editar nota</Typography>
                {getNoteRequest.error ? (
                    <Alert severity="warning" sx={{marginTop:2, minWidth: '50%'}}>{getNoteRequest.error}</Alert>
                ) :
                    <NoteForm note={note} setNote={setNote} handleSubmit={handleSubmit} />
                }
            </Box>
        </Container>
    )
}

export default NotesEdit;