import React from 'react';

const Arrow = (props) => {
  return (
    <svg className={props.className} width="1em" height="1em" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.5 26.5L26.5 1.5M26.5 1.5V26.5M26.5 1.5H1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default Arrow;