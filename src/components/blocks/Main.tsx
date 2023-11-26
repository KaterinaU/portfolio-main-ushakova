import styles from 'styles/Main.module.sass'
import {AboutMe} from './AboutMe/AboutMe'
import {MySkills} from './MySkills/MySkills'
import {HireMe} from "./HireMe/HireMe"
import {Contact} from "./Contact/Contact"
import {Footer} from "./Footer/Footer"
import css from "styles/App.module.sass"
import {Nav} from "./Nav/Nav"
import Typed from "react-typed"
import {useTranslation} from "react-i18next"
import {LangType} from "store/main/main.types"
import * as React from "react"
import {useState} from "react";
import {ButtonDefault} from "./ui/ButtonDefault";
import Button from "@mui/material/Button";
import {deepPurple} from "@mui/material/colors";


type MainPropsType = {
  name: string
}

export const Main: React.FC<MainPropsType> = ({name}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const { i18n } = useTranslation()

  const handleChangeLanguage = (language: LangType) => {
    i18n.changeLanguage(language)
  }

  return (
    <div className={css.container}>
      <Nav handleChangeLanguage={handleChangeLanguage} />
        <div className={styles.mainFlexWrapper}>
          <div className={styles.mainContainer}>
            <h1 className={styles.title} id={'aboutMe'}>
              <Typed
                strings={[name]}
                typeSpeed={150}
                backSpeed={100}
                loop
              />
            </h1>
            <AboutMe/>
            <HireMe/>
            <MySkills/>
            <Button
                  sx={{
                  color: "#b39ddb",
                    border: "1px solid #b39ddb",
                    width: "20rem",
                    height: "3rem",
                  "&:hover": {color: deepPurple[500], borderColor: deepPurple[500]},
                  }}
                variant="outlined"
                onClick={openModal}>Contact Me</Button>
            {isModalOpen && <Contact isOpen={isModalOpen} onClose={closeModal}/>}
          </div>
        </div>
        <Footer/>
      </div>
  )
}