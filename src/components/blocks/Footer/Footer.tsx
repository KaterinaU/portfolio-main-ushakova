import {Trans} from 'react-i18next'
import s from 'styles/Main.module.sass'

export const Footer = () => {

  return (
    <footer className={s.footer}>
      <div className={s.name}>
        <Trans i18nKey={"myNameFooter"}>
          Ushakova Ekaterina
        </Trans>
      </div>

      <div className={s.name}>
        Copyright ©
        {new Date().getFullYear()}
      </div>

      <a className={s.email} href="mailto:ushakova.esu@gmail.com">ushakova.esu@gmail.com</a>
    </footer>
  )
}