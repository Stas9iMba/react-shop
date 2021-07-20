import React from 'react';

import search from './images/icons/search.svg';
import Card from './components/Card';
import Header from './components/Header';
import SideBasket from './components/SideBasket';
import Widget from './components/Widget';
import btnRemove from './images/icons/button-remove.svg';
import axios from 'axios';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [searchValue, setSearchvalue] = React.useState('');
  const [widgetOpened, setWidgetOpened] = React.useState(true);
  console.log(cartItems)

  React.useEffect(() => {
    axios.get('https://60ed9e7ca78dc700178ae024.mockapi.io/items').then((res) => {
      setItems(res.data);
    });
    axios.get('https://60ed9e7ca78dc700178ae024.mockapi.io/cart').then((res) => {
      setCartItems(res.data);
    });
  }, []);

  const onAddToCart = (cart) => {
    axios.post('https://60ed9e7ca78dc700178ae024.mockapi.io/cart', cart);
    setCartItems((prev) => [...prev, cart]);
  };

  const onAddFavorite = (obj) => {
    axios.post('https://60ed9e7ca78dc700178ae024.mockapi.io/favorite', obj);
    setFavorites((prev) => [...prev, obj]);
  };

  const onRevoveToCart = (id) => {
    axios.delete(`https://60ed9e7ca78dc700178ae024.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter(item => item.id !== id));
  };

  const onChangeSearchInput = (event) => {
    setSearchvalue(event.target.value);
  };

  return (
    <div className="wrapper">
      {cartOpened && (
        <SideBasket
          onClose={() => setCartOpened(false)}
          items={cartItems}
          onRemove={onRevoveToCart}
        />
      )}
      <div className="container">
        <Header onClickCart={() => setCartOpened(true)} />
        <div className="content">
          <div className="content__top">
            <h1 className="content__title">
              {searchValue ? `Поиск по запросу: ${searchValue}` : `Все кроссовки`}
            </h1>
            <form className="content__form" action="#">
              <img className="search" width={20} height={20} src={search} alt="search" />
              <input
                type="text"
                placeholder="&nbsp;"
                onChange={onChangeSearchInput}
                value={searchValue}
                required
              />
              {searchValue && (
                <img
                  className="remove"
                  width={15}
                  height={15}
                  src={btnRemove}
                  alt="remove"
                  onClick={() => setSearchvalue('')}
                />
              )}
            </form>
          </div>
          <div className="content__inner">
            {items
              .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()), [])
              .map((item, index) => (
                <Card
                  key={index + item.title}
                  title={item.title}
                  price={item.price}
                  imgUrl={item.imgUrl}
                  onClickFavorite={(obj) => onAddFavorite(obj)}
                  onClickAdd={() => {
                    onAddToCart();
                  }}
                />
              ))}
          </div>
        </div>
      </div>
      {widgetOpened && <Widget onCloseWidget={() => setWidgetOpened(false)} />}
    </div>
  );
}

export default App;
