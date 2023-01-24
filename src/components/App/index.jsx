import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import AddToDo from '../AddToDo';
import Filter from '../Filter';
import ToDo from '../ToDo';
import s from './style.module.css';
//import Test from '../Test';
//import '../index.css';
//import User from './User';
function App() {
  const todo_list =[
    {id: 1, title: 'eat', checked: true, show: true},
    {id: 2, title: 'sleep', checked: false, show: true},
    {id: 3, title: 'drink', checked: true, show: true},
    {id: 4, title: 'thing', checked: false, show: true},
    {id: 5, title: 'jump', checked: true, show: true}
  ];

  useEffect(()=>{
    console.log('done')
  });

   const [todos, setTodos] = useState(todo_list);

   const deleteTodo = (id) => {
    const new_todos = todos.filter(todo => todo.id !== id);
    setTodos(new_todos);
  }
    const changeStatus = (id)=>{
      const target = todos.find(product => product.id === id);
      target.checked = !target.checked;
      setTodos([...todos]);
    }

    const search = (string) =>{
     string = string.toLowerCase();
     const new_todos = todos.map(todo =>{
      todo.show = todo.title.toLowerCase().startsWith(string);
      return todo   
      });
      setTodos(new_todos);
    }
     
    const add_todo = (todo) => {
      console.log(todo)
      // todos.push(todo)
      // setTodos([...todos]);
      setTodos([...todos, todo]);
    }
    // передать функцию search в компонент Filter и вызывать ее при изменении поля ввода
    // создать функцию, которая будет получать новый объект с делом и добавить его в стейт

    //передать через props метод hangeStatus
    // и вызывать его при изменении чекбокса
  // добавить файл со стилями для компонента Арр и описать стили для div с карточками

   //создать функцию, которая получает id и изменяет у соответствующего 
    //дела checked на обратный
    //не забыть вызвать setTodos
  return (
    <div>
      <AddToDo add_todo={add_todo}/>
      <Filter search = {search} />
      <div className={s.container}> 
        {
          todos.length === 0
          ? <p>Дел нет</p>
          :todos
          .filter(({show}) => show)
          .map(todo => 
            <ToDo 
            key={todo.id} 
            {...todo} 
            deleteTodo={deleteTodo}
            changeStatus={changeStatus}
            />)
        }
    </div>
    </div>
    
  );
}

export default App;
