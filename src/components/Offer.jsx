import React, {useState} from 'react';
import Start from './svg/Start';

const Offer = (props) => {
  const [isShowImg, setIsShowImg] = useState(false);

  return (
    <div className="offer">
        <h3>{props.title}</h3>
        <p>{props.text}</p>
        <button 
        className='offer-hover' 
        onMouseEnter={()=>setIsShowImg(true)} 
        onMouseLeave={()=>setIsShowImg(false)}>
          <Start/>
        </button>
        <img 
        src={props.img} 
        alt={props.title} 
        className={(isShowImg) ? 'offer-img' : 'offer-img d-none'}/>
    </div>
  );
};

export default Offer;