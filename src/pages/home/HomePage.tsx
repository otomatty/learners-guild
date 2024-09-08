import { Component } from "solid-js";
import { HomePageWrapper, EventSectionWrapper } from "./HomePage.styled";
import EventTime from "./components/EventTime/EventTime";
import Features from "./components/Features/Features";
import LearningThemes from "./components/LearningThemes/LearningThemes";
import RecommendedFor from "./components/RecommendedFor/RecommendedFor";
import Schedule from "./components/Schedule/Schedule";
import FAQ from "./components/FAQ/FAQ";
import EventReport from "./components/EventReport/EventReport";
import Flow from "./components/Flow/Flow";

const HomePage: Component = () => {
  return (
    <HomePageWrapper>
      <h1>大船渡もくもく会へようこそ</h1>

      <Features />
      <LearningThemes />
      <RecommendedFor />
      <Flow />
      <EventSectionWrapper>
        <EventTime />
        <Schedule />
      </EventSectionWrapper>
      <FAQ />
      <EventReport />
    </HomePageWrapper>
  );
};

export default HomePage;
