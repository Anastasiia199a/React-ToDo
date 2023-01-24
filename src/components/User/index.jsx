import React from 'react'
import s from './style.module.css';

export default function AddToDo({add_todo}) {
  const onSubmit = event => {
    event.preventDefault();
    const {title} = event.target;

    const new_todo = {
      id: Date.now(),
      title: title.value,
      checked: false
  };
  add_todo(new_todo);
  title.value = '';
}
  return (
    <div className={s.card} onDoubleClick={()=>deleteTodo(id)}>
        <p> {id} </p>
        <p className={checked ? s.done: ''}> {title}</p>
        <input type="checkbox"
        checked={checked ? 'checked' : ''}
        onChange={()=>{changeStatus(id)}}
        />
    </div>
  )
}
