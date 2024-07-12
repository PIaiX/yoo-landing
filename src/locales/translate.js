const fs = require('fs-extra');
const path = require('path');

const filesDir = './src/locales/files'; // Папка с исходными файлами
const translatesDir = './src/locales/translate'; // Папка для сохранения переведенных файлов

// Функция для чтения и записи данных в файлы
function processFile(filename) {
  const filePath = path.join(filesDir, filename);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  const translatedFilePath = path.join(translatesDir, filename);
  const translatedData = {};

  // Чтение файла i18n.json
  const i18nData = JSON.parse(fs.readFileSync(path.join(filesDir, 'i18n.json'), 'utf8'));

  // Создание объекта перевода
  for (let i = 0; i < i18nData.length; i++) {
    translatedData[i18nData[i]] = data[i];
  }

  // Запись переведенных данных в файл
  fs.writeFileSync(translatedFilePath, JSON.stringify(translatedData, null, 2));
}

// Получение списка файлов в папке
const files = fs.readdirSync(filesDir);

// Обработка каждого файла
files.forEach(filename => {
  if (filename.endsWith('.json') && filename !== 'i18n.json') {
    processFile(filename);
  }
});

console.log('Файлы успешно переведены!');
// Создание i18n.js
const translates = fs.readdirSync(translatesDir);
let i18nJsContent = '';
for (const filename of translates) {
  if (filename.endsWith('.json')) {
    const lang = filename.replace('.json', '');
    i18nJsContent += `import ${lang} from './translate/${lang}.json';
  `;
  }
}
i18nJsContent += `
  import i18n from 'i18next';
  import { initReactI18next } from 'react-i18next';
  import Backend from 'i18next-http-backend';
  import LanguageDetector from 'i18next-browser-languagedetector';

  const resources = {
  `;
for (const filename of translates) {
  if (filename.endsWith('.json')) {
    const lang = filename.replace('.json', '');
    i18nJsContent += `
    "${lang.toUpperCase()}": {
      translation: ${lang}
    },
  `;
  }
}
i18nJsContent += `
  };

  i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources,
      fallbackLng: 'ru',
      interpolation: {
        escapeValue: false
      }
    });

  export default i18n;
  `;
fs.writeFile(path.join(__dirname, 'i18n.js'), i18nJsContent);


console.log('Файлы успешно добавлены!');
