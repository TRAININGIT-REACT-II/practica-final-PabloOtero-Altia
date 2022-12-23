import { Container, Typography, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NoteForm from "../components/Forms/NoteForm";
import { DEFAULT_STATE } from "../constants/note";
import useApi from "../hooks/useApi";


const NotesDetail = () => {
    const [note, setNote] = useState(DEFAULT_STATE);
    const { id } = useParams();
    const getNoteRequest = useApi("/api/notes/" + id, {}, true);

    useEffect(() => {
        if (getNoteRequest.data !== null) {
            setNote(getNoteRequest.data)
        }
    }, [getNoteRequest.data])

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
                <Typography variant="h5">Ver nota</Typography>
                {getNoteRequest.error ? (
                    <Alert severity="warning">{getNoteRequest.error}</Alert>
                ) :
                    <NoteForm note={note} setNote={setNote} isDisabled={true} />
                }
            </Box>
        </Container>
    )
}

export default NotesDetail;