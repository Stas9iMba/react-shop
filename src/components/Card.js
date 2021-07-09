import React from 'react';
import btnAdd from '../images/icons/button-add.svg';
import btnAddActive from '../images/icons/button-add--active.svg';
import btnHeart from '../images/icons/button-heart.svg';

function Card(props) {
  const [isAdded, setIsAdded] = React.useState(false);

  const handleOnClick = () => {
    setIsAdded(true);
  };
  return (
    <div className="card">
      <div className="card__heart card__heart--active" onClick={props.onClickFavorite}>
        <img width={32} height={32} src={btnHeart} alt="Button heart" />
      </div>
      <img width={133} height={112} src={props.imgUrl} alt="" />
      <h5 className="card__name">{props.title}</h5>
      <div className="card__info">
        <div className="card__info-price">
          <p>Цена:</p>
          <span>{props.price}</span>
        </div>
        <div className="card__btn" onClick={props.onClickAdd}> 
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
