import PrivateRoute from "./PrivateRoute";
import { Routes,Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./Login"
import ListContact from "./ListContact";

function App(props) {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            strict
            props={props.history}
            element={<PrivateRoute />}
            path="/home"
          />
          <Route
            strict
            props={props.history}
            element={<Login />}
            path="/login"
          />
          <Route
            strict
            props={props.history}
            element={<ListContact />}
            path="/list"
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
