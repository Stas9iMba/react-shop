import React from 'react';
import btnRemove from '../images/icons/button-remove.svg';

function SideBasketItem({ title, price, imgUrl }) {
  const [cart, setCartRemove] = React.useState('flex');
  const onRemove = () => {
    setCartRemove('none');
  };
  return (
    <div className="side-basket__item" style={{ display: cart  }}>
      <img width={70} height={60} src={imgUrl} alt="" />
      <div className="card__info">
        <h5 className="card__name">{title}</h5>
        <div className="card__info-price">
          <span>{price}</span>
        </div>
      </div>
      <button className="card__btn">
        <img
          className="card__btn-img"
          width={32}
          height={32}
          src={btnRemove}
          alt="remove"
          onClick={onRemove}
        />
      </button>
    </div>
  );
}

export default SideBasketItem;
