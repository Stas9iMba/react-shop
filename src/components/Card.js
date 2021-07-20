import React from 'react';
import btnAdd from '../images/icons/button-add.svg';
import btnAddActive from '../images/icons/button-add--active.svg';
import btnHeart from '../images/icons/button-heart.svg';
import btnHeartActive from '../images/icons/button-heart--active.svg';

function Card({ onClickFavorite, onClickAdd, title, price, imgUrl }) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);

  const handleOnClick = () => {
    onClickAdd({ title, price, imgUrl });
    setIsAdded(!isAdded);
  };
  const OnClickFavorite = () => {
    setIsFavorite(!isFavorite)
  };
  return (
    <div className="card">
      <div className="card__heart card__heart--active" onClick={onClickFavorite}>
        <img width={32} height={32} src={isFavorite ? btnHeartActive : btnHeart} alt="Button heart"  onClick={OnClickFavorite} />
      </div>
      <img width={133} height={112} src={imgUrl} alt="" />
      <h5 className="card__name">{title}</h5>
      <div className="card__info">
        <div className="card__info-price">
          <p>Цена:</p>
          <span>{price}</span>
        </div>
        <div className="card__btn" onClick={onClickAdd}>
          <img
            onClick={handleOnClick}
            width={32}
            height={32}
            src={isAdded ? btnAddActive : btnAdd}
            alt="Button add"
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
