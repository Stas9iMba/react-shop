import React from 'react';
import btnRemove from '../images/icons/button-remove.svg';
import arrowRight from '../images/icons/arrow-right.svg';
// import SideBasketItem from './SideBasketItem';

function SideBasket({ onClose, items = [], onRemove }) {
  return (
    <section className="side-basket">
      <div className="side-basket__box">
        <div className="side-basket__top">
          <h2 className="side-basket__title">Корзина</h2>
          <img
            className="card__btn-img"
            width={32}
            height={32}
            src={btnRemove}
            alt="Close"
            onClick={onClose}
          />
        </div>
        <div className="side-basket__items">
          {items.map((obj, index) => (
            <div className="side-basket__item" key={index + obj.title}>
              <img width={70} height={60} src={obj.imgUrl} alt="product" />
              <div className="card__info">
                <h5 className="card__name">{obj.title}</h5>
                <div className="card__info-price">
                  <span>{obj.price}</span>
                </div>
              </div>
              <button className="card__btn">
                <img
                  className="card__btn-img"
                  width={32}
                  height={32}
                  src={btnRemove}
                  alt="remove"
                  onClick={() => onRemove(obj.id)}
                />
              </button>
            </div>
          ))}
        </div>
        <ul className="side-basket__list list-info">
          <li>
            <span className="list-info__text">Итого:</span>
            <span className="list-info__dashed"></span>
            <span className="list-info__price">21 498 руб.</span>
          </li>
          <li>
            <span className="list-info__text">Налог 5%:</span>
            <span className="list-info__dashed"></span>
            <span className="list-info__price">1074 руб.</span>
          </li>
          <button className="list-info__btn btn">
            Оформить заказ
            <img width={16} height={14} src={arrowRight} alt="arrow" />
          </button>
        </ul>
      </div>
    </section>
  );
}

export default SideBasket;
