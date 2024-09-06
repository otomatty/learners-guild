import { Component } from "solid-js";
import { Router, Route } from "@solidjs/router";
import "./App.css";

const HomePage: Component = () => <div>Home Page</div>;

const App: Component = () => {
  return (
    <Router>
      <Route path="/" component={HomePage} />
      {/* 他のルートをここに追加 */}
    </Router>
  );
};

export default App;
