import { Fragment, useState, useEffect } from "react";
import React from "react";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";
//import { v4 as uuidv4 } from 'uuid';
import axios from "axios";

const Todos = () => {
    // const Todo1 = 'Todo 1'
    // const Todo2 = 'Todo 2'
    // const Todo3 = 'Todo 3'
    // const [todosState, setTodosState] = useState([
    //     {
    //         id: uuidv4(),
    //         title: 'Todo 1',
    //         completed: true,
    //     },
    //     {
    //         id: uuidv4(),
    //         title: 'Todo 2',
    //         completed: false,
    //     },
    //     {
    //         id: uuidv4(),
    //         title: 'Todo 3',
    //         completed: false,
    //     },
    // ])
    useEffect(() => {
        const getTodos = async () => {
            try {
                const res = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
                //console.log(res.data)
                setTodosState(res.data)
            } catch (error) {
                console.log(error.message)
            }
        }
        getTodos()
    }, [])
    const [todosState, setTodosState] = useState([])
    // const allTodos=[]
    // for(let todo of todosState){
    //     allTodos.push(<p>{todo}</p>)
    // }

    const markComplete = id => {
        const newTodos = todosState.map(todo => {
            if (todo.id === id) todo.completed = !todo.completed
            return todo
        })
        setTodosState(newTodos)
    }
    const deleteTodo = async id => {
        try {
          await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
          const newTodos = todosState.filter(todo => todo.id !== id)
          setTodosState(newTodos)
        } catch (error) {
          console.log(error.message)
        }
      }
    const addTodo = async title => {
        try {
            const res = await axios.post(
              'https://jsonplaceholder.typicode.com/todos',
              {
                title,
                completed: false
              }
            )
            console.log(res.data)
            const newTodos = [...todosState, res.data]
            setTodosState(newTodos)
          } catch (error) {
            console.log(error.message)
          }
    }

    return (
        <Fragment>
            {/* <p>{Todo1}</p>
            <p>{Todo2}</p>
            <p>{Todo3}</p> */}
            {/* {allTodos} */}
            <AddTodo addTodoFunc={addTodo} />
            {todosState.map(todo => {
                return (
                    <TodoItem
                        key={todo.id}
                        todoProps={todo}
                        markCompletefunc={markComplete}
                        deleteTodoFunc={deleteTodo}
                    />)
            })}
        </Fragment>

    )
}
export default Todos