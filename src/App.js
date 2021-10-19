import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Service from "./pages/Service/Service";
import Appointment from "./pages/Appointment/Appointment";
import Login from "./pages/Login/Login";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Register from "./pages/Register/Register";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <PrivateRoute exact path="/service/:id">
              <Service />
            </PrivateRoute>
            <PrivateRoute exact path="/appointment">
              <Appointment />
            </PrivateRoute>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route path="*"></Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
