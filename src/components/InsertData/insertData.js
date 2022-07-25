import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function InsertData() {
    return (
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={referensi}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Referensi" />}
        />
    );
}

const referensi = [
    { label: 'A.1'},
    { label: 'A.2.1'},
    { label: 'A.2.2'},
    { label: 'A.2.3'},
    { label: 'A.2.4'},
    { label: 'A.2.5'},
    { label: 'A.2.6'},
    { label: 'A.2.7'},
    { label: 'A.2.8'},
    { label: 'A.2.9'},
    { label: 'A.2.10'},
    { label: 'A.3.1'},
    { label: 'A.3.2'},
    { label: 'A.3.3'},
    { label: 'A.4.1'}, 
    { label: 'A.5.1'},

    { label: 'B.1'},
    { label: 'B.2'},
    { label: 'B.3'},
    { label: 'B.4'},
    { label: 'B.5'},
    { label: 'B.6'},
    { label: 'B.7'},
    { label: 'B.8'},
    { label: 'B.9'},
    { label: 'B.10'},
];
