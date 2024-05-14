import React from "react";
// import Start from "./svg/Start";

const Company = ({ imgLogo, imgCover, title }) => {
  return (
    <div className="company">
      <img src={imgLogo} alt="logo" className="imgLogo" />
      <img src={imgCover} alt="cover" className="imgCover" />
      <h3 className="text-center">{title}</h3>
      {/* <button type='button' className='btn-secondary hmax mt-4 mx-auto'>
            <Start className="fs-15"/>
            <span className='fw-7 ms-2'>Посмотреть</span>
        </button> */}
    </div>
  );
};

export default Company;
