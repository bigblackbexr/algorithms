import { createI18n } from 'vue-i18n';
import es from '../i18n/es'
import en from '../i18n/en';

console.log(es);
console.log(en);

const messages = {
  en,
  es,
  ja: {
    message: {
      hello: 'こんにちは、世界'
    }
  },
};


const i18n = createI18n({
  locale: 'es', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
});

export default i18n;
