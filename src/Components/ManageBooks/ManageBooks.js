import React, { useEffect, useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
const ManageBooks = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('https://pure-springs-85119.herokuapp.com/books')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    const handleDeleteBook = (bookId) => {
        console.log('clocked', bookId)
        fetch(`https://pure-springs-85119.herokuapp.com/deleteBook/${bookId}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => console.log('deleted successfully', bookId))
    }
    const StyledTableCell = withStyles((theme) => ({
        head: {
            fontSize: 24,
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        body: {
            fontSize: 18,
        },
    }))(TableCell);

    const StyledTableRow = withStyles((theme) => ({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
        },
    }))(TableRow);
    const useStyles = makeStyles({
        table: {
            minWidth: 800,
        },
    });
    const classes = useStyles();
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Book Name</StyledTableCell>
                        <StyledTableCell align="right">Author Name</StyledTableCell>
                        <StyledTableCell align="right">Price</StyledTableCell>
                        <StyledTableCell align="right">Action</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {books.map((book) => (
                        <StyledTableRow key={book.bookName}>
                            <StyledTableCell component="th" scope="row">
                                {book.bookName}
                            </StyledTableCell>
                            <StyledTableCell align="right">{book.authorName}</StyledTableCell>
                            <StyledTableCell align="right">{book.bookPrice}</StyledTableCell>
                            <StyledTableCell align="right">
                                <EditIcon className="text-white bg-success p-1 m-1"></EditIcon>
                                <DeleteForeverIcon className="bg-danger text-white p-1 m-1" onClick={() => handleDeleteBook(book._id)}></DeleteForeverIcon>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ManageBooks;