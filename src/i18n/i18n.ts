import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HOME_EN from '../locales/en/home.json'
import HOME_VI from '../locales/vi/home.json'
import SUPPORT_EN from '@/locales/en/support.json'
import SUPPORT_VI from '@/locales/vi/support.json'
import CONTACT_EN from '@/locales/en/contact.json'
import CONTACT_VI from '@/locales/vi/contact.json'
export const locales = {
    en: 'English',
    vi: 'Tiếng Việt'
} as const

export const resources = {
    en: {
        home: HOME_EN,
        support: SUPPORT_EN,
        contact: CONTACT_EN
    },
    vi: {
        home: HOME_VI,
        support: SUPPORT_VI,
        contact: CONTACT_VI
    }

}
export const defaultNS = 'home'

i18n.use(initReactI18next).init({
    resources,
    lng: "vi",
    ns: ['home', 'support', 'contact'],
    defaultNS,
    fallbackLng: "vi",
    interpolation: {
        escapeValue: false
    }
})