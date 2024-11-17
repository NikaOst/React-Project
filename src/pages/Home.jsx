import React from 'react';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';

export const Home = () => {
  const [items, setItems] = React.useState([]);

  // когда хотим выполнить это действие только один раз
  React.useEffect(() => {
    fetch('https://64edc1081f8721827141b178.mockapi.io/items')
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
      });
    // заставляет страницу при рендере отображаться сверху
    window.scrollTo(0, 0);
  }, []);

  return (
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
  );
};
