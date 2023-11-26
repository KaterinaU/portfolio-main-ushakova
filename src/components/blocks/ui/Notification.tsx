import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import {Alert} from "@mui/material";



type NotificationType = {
  severity: string
  text: string
  open: boolean
  handleClose: () => void
}

export default function Notification(props: NotificationType) {


  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={props.open} autoHideDuration={6000} onClose={props.handleClose}>
        <Alert onClose={props.handleClose} severity="success" sx={{ width: '100%' }}>
          {props.text}
        </Alert>
      </Snackbar>
    </Stack>
  );
}