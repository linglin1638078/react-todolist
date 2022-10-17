import logo from './logo.svg';
import './App.css';
import SingleTodo from './components/SingleTodo';
import TodoApp from './components/TodoApp';

const appStyles = {
  backgroundColor: 'cornsilk'
}

function App() {
  return (
    <div className="App" >
      
      <img src={logo} className="App-logo" alt="logo" />
      
      {/*<SingleTodo todoName="Become a SDE" />}
      {<SingleTodo todoName="Travel around the world" />}
      {<SingleTodo todoName="Fly in a hot-air balloon" />*/}

      <TodoApp />
    </div>
  );
}

export default App;
