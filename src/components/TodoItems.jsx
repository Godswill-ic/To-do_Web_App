import React from 'react'
import tick from '../assets/tick.png'
import delete_icon from '../assets/delete.png'
import not_tick from '../assets/not_tick.png'

const TodoItems = (props) => {
  return (
    <div className='flex items-center my-3 gap-3'>
        <div onClick={()=>{props.toggle(props.id)}} className='flex flex-1  items-center cursor-pointer gap-3'>
            <img src={props.isComplete ? tick : not_tick} alt="" className='w-7'/>

            <p className={`text-slate-700 break-words overflow-hidden  text-[17px] decoration-slate-500 w-[350px] input-p ${props.isComplete ? "line-through" : ""}`}>{props.text}</p>
        </div>

        <img onClick={() => {props.deleteTodo(props.id)}} src={delete_icon} alt="" className='w-3.5 cursor-pointer '/>
    </div>
  )
}

export default TodoItems