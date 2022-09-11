import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import ClearIcon from '@mui/icons-material/Clear';
import axios from "axios";

const Swal = require('sweetalert2')

export default function InsertData() {

    const [tanggalValue, setTanggalValue] = React.useState("");
    const [refValue, setRefValue] = React.useState(referensi[0]);
    const [refInput, setRefInput] = React.useState("");
    const [kategoriValue, setKategoriValue] = React.useState(kategori[0]);
    const [ketValue, setKetValue] = React.useState("");
    const [nominalValue, setNominalValue] = React.useState("");
    const [selectedFile, setSelectedFile] = React.useState([]);

    const [refState, setRefState] = React.useState(true);

    const refHandle = (newRef) => {

        setRefInput(newRef);

        if (newRef[0] === 'A') {

            setRefState(true);

        } else if (newRef[0] === 'B') {

            setRefState(false);
        }

    }

    const onSubmitForm = (e) => {

        e.preventDefault();
        if (tanggalValue === "" || ketValue === "") {

            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Tanggal atau Keterangan tidak dapat kosong',
                showConfirmButton: false,
                timer: 1500
            });

            return;
        }

        if (nominalValue === "") {

            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Jumlah Nominal tidak dapat kosong',
                showConfirmButton: false,
                timer: 1500
            });

            return;

        }

        let referensiValue = refValue.label.split(" ");

        if (selectedFile.length !== 0) {

            let danaData = new FormData();
            danaData.append("tanggal", tanggalValue);
            danaData.append("referensi", referensiValue[0]);
            danaData.append("kategori", kategoriValue.label);
            danaData.append("keterangan", ketValue);
            danaData.append("imgBukti", selectedFile);
            danaData.append("nominal", nominalValue);

            var config = {
                method: 'post',
                url: 'http://localhost:4000/danaInput',
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                data: danaData
            };
            axios(config)
                .then(function (response) {

                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Data berhasil ditambahkan',
                        showConfirmButton: false,
                        timer: 1500
                    });

                    setTanggalValue("");
                    setRefValue("");
                    setKategoriValue("");
                    setKetValue("");
                    setNominalValue("");
                    setSelectedFile([]);
                    console.log(response.data);

                    return;


                })
                .catch(function (error) {

                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: 'Gagal memasukkan data',
                        showConfirmButton: false,
                        timer: 1500
                    });

                    console.error(error);
                });
        } else {

            axios
                .post(
                    "http://localhost:4000/danaInputDefault", {

                    tanggal: tanggalValue,
                    referensi: referensiValue[0],
                    kategori: kategoriValue.label,
                    keterangan: ketValue,
                    nominal: nominalValue

                })
                .then(function (response) {

                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Data berhasil ditambahkan',
                        showConfirmButton: false,
                        timer: 1500
                    });

                    setTanggalValue("");
                    setRefValue("");
                    setKategoriValue("");
                    setKetValue("");
                    setNominalValue("");
                    setSelectedFile([]);
                    console.log(response.data);

                    return;

                })
                .catch(function (error) {

                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: 'Gagal memasukkan data',
                        showConfirmButton: false,
                        timer: 1500
                    });

                    console.error(error);
                });


        }

    }

    const handleChangeFile = (e) => {
        e.preventDefault();

        var imagefile = document.querySelector('#fileInput');
        setSelectedFile(imagefile.files[0]);

    }

    return (
        <>
            <div>
                <div className="flex flex-col">
                    <h1 className="font-sans font-bold text-left text-2xl pb-5">
                        Pemasukan Data
                    </h1>
                </div>
                <form onSubmit={onSubmitForm}>
                    <div className="">
                        <div className="flex flex-col">
                            <div className="flex flex-col sm:flex-row gap-2 mb-4">
                                <TextField
                                    id="outlined-basic"
                                    label="Tanggal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    type="date"
                                    sx={{width:230}}
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
                                    sx={{ width: 99.9/100 }}
                                    renderInput={(params) => <TextField {...params} label="Referensi" />}

                                />
                            </div>

                            <div className="flex flex-col sm:flex-row gap-2 mb-4">
                                <Autocomplete
                                    disablePortal
                                    value={kategoriValue}
                                    onChange={(e, newVal) => setKategoriValue(newVal)}
                                    id="combo-box-demo"
                                    options={kategori}
                                    sx={{ width: 250 }}
                                    renderInput={(params) => <TextField {...params} label="Kategori" />}

                                />

                                <TextField
                                    id="outlined-multiline-flexible"
                                    label="Keterangan"
                                    multiline
                                    maxRows={5}
                                    sx={{ width: 99.9/100 }}
                                    value={ketValue}
                                    onChange={e => setKetValue(e.target.value)}
                                />
                            </div>

                            <div className="flex gap-2 mb-4">

                                {refState ?
                                    <FormControl sx={{ width: 250 }}>
                                        <InputLabel htmlFor="outlined-adornment-amount">Pemasukan</InputLabel>
                                        <OutlinedInput
                                            id="outlined-adornment-amount"
                                            type="number"
                                            startAdornment={<InputAdornment position="start">Rp</InputAdornment>}
                                            label="Pemasukan"
                                            value={nominalValue}
                                            onChange={e => setNominalValue(e.target.value)}
                                        />
                                    </FormControl> :
                                    <FormControl sx={{ width: 250 }}>
                                        <InputLabel htmlFor="outlined-adornment-amount">Pengeluaran</InputLabel>
                                        <OutlinedInput
                                            id="outlined-adornment-amount"
                                            type="number"
                                            startAdornment={<InputAdornment position="start">Rp</InputAdornment>}
                                            label="Pengeluaran"
                                            value={nominalValue}
                                            onChange={e => setNominalValue(e.target.value)}
                                        />
                                    </FormControl>
                                }

                                

                            </div>
                            <Button key="submit" type="submit" variant="contained">
                                    <div className="ml-5 mr-5">
                                        Submit
                                    </div>
                                </Button>

                        </div>

                        <div className="flex pt-2 space-x-2">
                            <Button variant="contained" component="label" type="button">
                                <AttachFileIcon /> Upload Dokumen
                                <input hidden accept="image/*" type="file" id="fileInput" onChange={handleChangeFile} />
                            </Button>
                            <h1 className="font-mono text-blue-400">{selectedFile.name}</h1>
                            {selectedFile.length === 0 ? <></> : <Button onClick={() => setSelectedFile([])}><ClearIcon /></Button>}
                        </div>
                    </div>

                </form>
            </div>
        </>
    );
}

