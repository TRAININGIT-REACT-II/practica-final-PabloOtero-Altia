import Typography from '@mui/material/Typography';
import MyList from '../components/MyList';
import Grid from '@mui/material/Unstable_Grid2';
import { Button } from '@mui/material';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import { useNavigate, Link } from 'react-router-dom';
import useApi from '../hooks/useApi';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getToken } from '../selectors/user';

const columns = ['Título', 'Contenido', 'Autor', 'Fecha creación', 'Fecha modificación'];
const rowsOrder = ['title', 'content', 'author', 'createdAt', 'updatedAt'];

const NotesList = () => {
    const navigate = useNavigate();
    const [rows, setRows] = useState([])
    const notesRequest = useApi(API_URL + "/notes", {}, true);
    const token = useSelector((state) => getToken(state));

    useEffect(() => {
        if (notesRequest.data !== null) {
            setRows(notesRequest.data)
        }
    }, [notesRequest.data])

    const handleSeeDetail = (note) => {
        navigate('/notes/' + note.id)
        console.log("entre en notas")
    }

    const handleEdit = (note) => {
        navigate('/notes/' + note.id + '/edit')
    }

    const handleDelete = (note, closeModal) => {
        fetch("/api/notes/" + note.id, {
            method: "DELETE",
            headers: {
                "api-token": token
            },
        })
            .then((res) => res.json())
            .then((json) => {
                if (json.error == null) {
                    closeModal();
                    setRows(rows.filter( r => r.id !== note.id));
                }
            });
    }

    return (
        <Grid container spacing={2} sx={{ flexGrow: 1 }}>
            <Grid mt={2} mb={2} xs={4} md={2}>
                <Typography variant='h5' noWrap>
                    Notes
                </Typography>

            </Grid>
            <Grid mt={2} mb={2} xs={8} md={2} xsOffset="auto" justifyItems='right'>
                <Button variant="contained" startIcon={<NoteAddIcon />} sx={{
                    whiteSpace: 'nowrap',
                    minWidth: 'auto'
                }} component={Link}
                    to={'/notes/new'} >Crear nota</Button>
            </Grid>
            <Grid xs={12}>
                <MyList rows={rows} rowsOrder={rowsOrder} columns={columns} handleSeeDetail={handleSeeDetail} handleEdit={handleEdit} handleDelete={handleDelete} />
            </Grid>
        </Grid >
    );
}
export default NotesList;