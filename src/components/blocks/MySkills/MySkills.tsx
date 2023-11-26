import React from 'react'
import s from "styles/Main.module.sass"
import {useSelector} from "react-redux"
import {NavLink} from "react-router-dom"
import {selectMySkills} from "components/blocks/MySkills/mySkills.selector"
import {Trans} from "react-i18next"



export const MySkills = () => {

  const mySkills = useSelector(selectMySkills)

  const mappedMySkills = mySkills.apps.map(app => {

    const imgStyles = s.blockLogo + ' '
      + (app.header === "React" ? s.blockLogoReact
      : app.header === "Redux" ? s.blockLogoRedux : '')

    if (app.target) {
      return (
        <a
          key={app.id}
          href={app.link}
          className={s.navLinkClassSkills}
          target={"_blank"}
        >
          <div className={s.logoWrapper}>
            <img
              src={app.imgPath}
              alt={app.imgAlt}
              className={imgStyles}
            />
          </div>
          <h4 className={s.blockCardSectionsHeader}>{app.header}</h4>
        </a>
      )
    }

    return (
      <NavLink
        key={app.id}
        to={app.link}
        className={s.navLinkClassSkills}
      >
        <div className={s.logoWrapper}>
          <img
            src={app.imgPath}
            alt={app.imgAlt}
            className={imgStyles}
          />
        </div>
        <h4 className={s.blockCardSectionsHeader}>{app.header}</h4>
      </NavLink>
    )
  })

  return (
    <div className={s.block}>
        <h2 id={mySkills.id} className={s.blockTitle}>
          <Trans i18nKey={"mySkills.name"}>{mySkills.name}</Trans>
        </h2>
      <div className={s.blockFlex}>
        {mappedMySkills}
      </div>
    </div>
  )
}
