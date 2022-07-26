import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';

export default function InsertData() {

    const [tanggalValue, setTanggalValue] = React.useState("");
    const [refValue, setRefValue] = React.useState(referensi[0]);
    const [refInput, setRefInput] = React.useState("");
    const [ketValue, setKetValue] = React.useState("");
    const [pemasukanValue, setPemasukanValue] = React.useState("");
    const [pengeluaranValue, setPengeluaranValue] = React.useState("");

    const [refState, setRefState] = React.useState(true);

    const refHandle = (newRef) => {

        setRefInput(newRef);

        if (newRef[0] === 'A') {

            setPengeluaranValue("");
            setRefState(true);

        } else if (newRef[0] === 'B') {

            setPemasukanValue("")
            setRefState(false);
        }

    }

    const onSubmitForm = (e) => {

        e.preventDefault();
        console.log(tanggalValue);
        console.log(refValue.label);
        console.log(ketValue)
        console.log(pemasukanValue);
        console.log(pengeluaranValue);


    }

    return (
        <>
            <form onSubmit={onSubmitForm}>
                <div className="flex gap-2">
                    <TextField
                        id="outlined-basic"
                        label="Tanggal"
                        variant="outlined"
                        value={tanggalValue}
                        onChange={e => setTanggalValue(e.target.value)}
                    />
                    <Autocomplete
                        disablePortal
                        value={refValue}
                        onChange={(e, newVal) => setRefValue(newVal)}
                        inputValue={refInput}
                        onInputChange={(e, newInputVal) => refHandle(newInputVal)}
                        id="combo-box-demo"
                        options={referensi}
                        sx={{ width: 132 }}
                        renderInput={(params) => <TextField {...params} label="Referensi" />}

                    />
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Keterangan"
                        multiline
                        maxRows={5}
                        value={ketValue}
                        onChange={e => setKetValue(e.target.value)}
                    />


                    {refState ?
                        <FormControl>
                            <InputLabel htmlFor="outlined-adornment-amount">Pemasukan</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                type="number"
                                startAdornment={<InputAdornment position="start">Rp</InputAdornment>}
                                label="Pemasukan"
                                value={pemasukanValue}
                                onChange={e => setPemasukanValue(e.target.value)}
                            />
                        </FormControl> :
                        <FormControl>
                            <InputLabel htmlFor="outlined-adornment-amount">Pemasukan</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                type="number"
                                startAdornment={<InputAdornment position="start">Rp</InputAdornment>}
                                label="Pengeluaran"
                                value={pengeluaranValue}
                                onChange={e => setPengeluaranValue(e.target.value)}
                            />
                        </FormControl>
                    }

                    <button
                        key="SignIn"
                        className="no-underline text-white rounded-lg font-semibold  active:bg-gray-500 bg-black py-2 px-4 transition duration-75 ease-in-ou"
                        type="submit"
                    >
                        masuk
                    </button>
                </div>
            </form>
        </>
    );
}

const referensi = [
    { label: 'A.1' },
    { label: 'A.2.1' },
    { label: 'A.2.2' },
    { label: 'A.2.3' },
    { label: 'A.2.4' },
    { label: 'A.2.5' },
    { label: 'A.2.6' },
    { label: 'A.2.7' },
    { label: 'A.2.8' },
    { label: 'A.2.9' },
    { label: 'A.2.10' },
    { label: 'A.3.1' },
    { label: 'A.3.2' },
    { label: 'A.3.3' },
    { label: 'A.4.1' },
    { label: 'A.5.1' },

    { label: 'B.1' },
    { label: 'B.2' },
    { label: 'B.3' },
    { label: 'B.4' },
    { label: 'B.5' },
    { label: 'B.6' },
    { label: 'B.7' },
    { label: 'B.8' },
    { label: 'B.9' },
    { label: 'B.10' },
];
