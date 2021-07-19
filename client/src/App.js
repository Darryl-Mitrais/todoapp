import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import ListToDo from './components/ListToDo/ListToDo';
import Login from './components/Login/Login';
import CreateToDo from './components/CreateToDo/CreateToDo';

function App() {
  return (
    <div className="">
      <Router>
        <h2>To Do App</h2>
        <div className="container">
          <Switch>
            <Route path="/" exact component={Login}></Route>
            <Route path="/tasks" component={ListToDo}></Route>
            <Route path="/add-task" component={CreateToDo}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
