import * as React from 'react';
import {FC, useState} from 'react';
import s from "./Nav.module.sass"
import {NavLink} from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import {deepPurple} from '@mui/material/colors';
import SvgIcon, {SvgIconProps} from '@mui/material/SvgIcon';
import {NavbarLink} from "../ui/NavbarLink";
import {createTheme, ThemeProvider} from "@mui/material";
import {useSelector} from "react-redux";
import {selectLinks} from "components/blocks/Nav/nav.selector";
import {SelectLang} from "components/blocks/Nav/SelectLang"
import {LangType} from "store/main/main.types"


type Props = {
  handleChangeLanguage: (language: LangType) => void
}

export const Nav: FC<Props> = ({handleChangeLanguage}) => {

  const links = useSelector(selectLinks)

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const [active, setActive] = useState(false)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
    setActive(true)
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    setActive(false)
  }

  const mappedLinks = links.map(link => {
    return (
      <div key={link.href}>
        <NavbarLink
          onClose={handleCloseNavMenu}
          index={link.index}
          href={link.href}
          name={link.name}
        />
      </div>
    )
  })

  const theme = createTheme({
    components: {
      MuiMenu: {
        styleOverrides: {
          root: {
            backgroundColor: '#0A1929FF',
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            '@media (max-width: 900px)': {
              overflow: "scroll"
            }
          },
          paper: {
            backgroundColor: "transparent !important",
            boxShadow: "none !important",
            top: "50% !important",
            left: "50% !important",
            margin: "-25% 0 0 -5% !important",
            textAlign: "center",
            overflow: "scroll",
            '@media (max-width: 900px)': {
              margin: "-25% 0 0 -10% !important"
            },
            '@media (max-width: 614px)': {
              margin: "-30% 0 0 -17% !important"
            }
          }
        }
      }
    }
  })

  function HomeIcon(props: SvgIconProps) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
      </SvgIcon>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="fixed" sx={{
        backgroundColor: '#090311',
        position: 'fixed',
        zIndex: 1000000
      }}>
        <div style={{display: "flex", alignItems: "center", justifyContent: 'space-between'}}>

          {/*burger*/}
          <div
            className={active ? (s.burger + ' ' + s.active) : s.burger}
            onClick={active ? handleCloseNavMenu : handleOpenNavMenu}
          >
            <span></span>
          </div>

          {/*small navbar*/}
          <Box sx={{
            flexGrow: 1,
            display: {xs: 'flex', md: 'none'},
            padding: "20px",
            justifyContent: "space-between"
          }}>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: {xs: 'block', md: 'none'}, margin: 0, background: "#020024FF",
                backgroundImage: "linear-gradient(to right, #BEA6FF, #dac8f1, #f2d1f6)"
              }}
            >
              {mappedLinks}
            </Menu>
          </Box>

          {/*big navbar*/}
          <Box sx={{height: '70px', alignItems: 'center', justifyContent: "right", display: {xs: 'none', md: 'flex'}}}>

            {/*home icon*/}
            <NavLink to="#aboutMe">
              <HomeIcon sx={{color: deepPurple[200], margin: '20px 20px 20px 20px'}}/>
            </NavLink>

            {mappedLinks}
          </Box>

          <SelectLang handleChangeLanguage={handleChangeLanguage}/>
        </div>
      </AppBar>
    </ThemeProvider>
  )
}