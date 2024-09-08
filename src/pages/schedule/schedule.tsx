import { Component } from "solid-js";
import { ScheduleWrapper, SectionTitle } from "./schedule.styled";
import CardSection from "./components/CardSection/CardSection";
import CalendarSection from "./components/CalendarSection/CalendarSection";

const Schedule: Component = () => {
  return (
    <ScheduleWrapper>
      <SectionTitle>直近1ヶ月のもくもく会</SectionTitle>
      <CardSection />

      <SectionTitle>3ヶ月後までのスケジュール</SectionTitle>
      <CalendarSection />
    </ScheduleWrapper>
  );
};

export default Schedule;
