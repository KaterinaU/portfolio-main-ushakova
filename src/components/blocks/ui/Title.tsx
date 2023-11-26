import React from 'react'
import s from "styles/Main.module.sass";



type TitleType = {
  name: string
  id?: string
}

export const Title = (props: TitleType) => {
  return <h2 id={props.id} className={s.blockTitle}>{props.name}</h2>
}