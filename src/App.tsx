import { Component, JSX, onMount } from "solid-js";
import { Router, Route, RouteSectionProps } from "@solidjs/router";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import HomePage from "./pages/Home/HomePage";
import Schedule from "./pages/Schedule/Schedule";
import Signup from "./pages/Signup/Signup";
import LoginPage from "./pages/login/LoginPage";
import MemberPage from "./pages/member/MemberPage";
import NotFoundPage from "./pages/notfound/NotFoundPage";
import Contact from "./pages/Contact/Contact";
import FAQ from "./pages/FAQ/FAQ";
import EventReport from "./pages/EventReport/EventReport";
import ReportDetail from "./pages/ReportDetail/ReportDetail"; // 追加

import "./App.css";

interface LayoutProps {
  children: JSX.Element;
}

const Layout: Component<LayoutProps> = (props) => {
  onMount(() => {
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");

    if (header) {
      document.documentElement.style.setProperty(
        "--header-height",
        `${header.offsetHeight}px`
      );
    }

    if (footer) {
      document.documentElement.style.setProperty(
        "--footer-height",
        `${footer.offsetHeight}px`
      );
    }
  });

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
      <Route path="faq" component={FAQ} />
      <Route path="reports">
        <Route path="/" component={EventReport} />
        <Route path="/:id" component={ReportDetail} />
      </Route>
      <Route path="/contact" component={Contact} />
      <Route path="/signup" component={Signup} />
      <Route path="*" component={NotFoundPage} />
      <Route path="/member" component={MemberPage} />
      <Route path="/login" component={LoginPage} />
    </Router>
  );
};

export default App;
