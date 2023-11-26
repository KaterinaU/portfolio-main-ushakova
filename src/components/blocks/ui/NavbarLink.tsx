import React from 'react'
import {AlertTitle} from "@mui/material"
import {deepPurple} from "@mui/material/colors"
import {Link as SmoothLink} from "react-scroll"
import {Trans} from "react-i18next"


type NavbarLinkType = {
  index: number
  name: string
  href: string
  onClose: () => void
}

export const NavbarLink: React.FC<NavbarLinkType> = ({name, href, index, onClose}) => {

  return (
    <SmoothLink to={href} spy={true} smooth={true} offset={50} duration={500}>
      <AlertTitle
        onClick={onClose}
        sx={{
          my: 4,
          width: "100%",
          color: '#b39ddb',
          fontWeight: 600,
          fontSize: "14px",
          display: 'block',
          textTransform: "uppercase",
          "&:hover": {color: deepPurple[500]},
          '@media (max-width: 900px)': {
            color: '#fff',
            fontSize: "20px",
            marginRight: 0
          },
          whiteSpace: "nowrap",
          marginRight: "15px",
          cursor: 'pointer'
        }}
      >
        <Trans key={index} i18nKey={`links.${index}.name`}>
          {name}
        </Trans>
      </AlertTitle>
    </SmoothLink>
  )
}