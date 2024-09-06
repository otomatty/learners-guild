import { Component } from 'solid-js';
import { HomePageWrapper } from './HomePage.styled';
import Overview from './components/Overview/Overview';
import Schedule from './components/Schedule/Schedule';
import FAQ from './components/FAQ/FAQ';
import EventReport from './components/EventReport/EventReport';

const HomePage: Component = () => {
  return (
    <HomePageWrapper>
      <h1>大船渡もくもく会へようこそ</h1>
      <Overview />
      <Schedule />
      <FAQ />
      <EventReport />
    </HomePageWrapper>
  );
};

export default HomePage;
