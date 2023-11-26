
export type StateType = {
  lang: LangType
  aboutMe: AboutMeType
  hireMe: HireMeType
  contact: ContactType
  mySkills: MyAppsType
  links: LinkType[]
}

export type LinkType = {
  index: number
  name: string
  href: string
}
export type AboutMeType = {
  id: "aboutMe"
  name: string
  desc: string
}
export type HireMeType = {
  id: "hireMe"
  name: string
}
export type ContactType = {
  name: string
  id: "contact"
  placeholderName: string
  placeholderEmail: string
  placeholderMessage: string
}
export type MyAppType = {
  id: string
  index: number
  link: string
  gh?: string
  header: string
  imgPath: string
  imgAlt: string
  desc: string
  target: boolean
}
export type MyAppsType = {
  id: string
  name: string
  apps: MyAppType[]
}
export type LangType = 'en' | 'ru'
