import React from 'react';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import { Skeleton } from '../components/Skeleton';

export const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [cateroryID, setCateroryID] = React.useState(0);
  const [sortType, setSortType] = React.useState({
    name: 'популярности',
    sort: 'rating',
  });

  // когда хотим выполнить это действие только один раз
  // desc - по убыванию сортировка
  React.useEffect(() => {
    const sortBy = sortType.sort.replace('-', '');
    const orderBy = sortType.sort.includes('-') ? 'asc' : 'desc';
    const filterBy = cateroryID > 0 ? `category=${cateroryID}` : '';

    setIsLoading(true);
    fetch(
      `https://64edc1081f8721827141b178.mockapi.io/items?${filterBy}&sortBy=${sortBy}&order=${orderBy}`,
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    // заставляет страницу при рендере отображаться сверху
    // отслеживает состояния cateroryID и sortType. Если они поменялись, то срабатывает fetch
    window.scrollTo(0, 0);
  }, [cateroryID, sortType]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={cateroryID} onChangeCategory={(index) => setCateroryID(index)} />
        <Sort value={sortType} onChangeSort={(index) => setSortType(index)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => (
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
