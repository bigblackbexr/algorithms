import { getUserLocale } from 'get-user-locale';

const language = getUserLocale().slice(0, -3);

export default language;
