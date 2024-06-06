import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Box, Typography, TextField, Button, Avatar, Grid, Paper } from '@mui/material';

function Perfil() {
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

export default Perfil;
