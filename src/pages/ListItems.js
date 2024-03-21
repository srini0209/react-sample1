import React from 'react'
import LineItem from './LineItem'

const ListItems = ({items, handleCheckBox,removeItem}) => {
  return (
    <ul style={{ listStyleType: 'none' }}>
            {items.map((item) => (
              <LineItem 
              item={item}
              key ={item.id}
              handleCheckBox={handleCheckBox}
              removeItem={removeItem}
              />
            ))}
          </ul>
  )
}

export default ListItems