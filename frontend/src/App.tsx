import "./App.scss";
import Notifications from "./components/notifications/notification";
import { RootStateOrAny, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import TodoPageComp from "./pages/todos-page";

function App() {
  const notes = useSelector((state: RootStateOrAny) => state.ui.notifications);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <p>TodoApp</p>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/todos">Todos</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/about">This is about</Route>
          <Route path="/todos">
            <TodoPageComp />
          </Route>
          <Route path="/">
            <p>Welcome to home!</p>
          </Route>
        </Switch>

        <Notifications
          title={notes.title}
          message={notes.message}
          status={notes.status}
        />
      </div>
    </Router>
  );
}

export default App;
