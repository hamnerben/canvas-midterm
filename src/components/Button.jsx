import * as React from 'react';
import Stack from '@mui/material/Stack';
import MuiButton from '@mui/material/Button';

export default function Button({text, onClick}) {
  return (
          <MuiButton onClick={ onClick} variant="contained">{text}</MuiButton>
      );
}