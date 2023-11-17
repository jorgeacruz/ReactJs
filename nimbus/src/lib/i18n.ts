import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from '../locale/en.json';
import pttranslation from '../locale/pt.json';

i18n.use(initReactI18next).init({
    resources:{
        en:{
            ...enTranslation
        },
        pt:{
            ...pttranslation
        }
    },
    lng:'pt',
    interpolation: {
        escapeValue: false, // react already safes from xss
      }
})