import React from "react";
import {Box} from "@mui/material";


type ErrorType = {
  error?: string
}

export const Error: React.FC<ErrorType> = ({error}) => {
  return (
    <Box sx={{
      paddingTop: '4px',
      borderTop: '2px solid red',

    }}>
      <p style={{color: 'red', fontSize: '12px'}}>
        {error}
      </p>
    </Box>
  )
}