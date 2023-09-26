import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import fr from './locales/fr.json'
import en from './locales/en.json'

// eslint-disable-next-line import/no-named-as-default-member
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translations: {
        ...en,
      },
    },
    fr: {
      translations: {
        ...fr,
      },
    },
  },
  lng: 'fr',
  fallbackLng: ['fr', 'en'],
  ns: ['translations'],
  defaultNS: 'translations',
  keySeparator: '.',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
