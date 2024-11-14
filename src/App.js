import logo from './logo.svg';
import './App.css';
import './scss/app.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';
import './scss/app.scss';
import React from 'react';

// cmd + D - выделяет одинаковое в коде
// ctrl + z - стоп действие терминала
// npx - launch programm (as react-app)
//cmd + shift + z - вернуть отмененное действие

//компоненты только с большой буквы

function App() {
  const [items, setItems] = React.useState([]);

  // когда хотим выполнить это действие только один раз
  React.useEffect(() => {
    fetch('https://64edc1081f8721827141b178.mockapi.io/items')
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {items.map((obj) => (
              <PizzaBlock
                key={obj.id}
                // title={obj.title}
                // price={obj.price}
                // imageUrl={obj.imageUrl}
                // sizes={obj.sizes}
                // types={obj.types}

                //если у нас такие же названия параметров
                {...obj}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
