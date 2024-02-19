import React from "react";
import "./content.css";
import { useState } from "react";
import { FaTrashAlt } from 'react-icons/fa';
import Footer from "./Footer";

export const Content = () => {
  const [count, setCount] = useState(0);
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
  }
  const [items, setItems] = useState(
    [
      {
        id: 1,
        checked: true,
        label: "Task 1"
      },
      {
        id: 1,
        checked: true,
        label: "Task 2"
      },
      {
        id: 1,
        checked: false,
        label: "Task 3"
      },
      {
        id: 1,
        checked: true,
        label: "Task 4"
      }
    ]
  );

  return (
    <div>
      <p>Learn {lang}</p>
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
        <ul style={{ listStyleType: 'none' }}>
          {items.map((item) => (
            <li>
              <input id={item.id} 
                type="checkbox" className="mx-2" checked={item.checked}  >
              </input><label for={item.id}>{item.label}</label>
              <FaTrashAlt className="mx-2" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
