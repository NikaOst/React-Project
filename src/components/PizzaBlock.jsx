import React from 'react';

function PizzaBlock({ title, price, imageUrl, sizes, types }) {
  //{ title, price, imageUrl, sizes, types } - если {}, то это деструктуризация. Все равно что props.title...
  // хук -> [переменная, фун-ция], только когда пременная меняется
  let [pizzaCount, setPizzaCount] = React.useState(0);
  const onClickAddButton = () => {
    setPizzaCount(pizzaCount++);
  };

  const typeNames = ['тонкое', 'традиционное'];

  const [activeType, setActiveType] = React.useState(0);
  const [activeSize, setActiveSize] = React.useState(0);

  return (
    <div className="pizza-block-wrapper">
      <div className="pizza-block">
        <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
        <h4 className="pizza-block__title">{title}</h4>
        <div className="pizza-block__selector">
          <ul>
            {types.map((type, index) => (
              <li
                key={index}
                onClick={() => setActiveType(index)}
                className={activeType === index ? 'active' : ''}>
                {typeNames[type]}
              </li>
            ))}
          </ul>
          <ul>
            {sizes.map((size, index) => (
              <li
                // если список статичный, то можно индекс передавать, как уникальное
                key={index}
                onClick={() => setActiveSize(index)}
                className={activeSize === index ? 'active' : ''}>
                {size} см.
              </li>
            ))}
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">{price} $</div>
          <button onClick={onClickAddButton} className="button button--outline button--add">
            <svg
              width={12}
              height={12}
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0" fill="white" />
            </svg>
            <span>Add</span>
            <i>{pizzaCount}</i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PizzaBlock;
