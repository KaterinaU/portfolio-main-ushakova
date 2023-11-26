import s from './contact.module.sass'
import * as React from "react"
import {FC, ReactNode} from 'react'
import {useSelector} from "react-redux"
import {InputDefault} from "../ui/InputDefault"
import {useFormik} from "formik"
import {Error} from "components/blocks/ui/Error"
import {selectContact} from "components/blocks/Contact/contact.selector"
import {Trans} from "react-i18next"
import {deepPurple} from "@mui/material/colors"
import Button from "@mui/material/Button"



type FormikErrorType = {
  user_name?: string
  user_email?: string
  message?: string
}

type ModalType = {
  isOpen: boolean
  onClose: () => void
  children?: ReactNode
}
export const Contact: FC<ModalType> = ({ isOpen, onClose, children }) => {

  const contact = useSelector(selectContact)

  const regX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

  const formik = useFormik({
    initialValues: {
      user_name: '',
      user_email: '',
      message: ''
    },

    validate: (values) => {
      const errors: FormikErrorType = {}
      if (!values.user_name) {
        errors.user_name = 'Your name is required'
      }
      if (!values.user_email) {
        errors.user_email = 'Your email address is required'
      } else if (!regX.test(values.user_email)) {
        errors.user_email = 'Invalid email address'
      }
      if (!values.message) {
        errors.message = 'Message is required'
      } else if (values.message.length < 10) {
        errors.message = 'Your message is too short'
      }
      return errors
    },

    onSubmit: (values) => {
               formik.resetForm()
    }
  })



  return (
      <div className={s.modalOverlay}>
    <div className={s.block} style={{position: 'relative'}} onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()}>

        <div className={s.wrapperContacts}>
          <h2 id={contact.id} className={s.blockTitle}>
            <Trans i18nKey={"contact.name"}>{contact.name}</Trans>
          </h2>
          <Button
              variant="text"
              onClick={onClose}
              style={{
                position: "relative",
                top: '-25px',
                marginLeft: "90%",
                color: "#b39ddb"
              }}
          >
            X
          </Button>
          <form className={s.formSize} id={'form'} onSubmit={formik.handleSubmit}>
            <div className={s.blockForm}>
              <Trans i18nKey={"contact.placeholderName"}>{contact.placeholderName}</Trans>
              <InputDefault {...formik.getFieldProps('user_name')}  />
              {formik.touched.user_name && formik.errors.user_name ? <Error error={formik.errors.user_name}/> : null}


              <Trans i18nKey={"contact.placeholderEmail"}>{contact.placeholderEmail}</Trans>
              <InputDefault {...formik.getFieldProps('user_email')} />
              {formik.touched.user_email && formik.errors.user_email ? <Error error={formik.errors.user_email}/> : null}

              <Trans i18nKey={"contact.placeholderMessage"}>{contact.placeholderMessage}</Trans>
              <InputDefault {...formik.getFieldProps('message')} />
              {formik.touched.message && formik.errors.message ? <Error error={formik.errors.message}/> : null}

            </div>
            <div className={s.blockButton}>
              <Button
                  type={"submit"}
                  sx={{
                    color: "#b39ddb",
                    border: "1px solid #b39ddb",
                    "&:hover": {color: deepPurple[500], borderColor: deepPurple[500]}
                  }}
                  variant="outlined"
              >
                <Trans i18nKey={`contact.buttonText`}>
                  Send message
                </Trans>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}