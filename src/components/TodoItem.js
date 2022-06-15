import React from 'react'


const TodoItem = props => {
    //console.log(props)
    const todo = props.todoProps
    const markComplete = props.markCompletefunc
    const deleteTodo = props.deleteTodoFunc
    // Style
    const todoItemStyle = {
        background: '#f4f4f4',
        padding: '10px',
        borderBottom: '1px #ccc dotted',
        textDecoration: todo.completed ? 'line-through' : 'none'
    }

    const deleteButtonStyle = {
        background: '#ff0000',
        color: '#fff',
        border: 'none',
        padding: '5px 9px',
        borderRadius: '50%',
        cursor: 'pointer',
        float: 'right'
    }

    // Return
    return (
        <p style={todoItemStyle}>
            <input type="checkbox" onChange={markComplete.bind(this, todo.id)} checked={todo.completed} />
            {todo.title}
            <button style={deleteButtonStyle} onClick={deleteTodo.bind(this, todo.id)}>Delete</button>
        </p>
    )

    // PropTypes
    // TodoItem.propTypes = {
    //     todoProps: PropTypes.object.isRequired,
    //     markCompleteFunc: PropTypes.func.isRequired,
    // }
}
export default TodoItem