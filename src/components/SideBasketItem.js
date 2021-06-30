import React from 'react';
import product_1 from '../images/product/product-1.jpg';
import btnRemove from '../images/icons/button-remove.svg';

function SideBasketItem() {
  return (
    <div className="side-basket__item">
      <img width={70} height={60} src={product_1} alt="" />
      <div className="card__info">
        <h5 className="card__name">Мужские Кроссовки Nike Blazer Mid Suede</h5>
        <div className="card__info-price">
          <span>12 999 руб.</span>
        </div>
      </div>
      <button className="card__btn">
        <img className="card__btn-img" width={32} height={32} src={btnRemove} alt="" />
      </button>
    </div>
  );
}

export default SideBasketItem;
