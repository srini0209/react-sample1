import React from "react"
import { FaTrashAlt } from "react-icons/fa"
import { TaskStatus } from "../TaskStatus"
const LineItem = ({item, handleCheckBox,removeItem}) => {
  return (
    <li className="d-flex item"  style={{ alignList_items: "center", height: 'auto' }}>
                <input id={"item-"+item.id}
                  type="checkbox"
                  className="mx-2 d-flex"
                  style={{ alignList_items: "center" }}
                  checked={item.checked}
                  onChange={() => handleCheckBox(item.id)} >
                </input>
                <label htmlFor={"item-"+item.id}
                  className="mx-2 d-flex"
                  style={(item.checked) ? { alignList_items: "center", textDecoration: 'line-through' } : null}>
                  {item.label}
                </label>
                <FaTrashAlt
                  className="mx-2 d-flex"
                  style={{ alignList_items: "center" }}
                  role="button" onClick={() => removeItem(item.id)}
                  tabIndex='0'
                  aria-label={`Delete ${item.item}`}
                />
                <TaskStatus
                  taskStatus={item.checked}
                  className="mx-2 d-flex"
                  style={{ alignList_items: "center" }}
                />
              </li>
  )
}

export default LineItem