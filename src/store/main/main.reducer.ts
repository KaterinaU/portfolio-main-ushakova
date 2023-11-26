import {v1} from "uuid"
import reactLogo from "components/blocks/MySkills/img/logo192.png"
import nextLogo from "components/blocks/MySkills/img/nextJs.svg"
import reduxLogo from "components/blocks/MySkills/img/redux.png"
import tsLogo from "components/blocks/MySkills/img/ts.png"
import jsLogo from "components/blocks/MySkills/img/js.png"
import sbLogo from "components/blocks/MySkills/img/sb.svg"
import unit from "components/blocks/MySkills/img/unit.svg"
import rest from "components/blocks/MySkills/img/rest.svg"
import formik from "components/blocks/MySkills/img/formik.svg"
import hookForm from "components/blocks/MySkills/img/hookForm.png"
import cssLogo from "components/blocks/MySkills/img/css.webp"
import mui from "components/blocks/MySkills/img/mui.png"
import htmlLogo from "components/blocks/MySkills/img/html.jpeg"
import swagger from "components/blocks/MySkills/img/swagger.svg"
import {LangType, StateType} from "store/main/main.types"


export const initialState: StateType = {
  lang: 'en',
  links: [
    {index: 0, name: "About Me", href: "aboutMe"},
    {index: 1, name: "My Resumes", href: "hireMe"},
    {index: 2, name: "My Skills", href: "mySkills"},
    {index: 3, name: "Contact", href: "contact"}
  ],
  aboutMe: {
    id: "aboutMe",
    name: "About Me",
    desc: "My name is Ushakova Ekaterina. Front-end developer with over 1 year of experience in creating SPA applications, using React, Redux, TypeScript. I possess skills in code optimization, debugging, and testing. I continually expand my knowledge by exploring new technologies."
  },
    hireMe: {
    id: "hireMe",
    name: "My Resumes"
  },
  contact: {
    id: "contact",
    name: "Contact Me",
    placeholderName: "Enter your name",
    placeholderEmail: "Enter your email",
    placeholderMessage: "Enter your message"
  },
  mySkills: {
    id: "mySkills",
    name: "My Skills",
    apps: [
      {
        id: v1(),
        index: 0,
        link: "https://reactjs.org",
        header: "ReactJS",
        imgPath: reactLogo,
        imgAlt: "react",
        desc: "",
        target: true,
      },
      {
        id: v1(),
        index: 1,
        link: "https://nextjs.org",
        header: "NextJS",
        imgPath: nextLogo,
        imgAlt: "next",
        desc: "",
        target: true,
      },
      {
        id: v1(),
        index: 2,
        link: "https://redux.js.org/",
        header: "Redux",
        imgPath: reduxLogo,
        imgAlt: "redux",
        desc: "",
        target: true,
      },
      {
        id: v1(),
        index: 3,
        link: "https://www.typescriptlang.org/",
        header: "TypeScript",
        imgPath: tsLogo,
        imgAlt: "typescript",
        desc: "",
        target: true,
      },
      {
        id: v1(),
        index: 4,
        link: "https://www.javascript.com/",
        header: "JavaScript",
        imgPath: jsLogo,
        imgAlt: "javascript",
        desc: "",
        target: true,
      },
      {
        id: v1(),
        index: 5,
        link: "https://storybook.js.org/",
        header: "StoryBook",
        imgPath: sbLogo,
        imgAlt: "storybook",
        desc: "",
        target: true,
      },
      {
        id: v1(),
        index: 6,
        link: "https://jestjs.io/",
        header: "Unit Testing",
        imgPath: unit,
        imgAlt: "unit-testing",
        desc: "",
        target: true,
      },
         {
        id: v1(),
        index: 7,
        link: "https://www.redhat.com/en/topics/api/what-is-a-rest-api#:~:text=choose%20Red%20Hat%3F-,Overview,by%20computer%20scientist%20Roy%20Fielding.",
        header: "RestAPI",
        imgPath: rest,
        imgAlt: "restAPI",
        desc: "",
        target: true
      },
      {
        id: v1(),
        index: 8,
        link: "https://swagger.io/",
        header: "Swagger",
        imgPath: swagger,
        imgAlt: "swagger",
        desc: "",
        target: true,
      },
      {
        id: v1(),
        index: 9,
        link: "https://formik.org/",
        header: "Formik",
        imgPath: formik,
        imgAlt: "formik",
        desc: "",
        target: true,
      },
      {
        id: v1(),
        index: 10,
        link: "https://react-hook-form.com/",
        header: "React Hook Form",
        imgPath: hookForm,
        imgAlt: "hookForm",
        desc: "",
        target: true,
      },
      {
        id: v1(),
        index: 11,
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        header: "CSS/SASS/SCSS",
        imgPath: cssLogo,
        imgAlt: "css/sass",
        desc: "",
        target: true,
      },
      {
        id: v1(),
        index: 12,
        link: "https://mui.com/",
        header: "Material UI",
        imgPath: mui,
        imgAlt: "mui",
        desc: "",
        target: true
      },

      {
        id: v1(),
        index: 13,
        link: "https://html.com/",
        header: "HTML",
        imgPath: htmlLogo,
        imgAlt: "html",
        desc: "",
        target: true,
      }
    ]
  }
}

type ActionType = ChangeLangType

type ChangeLangType = {
  type: "CHANGE_LANG_TYPE"
  lang: LangType
}

export const mainReducer = (state = initialState, action: ActionType): StateType => {
  switch (action.type) {
    case "CHANGE_LANG_TYPE":
      return {
        ...state,
        lang: action.lang
      }
       default:
      return state
  }
}

export const ChangeLangAC = (lang: LangType) => ({ type: "CHANGE_LANG_TYPE", lang })
