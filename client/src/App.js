import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ListToDo from './components/ListToDo/ListToDo';
import Login from './components/Login/Login';
import CreateToDo from './components/CreateToDo/CreateToDo';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <Router>
        <Header />
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
