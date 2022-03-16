import React from 'react';
import './App.scss';
import Todo from "./Components/Todo/Todo"


function App () {
	
	const [todos, setTodos] = React.useState(JSON.parse(window.localStorage.getItem("todos")) || []);
	
	// State takes three values: all, completed, uncompleted
	const [type, setType] = React.useState(window.localStorage.getItem("type") || "all");
	
	const handleDelete = (evt) => {
		const todoId = evt.target.dataset.todoId - 0;
		
		const filteredTodos = todos.filter((todo) => !(todo.id === todoId));
		
		window.localStorage.setItem("todos", JSON.stringify(filteredTodos));
		
		setTodos(filteredTodos);
	}
	
	const handleCheck = (evt) => {
		const todoId = evt.target.dataset.todoId - 0;
		
		const foundTodo = todos.find((todo) => todo.id === todoId);
		
		foundTodo.isCompleted = !foundTodo.isCompleted
		
		window.localStorage.setItem("todos", JSON.stringify([...todos]));
		
		setTodos([...todos]);
	}
	
	const getTodosByType = (_type, _todos) => {
		if(_type === "all"){
			return _todos;
		} 
		
		if (_type === "completed"){
			return _todos.filter((t) => t.isCompleted);
		}
		
		if (_type === "uncompleted"){
			return _todos.filter((t) => !t.isCompleted);
		}
		
		else {
			return[];
		}
	};

	const setTypeLocale = (_type) => {
		window.localStorage.setItem("type", _type)
		setType(_type)
	}
	
	
	return (	
		<div className='container'>
		
		<main className="main">
		
		<div className='todo__box'>
		
		<input className='todo__add-input' type="text" autoComplete='off' placeholder='What needs to be done...' onKeyUp={(evt) => {
			
			if(evt.code === "Enter") {
				const newTodo = {
					id: todos[todos.length - 1]?.id + 1 || 0,
					title: evt.target.value.trim(),
					isCompleted: false
				}
				
				window.localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
				
				setTodos([...todos, newTodo])
				
				evt.target.value = null;
			}
		}}/>
		
		<ul className="todos">{todos.length > 0 && getTodosByType(type, todos).map((todo) => (<Todo key={todo.id} todo={todo} handleDelete={handleDelete} handleCheck={handleCheck}>{todo.title}</Todo>))}</ul>
		
		<div className='buttons'>
		<button className='button-all' onClick={()=> setTypeLocale("all")}>all</button>
		<button className='button-completed' onClick={()=> setTypeLocale("completed")}>completed</button>
		<button className='button-uncompleted' onClick={()=> setTypeLocale("uncompleted")}>uncompleted</button>
		</div>
		
		</div>
		</main>
		
		</div>
		);
	}
	
	export default App;
	
	
	
	
	