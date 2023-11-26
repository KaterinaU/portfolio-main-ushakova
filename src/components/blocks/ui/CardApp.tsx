import React from "react"
import s from "styles/Main.module.sass"
import {NavLink} from "react-router-dom"
import {ButtonDefault} from "./ButtonDefault"
import {LinkApp} from "components/blocks/ui/LinkApp"
import {Trans} from "react-i18next"

type CardAppType = {
  id: string
  index: number
  link: string
  header: string
  imgPath: string
  imgAlt: string
  desc: string
  target: boolean
  gh: string | undefined
}

export const CardApp: React.FC<CardAppType> = ({
                                                 id,
                                                 index,
                                                 link,
                                                 header,
                                                 imgPath,
                                                 imgAlt,
                                                 desc,
                                                 target,
                                                 gh,
                                               }) => {

  return (
    <div className={s.blockCard}>
      <div style={{display: "flex", justifyContent: "center", alignItems: "top", whiteSpace: "pre-line"}}>
        {target ? (
          <a
            href={link}
            className={s.navLinkClass}
            target="_blank"
            rel="noreferrer"
          >

            <h4 className={s.blockCardSectionsHeader}>
              <Trans key={index} i18nKey={`myApps.apps.${index}.header`}>
                {header}
              </Trans>
            </h4>

            <img src={imgPath} alt={imgAlt} className={s.blockCardPicture}/>

            <div className={s.blockCardSectionsButtonWrapper}>
              <ButtonDefault name={"Open"} type={"button"}/>
            </div>
          </a>
        ) : (
          <NavLink to={link} className={s.navLinkClass}>
            <h4 className={s.blockCardSectionsHeader}>
              <Trans key={index} i18nKey={`myApps.apps.${index}.header`}>
                {header}
              </Trans>
            </h4>

            <img src={imgPath} alt={imgAlt} className={s.blockCardPicture}/>

            <div className={s.blockCardSectionsButtonWrapper}>
              <ButtonDefault name={"Open"} type={"button"}/>
            </div>
          </NavLink>
        )}
      </div>

      <div>
        <LinkApp gh={gh}/>
      </div>
    </div>
  )
} 
