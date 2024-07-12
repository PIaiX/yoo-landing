1) npm install i18next react-i18next i18next-http-backend i18next-browser-languagedetector --force
2) index.js 
import { I18nextProvider } from 'react-i18next';
import i18n from './locales/i18n';
    <I18nextProvider i18n={i18n}>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </I18nextProvider>
3)languageSwitcher
import i18n from 'i18next';
    const handleClick = elTitle => {
        i18n.changeLanguage(elTitle);
4)package.json
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
    "translate": "node ./src/locales/translate.js",
    "collect": "node ./src/locales/collect.js"
  },