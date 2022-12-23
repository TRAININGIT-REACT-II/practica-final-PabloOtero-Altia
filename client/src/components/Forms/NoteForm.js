import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';


const NoteForm = ({ note, setNote, handleSubmit, isDisabled = false }) => {

    // Devolvemos una funcion para modificar una parte del estado!
    const onChange = (key) => {
        return (e) => setNote({
            ...note,
            [key]: e.target.value
        });
    }

    return (
        <Box component="form" onSubmit={handleSubmit} noValidate mt={1}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="Titulo"
                label="Título"
                name="title"
                autoComplete="title"
                value={note.title}
                onChange={onChange("title")}
                autoFocus
                disabled={isDisabled}
            />

            <TextField
                margin="normal"
                required
                fullWidth
                name="content"
                label="Contenido"
                type="content"
                id="content"
                autoComplete="content"
                value={note.content}
                onChange={onChange("content")}
                multiline
                minRows={4}
                disabled={isDisabled}
            />
            {!isDisabled && <Box
                mt={1}
                display="flex"
                justifyContent="flex-end"
                alignItems="flex-end"
            >
                <Button
                    type="submit"
                    variant="contained"
                >
                    Guardar
                </Button>
            </Box>
            }

        </Box>
    );
}

export default NoteForm;