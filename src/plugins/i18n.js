import { createI18n } from 'vue-i18n';
import language from './getUserLocale';
import en from '../i18n/en';
import es from '../i18n/es'

const messages = {};

let english = 'en'
let spanish = 'es'

switch (spanish) {
  // Spanish
  case 'es':
    console.log(es, 'Spanish');
    messages.es = es;
    break;

  // English
  case 'en':
    console.log(en, 'English');
    messages.en = en;
    break;

  default:
    console.log('Language not supported');
    break;
}

const i18n = createI18n({
  locale: 'es', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
});

export default i18n;
