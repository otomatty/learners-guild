import { Component, JSX } from "solid-js";
import { Router, Route, RouteSectionProps } from "@solidjs/router";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import HomePage from "./pages/home/HomePage";
import Schedule from "./pages/schedule/schedule";
import DetailPage from "./pages/detail/DetailPage";
import Signup from "./pages/Signup/Signup";
import LoginPage from "./pages/login/LoginPage";
import MemberPage from "./pages/member/MemberPage";
import NotFoundPage from "./pages/notfound/NotFoundPage";
import Contact from "./pages/Contact/Contact"; // 追加

import "./App.css";

interface LayoutProps {
  children: JSX.Element;
}

const Layout: Component<LayoutProps> = (props) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

const LayoutWrapper: Component<RouteSectionProps<unknown>> = (props) => {
  return <Layout>{props.children}</Layout>;
};

const App: Component = () => {
  return (
    <Router root={LayoutWrapper}>
      <Route path="/" component={HomePage} />
      <Route path="/schedule" component={Schedule} />
      <Route path="/detail/:section" component={DetailPage} />
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={LoginPage} />
      <Route path="/member" component={MemberPage} />
      <Route path="*" component={NotFoundPage} />
      <Route path="/contact" component={Contact} /> {/* 追加 */}
    </Router>
  );
};

export default App;
