import TodoItem from './TodoItem'
import { todoList } from './TodoList';
import './TestTodoPage.css'

const TestTodoPage = () => {
    return (
        <div>
            <h1 className="title">To-Do</h1>
            <div className="todos">
              {todoList.map((todo, index) => (
                  <TodoItem name={todo.name} type={todo.type} amountSaved={todo.amountSaved} amountNeeded={todo.amountNeeded} key={index}/>
              ))}
            </div>
            <p className="description">
                Current Discretionary Income: $1,245.34 <br></br> <br></br>
                <button className="addGoal">Create A New Goal</button> <br></br> <br></br>
                Insert Description here 
                </p>
        </div>
    );
}

export default TestTodoPage;