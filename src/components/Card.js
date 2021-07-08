import React from 'react';
import btnAdd from '../images/icons/button-add.svg';
import btnHeart from '../images/icons/button-heart.svg';

function Card(props) {
  const onClickButton = () => {
    console.log('click');
  };

  return (
    <div className="card">
      <div className="card__heart card__heart--active">
        <img width={32} height={32} src={btnHeart} alt="Button heart" />
      </div>
      <img width={133} height={112} src={props.imgUrl} alt="" />
      <h5 className="card__name">{props.title}</h5>
      <div className="card__info">
        <div className="card__info-price">
          <p>Цена:</p>
          <span>{props.price}</span>
        </div>
        <button className="card__btn" onClick={onClickButton}>
          <img width={32} height={32} src={btnAdd} alt="" />
        </button>
      </div>
    </div>
  );
}

export default Card;
