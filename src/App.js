import logo from './images/icons/logo.png';
import cart from './images/icons/cart.svg';
import user from './images/icons/user.svg';
import search from './images/icons/search.svg';
import arrowRight from './images/icons/arrow-right.svg';
import btnAdd from './images/icons/button-add.svg';
import btnRemove from './images/icons/button-remove.svg';
import btnAddActive from './images/icons/button-add--active.svg';
import btnHeart from './images/icons/button-heart.svg';
import btnHeartActive from './images/icons/button-heart--active.svg';
import product_1 from './images/product/product-1.jpg';
import product_2 from './images/product/product-2.jpg';
import product_3 from './images/product/product-3.jpg';
import product_4 from './images/product/product-4.jpg';

function App() {
  return (
    <div className="wrapper">

        <section className="side-basket">
        <div className="side-basket__box">
        <div className="side-basket__top">
          <h2 className="side-basket__title">Корзина</h2>
          <img className="card__btn-img" width={32} height={32} src={btnRemove} alt="" />
        </div>
          <div className="side-basket__items">
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
            <div className="side-basket__item">
              <img width={70} height={60} src={product_2} alt="" />
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
            <button className="list-info__btn btn">Оформить заказ
              <img  width={16} height={14} src={arrowRight} alt="arrow" />
            </button>
          </ul>
        </div>
      </section>

      <div className="container">
        <header className="header">
          <div className="header__logo">
            <img width={40} height={40} src={logo} alt="logo" />
            <div>
              <h3 className="header__title">REACT Shop</h3>
              <p className="header__subtitle">Магазин лучших кроссовок</p>
            </div>
          </div>
          <ul className="header__list">
            <li className="header__item">
              <img width={18} height={18} src={cart} alt="" />
              <span>12 999 руб.</span>
            </li>
            <li className="header__item">
              <svg
                width="22"
                height="19"
                viewBox="0 0 22 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15.1003 0C16.7293 0 18.0976 0.54932 19.2052 1.64796C20.3129 2.7466 20.8668 4.08759 20.8668 5.67092C20.8668 6.44643 20.7039 7.23002 20.3781 8.02169C20.0523 8.81335 19.6939 9.51616 19.303 10.1301C18.912 10.7441 18.2523 11.5357 17.3238 12.5051C16.3953 13.4745 15.6134 14.2581 14.9781 14.8559C14.3428 15.4537 13.3248 16.3665 11.9239 17.5944L10.4089 18.9515L8.89403 17.6429C7.52572 16.3827 6.51577 15.4537 5.8642 14.8559C5.21262 14.2581 4.42258 13.4745 3.49408 12.5051C2.56559 11.5357 1.90586 10.7441 1.51492 10.1301C1.12397 9.51616 0.773748 8.81335 0.464249 8.02169C0.15475 7.23002 0 6.44643 0 5.67092C0 4.08759 0.553841 2.7466 1.66152 1.64796C2.7692 0.54932 4.12123 0 5.71759 0C7.60717 0 9.17095 0.727041 10.4089 2.18112C11.6469 0.727041 13.2107 0 15.1003 0ZM10.5067 16.0918C12.1031 14.6701 13.2677 13.6118 14.0008 12.9171C14.7338 12.2224 15.5401 11.3903 16.4198 10.4209C17.2994 9.45153 17.9102 8.60332 18.2523 7.87628C18.5944 7.14924 18.7654 6.41412 18.7654 5.67092C18.7654 4.63691 18.4152 3.78061 17.7148 3.10204C17.0143 2.42347 16.1428 2.08418 15.1003 2.08418C14.3184 2.08418 13.5772 2.31037 12.8768 2.76276C12.1764 3.21514 11.6795 3.79677 11.3863 4.50765H9.43158C9.17095 3.79677 8.69041 3.21514 7.98997 2.76276C7.28952 2.31037 6.53206 2.08418 5.71759 2.08418C4.67507 2.08418 3.81173 2.42347 3.12757 3.10204C2.44342 3.78061 2.10134 4.63691 2.10134 5.67092C2.10134 6.41412 2.26423 7.14924 2.59002 7.87628C2.91581 8.60332 3.52666 9.45153 4.42258 10.4209C5.3185 11.3903 6.13297 12.2224 6.866 12.9171C7.59902 13.6118 8.74743 14.6701 10.3112 16.0918L10.4089 16.1888L10.5067 16.0918Z"
                  fill="#9B9B9B"
                />
              </svg>
            </li>
            <li className="header__item">
              <img width={20} height={20} src={user} alt="" />
            </li>
          </ul>
        </header>

        <div className="content">
          <div className="content__top">
            <h1 className="content__title">Все кросcовки</h1>
            <form className="content__form" action="#" >
              <img width={20} height={20} src={search} alt="search" />
              <input type="text" placeholder="Поиск..." />
            </form>
          </div>
          <div className="content__inner">
          <div className="card">
              <div className="card__heart card__heart--active">
                <img width={32} height={32} src={btnHeartActive} alt="Button heart" />
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

            <div className="card">
              <div className="card__heart">
                <img width={32} height={32} src={btnHeart} alt="" />
              </div>
              <img width={133} height={112} src={product_2} alt="" />
              <h5 className="card__name">Мужские Кроссовки Nike Blazer Mid Suede</h5>
              <div className="card__info">
                <div className="card__info-price">
                  <p>Цена:</p>
                  <span>12 999 руб.</span>
                </div>
                <button className="card__btn">
                  <img width={32} height={32} src={btnAddActive} alt="" />
                </button>
              </div>
            </div>
            <div className="card">
              <div className="card__heart">
                <img width={32} height={32} src={btnHeart} alt="" />
              </div>
              <img width={133} height={112} src={product_3} alt="" />
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
            <div className="card">
              <div className="card__heart card__heart--active">
                <img width={32} height={32} src={btnHeartActive} alt="" />
              </div>
              <img width={133} height={112} src={product_4} alt="" />
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
