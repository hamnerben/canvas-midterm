import * as React from 'react';
import Box from '@mui/material/Box';
import MuiCard from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function Card({title, content, showDelete, showEdit, onDelete, onEdit}) {

      
    const cardContent = (
      <React.Fragment>
        <CardContent>
          <Typography className="text-left" variant="h6" >
            {title}
          </Typography>
          <Typography className="text-left" variant="body2">
            {content}
          </Typography>
        </CardContent>
        <CardActions>
          {showDelete && <Button onClick={onDelete} size="small">Delete</Button>}
          {showEdit && <Button onClick={onEdit} size="small">Edit</Button>}
        </CardActions>
      </React.Fragment>
    );
  return (
    <Box sx={{ minWidth: 800, width: '100%', mx: 'auto' }}>
  <MuiCard variant="outlined" sx={{ width: '100%' }}>
    {cardContent}
  </MuiCard>
</Box>
  );
}