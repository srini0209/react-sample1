import React from "react";
import "./content.css";
import { useState } from "react";
import { FaTrashAlt } from 'react-icons/fa';
import Footer from "../Footer";
import { TaskStatus } from "../TaskStatus";

export const Content = () => {
  /*   const [count, setCount] = useState(0);
    function increaseLikeCount() {
      setCount((like) => {
        return like + 1;
      });
    }
    const [lang, setLang] = useState("React");
    function changeLang() {
      setLang(() => selectLang());
    }
  
    function selectLang() {
      let langs = ["React", "Angular", "Vue"];
      let randint = Math.floor(Math.random() * 3);
      return langs[randint];
    } */
  const [List_items, setList_items] = useState(
    [
      {
        id: 1,
        checked: true,
        label: "Task 1"
      },
      {
        id: 2,
        checked: true,
        label: "Task 2"
      },
      {
        id: 3,
        checked: false,
        label: "Task 3"
      },
      {
        id: 4,
        checked: true,
        label: "Task 4"
      }
    ]
  );
  const handleCheckBox = (id) => {
    const Listitems = List_items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setList_items(Listitems);
    localStorage.setItem("todo_list", JSON.stringify(Listitems))
  }
  const removeItem = (id) => {
    const rm = List_items.filter((item) => item.id !== id);
    setList_items(rm);
    localStorage.setItem("todo_list", JSON.stringify(rm))
  }
  return (
    <div>
      {/* <p>Learn {lang}</p> */}
      <div className="container">
        {/* <div className="row">
          <span id="changeButton" className="col w-10 m-3">
            <button onClick={() => changeLang()} className="w-100">Change</button>
          </span>
          <span id="likeButton" className="col w-10 m-3">
            <button onClick={() => increaseLikeCount()} className="Like-button w-75">Like for {lang}</button>
            <span>{count}</span>
          </span>
        </div> */}
        {(List_items.length) ? (
          <ul style={{ listStyleType: 'none' }}>
            {List_items.map((item) => (
              <li className="d-flex item" key={item.id} style={{ alignList_items: "center", height: 'auto' }}>
                <input id={item.id}
                  type="checkbox"
                  className="mx-2 d-flex"
                  style={{ alignList_items: "center" }}
                  checked={item.checked}
                  onChange={() => handleCheckBox(item.id)} >
                </input>
                <label for={item.id}
                  className="mx-2 d-flex"
                  style={(item.checked) ? { alignList_items: "center", textDecoration: 'line-through' } : null}>
                  {item.label}
                </label>
                <FaTrashAlt
                  className="mx-2 d-flex"
                  style={{ alignList_items: "center" }}
                  role="button" onClick={() => removeItem(item.id)}
                  tabIndex='0'
                />
                <TaskStatus
                  taskStatus={item.checked}
                  className="mx-2 d-flex"
                  style={{ alignList_items: "center" }}
                />
              </li>
            ))}
          </ul>
        ) : <p>Your list is Empty.!</p>
        }
      </div>
    </div>
  );
};
