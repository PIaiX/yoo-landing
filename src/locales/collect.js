const fs = require('fs-extra');
const path = require('path');


const directoryPath = './src/layouts'; // Укажите путь к директории с файлами

let i18nContent = {};


const ignoredDirectories = ['assets', 'config', 'contexts', 'hooks', 'locales', 'providers', 'routes', 'services', 'store', 'helpers']; // Папки, которые нужно игнорировать


const translateFolderPath = './src/locales/translate';
if (!fs.existsSync(translateFolderPath)) {
    fs.mkdirSync(translateFolderPath);
}

const filesFolderPath = './src/locales/files';
if (!fs.existsSync(filesFolderPath)) {
    fs.mkdirSync(filesFolderPath);
}
const RuPath = path.join(__dirname, './translate/ru.json');
if (fs.existsSync(RuPath)) {
    i18nContent = JSON.parse(fs.readFileSync(RuPath, 'utf8'));
}
const i18nPath = path.join(__dirname, './files/i18n.json');
let templates = 0;


function readFiles(directoryPath) {
    const files = fs.readdirSync(directoryPath);
    const regexs = [
        /(?:(["'])[^"']*?\1)|(?:(>([^<]*<))|(?:({([^}]*}))|(?:(\[[^\]]*\]))|(?:(\([^)]*\)))))/gi,
        /([>"'()\[\]]*)(?:[0-9]*?[a-zA-Z]*[А-Яа-яЁё]+[А-Яа-яЁё]*[\sА-Яа-яЁё]+?[\s0-9]*?[\sa-zA-Z]*?[\s,.?!«»%()\]\-_'’"\s]+[/sА-Яа-яЁё]*?[,.?!«»%()<\]\-_'’"0-9a-zA-Z\s]*)+/gi,
        /(?:["'(\[\]]*)([а-яё]+[-а-яё]*[\sА-ЯЁ]+[-а-яё]*?[,.?!«»()\-_'’"\s]*)+/gi
    ]
    files.forEach((file) => {
        const filePath = path.join(directoryPath, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            if (!ignoredDirectories.includes(file)) { // Проверяем, не находится ли папка в списке игнорируемых
                readFiles(filePath); // Рекурсивно проходить по подпапкам
            }
        } else if (['.js', '.jsx'].includes(path.extname(file))) { // Проверяем, не был ли файл уже обработан
            regexs.forEach((regex) => {
                let content = fs.readFileSync(filePath, 'utf8');
                const ignoredComments = []; // Список комментариев, которые не нужно трогать
                const ignoredSentences = [];
                const savedComments = [];
                const savedSentences = [];
                const savedWords = [];
                // Игнорируем комментарии
                let comments = []
                comments = content.match(/\/\*[\s\S]*?\*\/|\/\/.+/g);
                if (comments) {
                    // Сохраняем комментарии и их позиции
                    comments.forEach((comment) => {
                        let startIndexComments;
                        startIndexComments = content.indexOf(comment);
                        savedComments.push({ comment, startIndexComments });
                        content = content.slice(0, startIndexComments) + `{startIndexComments[${startIndexComments}]}` + content.slice(startIndexComments + comment.length);

                    });

                    // Добавляем удаленные комментарии в список ignoredComments
                    ignoredComments.push(...comments);
                }
                let tSentences = [];
                tSentences = content.match(/t\('[^']+'\)/g);
                if (tSentences) {
                    // Сохраняем комментарии и их позиции
                    tSentences.forEach((sentence) => {
                        let startIndexIgnoredSentences
                        startIndexIgnoredSentences = content.indexOf(sentence);
                        savedSentences.push({ sentence, startIndexIgnoredSentences });
                        content = content.slice(0, startIndexIgnoredSentences) + `{startIndexIgnoredSentences[${startIndexIgnoredSentences}]}` + content.slice(startIndexIgnoredSentences + sentence.length);
                    });

                    // Добавляем удаленные комментарии в список ignoredComments
                    ignoredSentences.push(...tSentences);
                }
                let lines = []
                lines = content.split('\n'); // Разделяем строку на отдельные строки

                const result = [];
                let russianWords = []
                for (const line of lines) { // Проходим по каждой строке
                    russianWords = line.match(regex);
                    if (russianWords) {

                        for (const match of russianWords) {
                            if (match) {
                                let russianMatch = []
                                russianMatch = match.match(/[А-Яа-яЁё]+/);
                                if (russianMatch) {
                                    result.push(match.trim());
                                }
                            }
                        }
                    }
                }



                console.log(result);
                templates += result?.length;

                // const russianWords = content.match(/([>"'()\[\]]*)(?:[0-9]*?[a-zA-Z]*[А-Яа-яЁё]+[А-Яа-яЁё]*[\sА-Яа-яЁё]+?[\s0-9]*?[\sa-zA-Z]*?[\s,.?!«»%()\]\-_'’"\s]+[/sА-Яа-яЁё]*?[,.?!«»%()<\]\-_'’"0-9a-zA-Z\s]*)+/gis);

                // const russianWords = content.match(/(?:["'(\[\]]*)([а-яё]+[-а-яё]*[\sА-ЯЁ]+[-а-яё]*?[,.?!«»()\-_'’"\s]*)+/gis); // Machine worked
                if (result) {
                    // Сохраняем комментарии и их позиции
                    result.forEach((words) => {
                        let word = words.trim();
                        let startIndexWord
                        startIndexWord = content.indexOf(word);
                        savedWords.push({ word, startIndexWord });
                        content = content.slice(0, startIndexWord) + `{startIndexWord[${startIndexWord}]}` + content.slice(startIndexWord + word.length);
                    });

                }




                savedWords.forEach(({ word, startIndexWord }) => {
                    let newWord;
                    let saveRu = [];
                    if (word.startsWith('(')) {
                        newWord = word.replace(/^\(|\)$/g, ''); // Удаляем скобки в начале и конце строки
                        newWord = newWord.trim(); // Удаляем пробелы в начале и конце
                        newWord = newWord.replace(/^["']|["']$/g, ''); // Удаляем кавычки
                        newWord = newWord.trim(); // Удаляем пробелы
                        saveRu.push(newWord);
                        newWord = `(t('${newWord}'))`;
                    }
                    else if (word.startsWith('[')) {
                        newWord = word.replace(/^\[|\]$/g, ''); // Удаляем скобки в начале и конце строки
                        newWord = newWord.trim(); // Удаляем пробелы в начале и конце
                        newWord = newWord.replace(/^["']|["']$/g, ''); // Удаляем кавычки
                        newWord = newWord.trim();
                        if (newWord.includes('", "')) {
                            newWord = newWord.split('", "').map(item => {
                                saveRu.push(item.trim());
                                return `t('${item.trim()}')`;
                            }).join(', ');
                            newWord = `[${newWord}]`;
                        }
                        else {
                            saveRu.push(newWord);
                            newWord = `[t('${newWord}')]`;
                        }
                    }
                    else if (word.startsWith('>')) {
                        newWord = word.replace(/^[>]|[<]$/g, '');
                        newWord = newWord.trim();
                        saveRu.push(newWord);
                        newWord = `>{t('${newWord}')}<`;

                    }
                    else if (word.startsWith('{')) {
                        let Element = [];
                        const newElement = [];
                        Element = word.match(/(["'])[^"']*?\1/gi);
                        newWord = word
                        if (Element) {
                            for (const e of Element) { // Убрали проверку if(Element)
                                let newWords;
                                let russianMatch = [];
                                russianMatch = e.match(/[А-Яа-яЁё]+/);
                                if (russianMatch) {
                                    newWords = e.trim();
                                    newElement.push(newWords);
                                    newWords = newWords.replace(/^["']|["']$/g, '');
                                    saveRu.push(newWords);
                                }
                            }
                        }
                        newElement.forEach((e) => {
                            let startIndexWords = newWord.indexOf(e); // Используем word, а не content
                            if (startIndexWords !== -1) {
                                newWord = newWord.slice(0, startIndexWords) + `t('${e.replace(/^["']|["']$/g, '')}')` + newWord.slice(startIndexWords + e.length); // Используем word
                            }
                        });

                    }

                    else {
                        newWord = word.replace(/^["']|["']$/g, '');
                        newWord = newWord.trim();
                        saveRu.push(newWord);
                        newWord = `{t('${newWord}')}`;

                    }

                    content = content.replace(`{startIndexWord[${startIndexWord}]}`, newWord);


                    saveRu.forEach((e) => {
                        if (!i18nContent[e]) {
                            i18nContent[e] = e;
                        }
                    });


                });


                savedComments.forEach(({ comment, startIndexComments }) => {
                    content = content.replace(`{startIndexComments[${startIndexComments}]}`, comment);
                });
                savedSentences.forEach(({ sentence, startIndexIgnoredSentences }) => {
                    content = content.replace(`{startIndexIgnoredSentences[${startIndexIgnoredSentences}]}`, sentence);
                });
                if (result && result.length > 0) {
                    // Проверка, уже есть ли строка "import { useTranslation } from 'react-i18next';" в `content`
                    if (!content.includes("import { useTranslation } from 'react-i18next';")) {
                        content = `import { useTranslation } from 'react-i18next';\n${content}`;
                    }

                    // Проверка, уже есть ли строка "const {t} = useTranslation();" в `content`
                    if (!content.includes("const {t} = useTranslation();")) {
                        content = content.replace(/(\) => {)/, '$1\nconst {t} = useTranslation();');
                    }

                    fs.writeFileSync(filePath, content);
                }

            })
        }
    });
}


readFiles(directoryPath);
// Создаем файл i18n
let valuesArray = []
valuesArray = Object.values(i18nContent);

fs.writeFileSync(RuPath, JSON.stringify(i18nContent, null, 2));
fs.writeFileSync(i18nPath, JSON.stringify(valuesArray, null, 2));
console.log('Скрипт выполнен успешно.');
console.log(`Выделено: ${templates} мест`)
