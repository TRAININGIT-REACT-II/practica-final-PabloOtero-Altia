import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Box, Button, IconButton } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useState } from 'react';
import Modal from './Modal';

const MyList = ({ rows, rowsOrder, columns, handleSeeDetail, handleEdit, handleDelete }) => {
    const [modalState, setShowModal] = useState({ show: false, selectedRow: null });

    const openModal = (row) => {
        setShowModal({
            show: true,
            row: row
        });
    }
    const closeModal = () => {
        setShowModal({
            show: false, 
            row: null
        });
    }

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="notas">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell key={column}>{column}</TableCell>
                            ))}
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.length > 0 && rows.map((row) => (
                            <TableRow
                                key={row.title}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                {rowsOrder.map((key) => (
                                    <TableCell key={key}>{row[key]}</TableCell>
                                ))}
                                <TableCell align='right'>
                                    <IconButton onClick={() => handleSeeDetail(row)}>
                                        <VisibilityIcon />
                                    </IconButton>
                                    <IconButton onClick={() => handleEdit(row)}>
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton onClick={() => openModal(row)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Modal show={modalState.show} onClose={closeModal}>
                <h3>¿Estás seguro de que quieres eliminar esta nota?</h3>
                <Box display="flex" mt={1} justifyContent="space-between">
                    <Button variant="contained" color="error" onClick={closeModal}>Cancelar</Button>
                    <Button variant="contained" color="success" onClick={() => handleDelete(modalState.row, closeModal)}>OK</Button>
                </Box>
            </Modal>
        </>
    )
}

export default MyList;