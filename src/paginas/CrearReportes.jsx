/* tipo ENUM('Maltrato', 'Perdida', 'Adopcion'),
id_animal INT,
id_usuario INT,
fecha_reporte DATE,
notas VARCHAR(200), */


import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import BarraSuperiorIzquierda from './componentes/BarraSuperiorIquierda'


function CrearReporte() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div>
            <BarraSuperiorIzquierda></BarraSuperiorIzquierda>
            <Box sx={{ minWidth: 120, mx: 'auto', width: '30%' }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Accion</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Accion"
                        onChange={handleChange}
                    >
                        <MenuItem value="maltrato">Maltrato</MenuItem>
                        <MenuItem value="perdida">Perdida</MenuItem>
                        <MenuItem value="adopcion">Dar en Adopcion</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </div>
    );
}

export default CrearReporte;



/* 
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Box, Typography, TextField, Button, Avatar, Grid, Paper } from '@mui/material';

function Reporte() {
    const navigate = useNavigate();

    const handleButtonClick = (ruta) => {
        navigate('/home');
    };

    return (
        <Container maxWidth="md">
            <Paper elevation={3} sx={{ padding: 3 }} style={{ marginTop: '60px' }}>
                <Box display="flex" alignItems="center" mb={2}>
                    <Avatar sx={{ width: 56, height: 56, marginRight: 2 }} />
                    <Typography variant="h6">User Name</Typography>
                </Box>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Nombres"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Apellidos"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Correo electronico"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Telefono"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Direccion"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" onClick={handleButtonClick}
                        >
                            Save Changes
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
}

export default Reporte;
 */