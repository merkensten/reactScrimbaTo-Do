import './App.css';
import { ToDoItem } from './components/ToDoItem';

function App() {
  return (
    <div className="App">
      <h1>To Do</h1>
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
    </div>
  );
}

export default App;
