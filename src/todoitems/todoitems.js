import React from "react";
import './todoitems.css';

const ToDoItems = (props) => {
    const {items, DeleteItem} = props;
    let length = items.length;
    const list = length? (
        items.map(val => {
            return (
                <div key={val.id}>
                    <span className='name'>{val.name}</span>
                    <span className='age'>{val.age}</span>
                    <span className='del' onClick={() => DeleteItem(items.indexOf(val))}>&times;</span>
                </div>
            )
        })) : <p>there is no items to show</p>;


    return (
        <div className='listItems'>
            <span className='name title'>Name</span>
            <span className='age title'>Age</span>
            <span className='del title'>Action</span>
            {list}
        </div>
    )


};
export default ToDoItems;