import React, { useState } from "react";

const AddTodo = props => {
    const [title, setTitle] = useState('')
    const addTodo = props.addTodoFunc

    const addTodoFormStyle = {
        display: "flex"
    }

    const addTodoInputStyle = {
        flex: '10',
        padding: '5px',
    }

    const changeTitle = event => {
        setTitle(event.target.value)
    }
    const addSingleTodo = event => {
        event.preventDefault()
        if (title !== '') {
            addTodo(title)
            setTitle('')
        }
    }

    return (
        <form style={addTodoFormStyle} onSubmit={addSingleTodo}>
            <input
                style={addTodoInputStyle}
                type="text" name="title" placeholder="add task"
                onChange={changeTitle}
                value={title}
            />
            <input type="submit" value="Add" className="btn" />
        </form>
    )
}

export default AddTodo