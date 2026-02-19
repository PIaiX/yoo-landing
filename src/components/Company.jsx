
import React from 'react';
import { DiAndroid, DiApple, DiFirefox } from 'react-icons/di';
import { Link } from 'react-router-dom';

const Company = ({ imgLogo, imgCover, title, web, ios, android }) => {
  return (
    <div className="company">
      <img src={imgLogo} alt={`Логотип ${title}`} className="imgLogo" loading="lazy" />
      <img src={imgCover} alt={`Обложка ${title}`} className="imgCover" loading="lazy" />
      <h3 className="text-center">{title}</h3>
      <div className="content">
        {android && (
          <Link to={android} target="_blank" rel="noopener noreferrer">
            <DiAndroid />
          </Link>
        )}
        {ios && (
          <Link to={ios} target="_blank" rel="noopener noreferrer">
            <DiApple />
          </Link>
        )}
        {web && (
          <Link to={web} target="_blank" rel="noopener noreferrer">
            <DiFirefox />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Company;
