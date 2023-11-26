import s from "styles/Main.module.sass" 
import * as React from "react" 
import {ButtonDefault} from "../ui/ButtonDefault"
import {useSelector} from "react-redux" 
import {selectHireMe} from "components/blocks/HireMe/hireMe.selector" 
import {Trans} from "react-i18next"


export const HireMe = () => {

  const hireMe = useSelector(selectHireMe)


  return (
    <div className={s.block} id={"myProjects"}>
        <h2 id={hireMe.id} className={s.blockTitle}>
          <Trans i18nKey={"hireMe.name"}>{hireMe.name}</Trans>
        </h2>



      <div className={s.blockHireMe}>
              <a href="https://www.linkedin.com/in/ekaterina-ushakova-151a94294/" target={'_blank'}>
          <ButtonDefault name={"LinkedIn"} type={"button"} />
        </a>

        <a href="https://hh.kz/resume/3d6d7d6aff0c6749ca0039ed1f70615555744f" target={'_blank'}>
          <ButtonDefault name={"HeadHunters"} type={"button"} />
        </a>
      </div>
    </div>
  )
}