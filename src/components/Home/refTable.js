import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';

import axios from "axios";

const EnhancedTableToolbar = (props) => {
    const { numSelected } = props;
    const { title } = props;

    return (
        <Toolbar
            sx={{
                pl: { sm: 2 },
                pr: { xs: 1, sm: 1 },
                ...(numSelected > 0 && {
                    bgcolor: (theme) =>
                        alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
                }),
            }}
        >
            {numSelected > 0 ? (
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    color="inherit"
                    variant="subtitle1"
                    component="div"
                >
                    {numSelected} selected
                </Typography>
            ) : (
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    variant="h6"
                    id="tableTitle"
                    component="div"
                >
                    {title}
                </Typography>
            )}

            {numSelected > 0 ? (
                <Tooltip title="Delete">
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            ) : (
                <Tooltip title="Filter list">
                    <IconButton>
                        <FilterListIcon />
                    </IconButton>
                </Tooltip>
            )}
        </Toolbar>
    );
};

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
};

export default function DenseTable() {
    const [selected, setSelected] = React.useState([]);
    const [hasDataRef, sethasDataRef] = React.useState(false);
    const [hasilDataRef, sethasilDataRef] = React.useState(null);
    const [hasData, setHasData] = React.useState(false);
    const [hasilData, setHasilData] = React.useState(null);

    React.useEffect(() => {
        getDataReferensi();
        getDataDana();
    }, []);

    //var A1, A21, A23, A24, A25, A26, A27, A28, A29, A210, A31, A32, A33, A41, A51;
    var B1, B2, B3, B4, B5, B6, B7, B8, B9, B10;

    var A = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    const getDataReferensi = async () => {
        axios
            .get(
                "http://localhost:4000/dataRef"
            )
            .then(function (response) {

                console.log(response.data);

                sethasilDataRef(response.data);
                if (response.data.length === 0) {

                    sethasDataRef(false);

                } else {

                    sethasDataRef(true);

                }
            })
            .catch(function (error) {
                // alert("Can't found your team")
                console.error(error);
            });
    }

    const getDataDana = async () => {
        axios
            .get(
                "http://localhost:4000/dana"
            )
            .then(function (response) {

                console.log(response.data);

                setHasilData(response.data);
                if (response.data.length === 0) {

                    setHasData(false);

                } else {

                    setHasData(true);

                }
            })
            .catch(function (error) {
                // alert("Can't found your team")
                console.error(error);
            });
    }

    function createData(referensi, keterangan, nominal) {
        return { referensi, keterangan, nominal };
    }

    var rowsPendapatan = [];

    if (hasData) {
        for (let i = 0; i < hasilData.length; i++) {
            if (hasilData[i].referensi === 'A.1') {
                A[0] += parseInt(hasilData[i].nominal, 10);
            } else if (hasilData[i].referensi === 'A.2.1') {
                A[1] += parseInt(hasilData[i].nominal, 10);
            } else if (hasilData[i].referensi === 'A.2.3') {
                A[2] += parseInt(hasilData[i].nominal, 10);
            } else if (hasilData[i].referensi === 'A.2.4') {
                A[3] += parseInt(hasilData[i].nominal, 10);
            } else if (hasilData[i].referensi === 'A.2.5') {
                A[4] += parseInt(hasilData[i].nominal, 10);
            } else if (hasilData[i].referensi === 'A.2.6') {
                A[5] += parseInt(hasilData[i].nominal, 10);
            } else if (hasilData[i].referensi === 'A.2.7') {
                A[6] += parseInt(hasilData[i].nominal, 10);
            } else if (hasilData[i].referensi === 'A.2.8') {
                A[7] += parseInt(hasilData[i].nominal, 10);
            } else if (hasilData[i].referensi === 'A.2.9') {
                A[8] += parseInt(hasilData[i].nominal, 10);
            } else if (hasilData[i].referensi === 'A.2.10') {
                A[9] += parseInt(hasilData[i].nominal, 10);
            } else if (hasilData[i].referensi === 'A.3.1') {
                A[10] += parseInt(hasilData[i].nominal, 10);
            } else if (hasilData[i].referensi === 'A.3.2') {
                A[11] += parseInt(hasilData[i].nominal, 10);
            } else if (hasilData[i].referensi === 'A.3.3') {
                A[12] += parseInt(hasilData[i].nominal, 10);
            } else if (hasilData[i].referensi === 'A.4.1') {
                A[13] += parseInt(hasilData[i].nominal, 10);
            } else if (hasilData[i].referensi === 'A.5.1') {
                A[14] += parseInt(hasilData[i].nominal, 10);
            } else if (hasilData[i].referensi === 'B.1') {
                B1 += hasilData[i].nominal;
            } else if (hasilData[i].referensi === 'B.2') {
                B2 += hasilData[i].nominal;
            } else if (hasilData[i].referensi === 'B.3') {
                B3 += hasilData[i].nominal;
            } else if (hasilData[i].referensi === 'B.4') {
                B4 += hasilData[i].nominal;
            } else if (hasilData[i].referensi === 'B.5') {
                B5 += hasilData[i].nominal;
            } else if (hasilData[i].referensi === 'B.6') {
                B6 += hasilData[i].nominal;
            } else if (hasilData[i].referensi === 'B.7') {
                B7 += hasilData[i].nominal;
            } else if (hasilData[i].referensi === 'B.8') {
                B8 += hasilData[i].nominal;
            } else if (hasilData[i].referensi === 'B.9') {
                B9 += hasilData[i].nominal;
            } else if (hasilData[i].referensi === 'B.10') {
                B10 += hasilData[i].nominal;
            }
        }
    }

    if (hasDataRef) {
        for (let i = 0; i < hasilDataRef.length; i++) {
            if (hasilDataRef[i].referensi[0] !== 'B') {
                rowsPendapatan.push(createData(
                    hasilDataRef[i].referensi,
                    hasilDataRef[i].deskripsi,
                    A[i]
                ));
            }
        }
    }


    const rowsPengeluaran = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    ]

    return (
        <>
            <div className="pb-4">
                <TableContainer component={Paper}>
                    <EnhancedTableToolbar numSelected={selected.length} title="A. Pendapatan" />
                    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">

                        <TableHead>
                            <TableRow>
                                <TableCell>REFERENSI</TableCell>
                                <TableCell align="left">KETERANGAN</TableCell>
                                <TableCell align="right">NOMINAL</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rowsPendapatan.map((row) => (
                                <TableRow
                                    key={row.referensi}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.referensi}
                                    </TableCell>
                                    <TableCell align="left">{row.keterangan}</TableCell>
                                    <TableCell align="right">{row.nominal}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>

            <TableContainer component={Paper}>
                <EnhancedTableToolbar numSelected={selected.length} title="B. Pengeluaran" />
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">

                    <TableHead>
                        <TableRow>
                            <TableCell>Dessert (100g serving)</TableCell>
                            <TableCell align="right">Calories</TableCell>
                            <TableCell align="right">Fat&nbsp;(g)</TableCell>
                            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                            <TableCell align="right">Protein&nbsp;(g)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rowsPengeluaran.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right">{row.protein}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </>
    );
}
