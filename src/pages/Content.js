import React from "react";
import "./content.css";
// import { useState } from "react";
import { FaTrashAlt } from 'react-icons/fa';
import Footer from "../Footer";
import { TaskStatus } from "../TaskStatus";
import ListItems from "./ListItems";

export const Content = ({ items, handleCheckBox, removeItem }) => {
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
        {(items.length) ? (
          <ListItems
            items={items}
            handleCheckBox={handleCheckBox}
            removeItem={removeItem}
          />
        ) : <p>Your list is Empty.!</p>
        }
      </div>
    </div>
  );
};
