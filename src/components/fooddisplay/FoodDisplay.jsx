import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../fooditem/FoodItem'

const FoodDisplay = ({ category }) => {

  const { food_list } = useContext(StoreContext)

  return (

    <div className='food-display' id='food-display'>

      <h2>Top dishes near you</h2>

      <div

        className="food-display-list">

        {food_list.map((item) => {

          const { _id, name, price, description, image } = item

          if (category === "All" || category === item.category) {

            return <FoodItem key={_id} id={_id} name={name} price={price} description={description} image={image} />

          }

        })}
      </div>

    </div>
  )
}

export default FoodDisplay