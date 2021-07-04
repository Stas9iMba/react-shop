import search from './images/icons/search.svg';
import Card from './components/Card';
import Header from './components/Header';
import SideBasket from './components/SideBasket';
import Widget from './components/Widget';

function App() {
  return (
    <div className="wrapper">
      <SideBasket />
      <div className="container" style={{ display: 'none' }}>
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
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
      <Widget />
    </div>
  );
}

export default App;
