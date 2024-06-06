import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {  Box } from '@mui/material';

function Cards() {
  return (
    <Box display="flex" justifyContent="center" style={{ marginTop: '60px' }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="agreen iguan"
          height="140"
          image="https://st2.depositphotos.com/3378121/5193/i/450/depositphotos_51933801-stock-photo-labrador-puppies-in-a-basket.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Grupo de perritos
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Me encontre a estos perritos abandonados en la careterra.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Compartir</Button>
          <Button size="small">Mas informacion</Button>
        </CardActions>
      </Card>
      
    </Box>
  );
}

export default Cards; 