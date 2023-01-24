import React from 'react'
import s from './style.module.css';

export default function ToDo({id, title, checked, deleteTodo, changeStatus}) {

  return (
    <div className={s.card}>
        <p> {id} </p>
        <p className={checked ? s.done: ''}> {title} </p>
        <div className={s.change_block}>
        <input type="checkbox"
         checked={checked ? 'checked' : ''}
         onChange={()=>{changeStatus(id)}}
         />
         <button onClick={()=> deleteTodo(id)}>Удалить</button>
        </div>
    </div>
  )
}
//создать компонент User, который  принимает в качестве 
//props имя, фамилию, фото и выводит эти данные

// дорабоать данный компонент. Добавить кнопку "Удалить" и по нажатию на нее карточка должна удаляться