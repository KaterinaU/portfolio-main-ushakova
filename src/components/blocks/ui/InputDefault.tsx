import {Input} from "@mui/material";
import * as React from "react";
import {ChangeEvent} from "react";


type InputDefaultType = {
  placeholder?: string
  name: string
  value: string
  onChange: (e: ChangeEvent<any>) => void
  onBlur: (e: ChangeEvent<any>) => void
}

export const InputDefault: React.FC<InputDefaultType> = ({placeholder, name, onChange, onBlur, value}) => {
  return (
    <Input
      value={value}
      placeholder={placeholder}
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      size="small"
      rows="1"
      margin="none"
      sx={{
          width: '100%',

        input: {
          color: "#fff",
          "&::placeholder": {
            color: "#fff",
          },
          borderBottom: '2px solid #FFFFFF99',
          paddingTop: '10px'
        }
      }}
    />
  )
}