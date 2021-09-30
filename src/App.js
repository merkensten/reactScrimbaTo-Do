import './App.css';
import { ToDoItem } from './components/ToDoItem';
import todosData from './todosData';

function App(props) {
  const todoItems = todosData.map((todo) => <ToDoItem key={todo.id} todo={todo} />);

  return (
    <div className="App">
      <h1>To Do</h1>
      {todoItems}
    </div>
  );
}

export default App;
