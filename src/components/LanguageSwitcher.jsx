import React, { useState, useRef } from 'react';
import { IoChevronDownOutline } from "react-icons/io5";
import useOnClickOutside from '../hooks/useOnClickOutside';
import i18n from 'i18next';
import rus from '../assets/imgs/flags/rus.jpg'
import eng from '../assets/imgs/flags/eng.jpg'

const langsArr = [
  {
    title: 'RU',
    img: rus,
    state: true,
  },
  {
    title: 'EN',
    img: eng,
    state: false,
  },
];

const LanguageSwitcher = () => {
  const [lang, setLang] = useState(langsArr);
  const [showSwitcher, setShowSwitcher] = useState(false);
  const ref = useRef();

  useOnClickOutside(ref, () => setShowSwitcher(false));

  return (
    <div ref={ref} className={(showSwitcher) ? 'lang-switcher opened' : 'lang-switcher'}>
      <button type='button' onClick={() => setShowSwitcher(!showSwitcher)}>
        <span>{lang.reduce((res, obj) => obj.state === true ? obj.title : res, '')}</span>
        <IoChevronDownOutline />
      </button>
      {
        (showSwitcher) &&
        <ul>
          {
            lang.filter((obj) => obj.state === false).map(el => {
              return <li key={el.title}>
                <button type='button' onClick={() => setLang(lang.map(item => {
                  i18n.changeLanguage(el.title);
                  if (item.title === el.title) {
                    return { ...item, state: true };
                  } else {
                    return { ...item, state: false };
                  }
                }))}>
                  <span>{el.title}</span>
                  <img src={el.img} alt={el.title} />
                </button>
              </li>
            })
          }
        </ul>
      }
    </div>
  );
};

export default LanguageSwitcher;