const referensi = [
    { label: 'A.1 Saldo Tahun Sebelumnya' },
    { label: "A.2.1 Tromol Jum'at" },
    { label: 'A.2.2 Kencleng Sedekah Subuh & Harian' },
    { label: 'A.2.3 Tromol Teraweh' },
    { label: 'A.2.4 Tromol Idul Fitri' },
    { label: 'A.2.5 Tromol Idul Adha' },
    { label: 'A.2.6 Tromol Yatim' },
    { label: 'A.2.7 Tromol Baitul Maal' },
    { label: 'A.2.8 Donatur Bulanan (Kartu)' },
    { label: 'A.2.9 Infaq & Sedekah' },
    { label: 'A.2.10 Bazis Ramadhan' },
    { label: 'A.3.1 Infaq Tablig Akbar' },
    { label: 'A.3.2 Gema Ramadhan' },
    { label: 'A.3.3 Infaq Renovasi' },
    { label: 'A.4.1 Proposal' },
    { label: 'A.5.1 Iuran anggota layanan kedukaan' },

    { label: 'B.1 Operasional Keskretariatan' },
    { label: 'B.2 Operasional Kebendaharaan' },
    { label: 'B.3 Bidang Usaha' },
    { label: 'B.4 Bidang Peribadatan dan PHBI' },
    { label: 'B.5 Bidang Pendidikan dan Dakwah' },
    { label: 'B.6 Bidang PPPFS' },
    { label: 'B.7 Bidang Humas dan Lembaga' },
    { label: 'B.8 Bidang Pemeliharaan & Perlengkapan' },
    { label: 'B.9 Bidang Pemuda & Remaja Masjid' },
    { label: 'B.10 Bidang Pembinaan Wanita' },
];

const kategori = [
    { label: 'Operasional' },
    { label: 'Anak Yatim' },
    { label: 'Baitul Mal' },
    { label: 'Renovasi' }
]

const refs = [
    'A.1',
    'A.2.1',
    'A.2.2',
    'A.2.3',
    'A.2.4',
    'A.2.5',
    'A.2.6',
    'A.2.7',
    'A.2.8',
    'A.2.9',
    'A.2.10',
    'A.3.1',
    'A.3.2',
    'A.3.3',
    'A.4.1',
    'A.5.1',
    'B.1',
    'B.2',
    'B.3',
    'B.4',
    'B.5',
    'B.6',
    'B.7',
    'B.8',
    'B.9',
    'B.10',
]
