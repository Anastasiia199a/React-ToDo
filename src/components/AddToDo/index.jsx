import React from 'react'
import s from './style.module.css'

export default function AddToDo({add_todo}) {

const onSubmit = event => {
    event.preventDefault();
    const {title} = event.target; 

    const new_todo = {
        id: Date.now(),
        title: title.value,
        checked: false,
        show: true
    };

    add_todo(new_todo);
    title.value = '';
}

  return (
    <form className={s.form} onSubmit={onSubmit}>
        <input type="text" placeholder='Название дела' name='title'/>
        <button>Добавить</button>
    </form>
  )
}
