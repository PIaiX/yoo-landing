import React from "react";
import { DiAndroid, DiApple, DiFirefox } from "react-icons/di";
import { Link } from "react-router-dom";
// import Start from "./svg/Start";

const Company = ({ imgLogo, imgCover, title, web, ios, android }) => {
  return (
    <div className="company">
      <img src={imgLogo} alt="logo" className="imgLogo" />
      <img src={imgCover} alt="cover" className="imgCover" />
      <h3 className="text-center">{title}</h3>
      <div className="d-flex  justify-content-center">
        {android && <Link to={android}><DiAndroid className="fs-22" /></Link>}
        {ios && <Link to={ios}><DiApple className="fs-22 ms-3" /></Link>}
        {web && <Link to={web}><DiFirefox className="fs-22 ms-3" /></Link>}
      </div>
      {/* <button type='button' className='btn-secondary hmax mt-4 mx-auto'>
            <Start className="fs-15"/>
            <span className='fw-7 ms-2'>Посмотреть</span>
        </button> */}
    </div>
  );
};

export default Company;
