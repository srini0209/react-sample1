import React from 'react'
import Title from '../Title'
import { Content } from './Content.js'
import { useState } from 'react'
import AddItem from './AddItem.js'

export const ToDoList = () => {
    const [List_items, setList_items] = useState(JSON.parse(localStorage.getItem('todo_list'))
        // [
        //     {
        //         id: 1,
        //         checked: true,
        //         label: "Task 1"
        //     },
        //     {
        //         id: 2,
        //         checked: true,
        //         label: "Task 2"
        //     },
        //     {
        //         id: 3,
        //         checked: false,
        //         label: "Task 3"
        //     },
        //     {
        //         id: 4,
        //         checked: true,
        //         label: "Task 4"
        //     }
        // ]
    );
    const handleCheckBox = (id) => {
        const Listitems = List_items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
        setList_items(Listitems);
        localStorage.setItem("todo_list", JSON.stringify(Listitems))
    }
    const removeItem = (id) => {
        const Listitems = List_items.filter((item) => item.id !== id);
        setList_items(Listitems);
        localStorage.setItem("todo_list", JSON.stringify(Listitems))
    }

    const CompletedItems = List_items.filter((item) => item.checked == true).length;
    const PendingItems = List_items.filter((item) => item.checked != true).length;

    const [newItem, setNewItem] = useState('');
    const addItem = (item) => {
        const id = List_items.length ? List_items[List_items.length - 1].id + 1 : 1
        const addNewItem = { id, checked: false, label:item }
        const Listitems =[...List_items, addNewItem];
        setList_items(Listitems);
        localStorage.setItem("todo_list", JSON.stringify(Listitems))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newItem) return;
        console.log(newItem)
        addItem(newItem);
        setNewItem('')
    }
    return (
        <div>
            <div>
                <Title title="Task List" />
                <AddItem
                    newItem={newItem}
                    setNewItem={setNewItem}
                    handleSubmit={handleSubmit}
                />
                <Content items={List_items} handleCheckBox={handleCheckBox} removeItem={removeItem} />
            </div>
            <div className='container'>
                <div className='row '>
                    <h4 className='col'>Total  {List_items.length}  {List_items.length > 1 ? "items" : "item"}</h4>
                    <h4 className='col text-success'>Completed {CompletedItems} {CompletedItems > 1 ? "items" : "item"} </h4>
                    <h4 className='col text-danger'>Pending {PendingItems} {PendingItems > 1 ? "items" : "item"} </h4>
                </div>
            </div>
        </div>
    )
}
