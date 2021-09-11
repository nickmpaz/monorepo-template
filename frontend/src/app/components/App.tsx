import React from "react";
import { AuthProvider } from "../../auth/providers/AuthProvider";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { GuardedRoute } from "../../auth/components/GuardedRoute";
import { LoginView } from "../views/LoginView";
import { CounterView } from "../views/CounterView";
import { LOGIN, COUNTER } from "../definitions/routes";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Route path={LOGIN} component={LoginView} />
          <GuardedRoute path={COUNTER} component={CounterView} />
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
