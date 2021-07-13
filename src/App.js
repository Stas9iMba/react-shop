import React from 'react';

import search from './images/icons/search.svg';
import Card from './components/Card';
import Header from './components/Header';
import SideBasket from './components/SideBasket';
import Widget from './components/Widget';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [widgetOpened, setWidgetOpened] = React.useState(true);

  const onAddToCart = (cart) => setCartItems((prev) => [...prev, cart]);
  console.log(cartItems[0]);
  React.useEffect(() => {
    fetch("https://60ed9e7ca78dc700178ae024.mockapi.io/items")
      .then((res) => {
        console.log(res)
        return res.json();
      })
      .then((json) => {
        console.log(json)
        setItems(json);
      });
  }, []);

  return (
    <div className="wrapper">
      {cartOpened && <SideBasket onClose={() => setCartOpened(false)} items={cartItems} />}
      <div className="container">
        <Header onClickCart={() => setCartOpened(true)} />
        <div className="content">
          <div className="content__top">
            <h1 className="content__title">Все кросcовки</h1>
            <form className="content__form" action="#">
              <img width={20} height={20} src={search} alt="search" />
              <input type="text" placeholder="Поиск..." />
            </form>
          </div>
          <div className="content__inner">
            {items.map((item) => (
              <Card
                title={item.title}
                price={item.price}
                imgUrl={item.imgUrl}
                onClickFavorite={() => {
                  console.log('Добавили в избранное');
                }}
                onClickAdd={() => {
                  onAddToCart(item);
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
