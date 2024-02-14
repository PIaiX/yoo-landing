import React from "react";
// import Start from "./svg/Start";

const Company = (props) => {
  return (
    <div className="company">
      <img src={props.imgLogo} alt="logo" className="imgLogo" />
      <img src={props.imgCover} alt="cover" className="imgCover" />
      {/* <button type='button' className='btn-secondary hmax mt-4 mx-auto'>
            <Start className="fs-15"/>
            <span className='fw-7 ms-2'>Посмотреть</span>
        </button> */}
    </div>
  );
};

export default Company;
