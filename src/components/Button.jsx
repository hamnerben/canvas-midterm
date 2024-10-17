import * as React from 'react';
import Stack from '@mui/material/Stack';
import MuiButton from '@mui/material/Button';

export default function Button({children, onClick}) {
  return (
          <MuiButton onClick={ onClick} variant="contained">{children}</MuiButton>
      );
}