import {useState} from 'react'

import CartContext from '../../context/CartContext'

import './index.css'

const DishItem = props => {
  const {item} = props

  const [count, setCount] = useState(0)

  // console.log(item)
  const onDecrement = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  const onIncrement = () => setCount(count + 1)

  return (
    <CartContext.Consumer>
      {value => {
        const {addCartItem} = value

        const additemToCart = () => {
          if (count > 0) {
            addCartItem({...item, count})
          }
        }

        return (
          <li className="lists">
            <hr />
            <h1>{item.dish_name}</h1>
            <p>
              {item.dish_currency} {item.dish_price}
            </p>
            <p>{item.dish_description}</p>
            <p className="orange">{item.dish_calories} calories</p>
            <img alt={item.dish_name} className="img" src={item.dish_image} />
            {item.dish_Availability ? (
              <div className="green1">
                <button type="button" className="green" onClick={onDecrement}>
                  -
                </button>
                <p>{count}</p>
                <button type="button" className="green" onClick={onIncrement}>
                  +
                </button>
                <button
                  type="button"
                  onClick={additemToCart}
                  className="logout-desktop-btn"
                >
                  ADD TO CART
                </button>
              </div>
            ) : (
              <p className="red">Not available</p>
            )}
            {item.addonCat.length > 0 && (
              <p className="blue">Customizations available</p>
            )}
          </li>
        )
      }}
    </CartContext.Consumer>
  )
}

export default DishItem
/*

<div className="disheslists">
              <div className="div1">
                <h1>{item.dish_name}</h1>
                <p>
                  {item.dish_currency} {item.dish_price}
                </p>

                <p>{item.dish_description}</p>
                {item.dish_Availability ? (
                  <div className="green1">
                    <button
                      type="button"
                      className="green"
                      onClick={onDecrement}
                    >
                      -
                    </button>
                    <p>{count}</p>
                    <button
                      type="button"
                      className="green"
                      onClick={onIncrement}
                    >
                      +
                    </button>
                    <button
                      type="button"
                      onClick={additemToCart}
                      className="logout-desktop-btn"
                    >
                      ADD TO CART
                    </button>
                  </div>
                ) : (
                  <p className="red">Not available</p>
                )}
                {item.addonCat.length > 0 ? (
                  <p className="blue">Customizations available</p>
                ) : null}
              </div>

              <p className="orange">{item.dish_calories} calories</p>

              <div className="div2">
                <img
                  alt={item.dish_name}
                  className="img"
                  src={item.dish_image}
                />
              </div>
            </div>

 */
