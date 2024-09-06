import { Component } from 'solid-js';
import { Router, Route } from '@solidjs/router';
import HomePage from './pages/home/HomePage';
import DetailPage from './pages/detail/DetailPage';
import SignupPage from './pages/signup/SignupPage';
import LoginPage from './pages/login/LoginPage';
import MemberPage from './pages/member/MemberPage';
import NotFoundPage from './pages/notfound/NotFoundPage';

const App: Component = () => {
  return (
    <Router>
      <Route path="/" component={HomePage} />
      <Route path="/detail/:section" component={DetailPage} />
      <Route path="/signup" component={SignupPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/member" component={MemberPage} />
      <Route path="*" component={NotFoundPage} />
    </Router>
  );
};

export default App;
