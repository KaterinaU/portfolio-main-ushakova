import {AppRootStateType} from "store/store"

export const selectLinks = (state: AppRootStateType) => state.main.links
export const selectLang = (state: AppRootStateType) => state.main.lang