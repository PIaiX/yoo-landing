import React from "react";
import { DiAndroid, DiApple, DiFirefox } from "react-icons/di";
// import Start from "./svg/Start";

const Company = ({ imgLogo, imgCover, title }) => {
  return (
    <div className="company">
      <img src={imgLogo} alt="logo" className="imgLogo" />
      <img src={imgCover} alt="cover" className="imgCover" />
      <h3 className="text-center">{title}</h3>
      <div className="d-flex  justify-content-center">
        <DiAndroid className="fs-22" />
        <DiApple className="fs-22 ms-3" />
        <DiFirefox className="fs-22 ms-3" />
      </div>
      {/* <button type='button' className='btn-secondary hmax mt-4 mx-auto'>
            <Start className="fs-15"/>
            <span className='fw-7 ms-2'>Посмотреть</span>
        </button> */}
    </div>
  );
};

export default Company;
