import { FC, useEffect } from 'react'
import { useTypesSelector } from '../hooks/useTypesSelector'
import { useAction } from '../hooks/useAction'
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Grid, IconButton } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';


const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650,
    },
}));

const CurrencyList: FC = () => {
    const history = useHistory()
    const classes = useStyles();
    const { currency, error, loading } = useTypesSelector(state => state.currency)
    const { fetchUsers, deleteCurrencyNote, searchCurrencyNote } = useAction()
    useEffect(() => {
        fetchUsers()
    }, [])
    const showNote = (event: React.MouseEvent, key: string): void => {
        event.stopPropagation();
        history.push(`/note/${key}`)
    }
    const handleClick = (event: React.MouseEvent, key: number): void => {
        event.stopPropagation();
        deleteCurrencyNote(key)
    }

    const searchNote = (event: React.ChangeEvent<HTMLInputElement>): void => {
        event.preventDefault()
        const noteValue = event.target.value.replace(/[^\d]/g, ' ')
        searchCurrencyNote(noteValue)
    }
    if (loading) {
        <CircularProgress color="secondary" />
    }
    if (error) {
        return <h1 style={{ color: 'red' }}>{error}</h1>
    }
    return (
        <Grid container>
            <TableContainer component={Paper}>
                <Table className={classes.table} size="small" >
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">ID</TableCell>
                            <TableCell align="center">Валюта</TableCell>
                            <TableCell align="center">Код валюты</TableCell>
                            <TableCell align="center"><TextField onChange={searchNote} label="Курс" size="small" /></TableCell>
                            <TableCell align="center">Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {currency.map(row => (
                            <TableRow key={row.r030} onClick={(event) => showNote(event, row.r030)} >
                                <TableCell scope="row" align="center">{row.r030}</TableCell>
                                <TableCell align="center">{row.txt}</TableCell>
                                <TableCell align="center">{row.cc}</TableCell>
                                <TableCell align="center">{row.rate}</TableCell>
                                <TableCell align="center" ><IconButton
                                    aria-label="delete"
                                    onClick={(event) => handleClick(event, row.r030)}
                                    size="small"
                                >
                                    <HighlightOffIcon />
                                </IconButton></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    )
}

export default CurrencyList
