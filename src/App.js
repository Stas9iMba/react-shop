import search from './images/icons/search.svg';
import Card from './components/Card';
import Header from './components/Header';
import SideBasket from './components/SideBasket';
import Widget from './components/Widget';
import product_1 from './images/product/product-1.jpg';
import product_2 from './images/product/product-2.jpg';
import product_3 from './images/product/product-3.jpg';
import product_4 from './images/product/product-4.jpg';

const arr = [
  { title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12990, imgUrl: product_1 },
  { title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 15490, imgUrl: product_2 },
  { title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 9990, imgUrl: product_3 },
  { title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 11590, imgUrl: product_4 },
];

function App() {
  return (
    <div className="wrapper">
      <SideBasket />
      <div className="container">
        <Header />
        <div className="content">
          <div className="content__top">
            <h1 className="content__title">Все кросcовки</h1>
            <form className="content__form" action="#">
              <img width={20} height={20} src={search} alt="search" />
              <input type="text" placeholder="Поиск..." />
            </form>
          </div>
          <div className="content__inner">
            {arr.map((obj) => (
              <Card title={obj.title} price={obj.price} imgUrl={obj.imgUrl} />
            ))}
          </div>
        </div>
      </div>
      <Widget />
    </div>
  );
}

export default App;
