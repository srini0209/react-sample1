import React, { ChangeEvent, useId, useState } from 'react'
import { FaPlus } from 'react-icons/fa'


const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
    
    return (
        <div className="container">
            <form className='addForm justify-content-center' onSubmit={handleSubmit}>
                <div className="input-group border border-primary rounded-3">
                    <label htmlFor='addItem' className="input-group-text border border-end-2 align-middle rounded-start-3" >Add Item</label>
                    <input
                        type='text'
                        id='addItem'
                        className="form-control w-50"
                        autoFocus
                        placeholder='Add Item'
                        required
                        value={newItem}
                        onChange={(e)=>setNewItem(e.target.value)}
                    />
                    <button type="submit" className="btn btn-primary form-control  rounded-end-2"  aria-label='Add Item'>
                        <FaPlus />
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddItem