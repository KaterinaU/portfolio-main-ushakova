import React from 'react'
import s from 'styles/Main.module.sass'
import {useSelector} from "react-redux";
import {selectAboutMe} from "components/blocks/AboutMe/aboutMe.selector"
import {Trans} from "react-i18next"


export const AboutMe = () => {

    const aboutMe = useSelector(selectAboutMe)

    const blockAboutWrapper = s.blockWrapper + " " + s.blockAboutWrapper

    return (
        <div className={s.block} id={"hireMe"}>
            <h2 id={aboutMe.id} className={s.blockTitle}>
                <Trans i18nKey={"aboutMe.name"}>{aboutMe.name}</Trans>
            </h2>

            <div className={blockAboutWrapper}>
                <div className={s.blockImg}>
                    <img src={require('./me.jpg')} alt="me" width='200px'/>
                </div>
                <div className={s.blockAbout}>
                    <div className={s.blockFlex}>
                        <Trans i18nKey={"aboutMe.desc"}>
                            {aboutMe.desc}
                        </Trans>
                    </div>
                </div>
            </div>
        </div>
    )
}