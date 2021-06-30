import React from 'react';
import btnAdd from '../images/icons/button-add.svg';
import btnHeart from '../images/icons/button-heart.svg';
import product_1 from '../images/product/product-1.jpg';

function Card() {
  return (
    <div className="card">
      <div className="card__heart card__heart--active">
        <img width={32} height={32} src={btnHeart} alt="Button heart" />
      </div>
      <img width={133} height={112} src={product_1} alt="" />
      <h5 className="card__name">Мужские Кроссовки Nike Blazer Mid Suede</h5>
      <div className="card__info">
        <div className="card__info-price">
          <p>Цена:</p>
          <span>12 999 руб.</span>
        </div>
        <button className="card__btn">
          <img width={32} height={32} src={btnAdd} alt="" />
        </button>
      </div>
    </div>
  );
}

export default Card;
