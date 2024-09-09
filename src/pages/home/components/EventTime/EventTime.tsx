import { Component, onMount } from "solid-js";
import {
  EventTimeWrapper,
  EventList,
  EventTitleStyled,
  EventTimeStyled,
  DayWrapper,
  DayStyled,
  HighlightedDayStyled,
} from "./EventTime.styled";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";

const daysOfWeek = ["日", "月", "火", "水", "木", "金", "土"];

const eventDays: { [key: string]: string } = {
  火: "18:00 | 21:00",
  土: "14:00 | 17:00",
};

const EventTime: Component = () => {
  onMount(() => {
    const sectionTitle = document.querySelector("h2");
    if (sectionTitle) {
      document.documentElement.style.setProperty(
        "--section-title-height",
        `${sectionTitle.offsetHeight}px`
      );
    }
  });
  return (
    <EventTimeWrapper>
      <SectionTitle title="毎週開催しています" />
      <EventList>
        <p>火曜日と土曜日の週2回開催</p>
        <div>
          {daysOfWeek.map((day) => (
            <DayWrapper>
              {eventDays[day] ? (
                <HighlightedDayStyled>
                  <EventTitleStyled>{day}</EventTitleStyled>
                  <EventTimeStyled>{eventDays[day]}</EventTimeStyled>
                </HighlightedDayStyled>
              ) : (
                <DayStyled>{day}</DayStyled>
              )}
            </DayWrapper>
          ))}
        </div>
      </EventList>
    </EventTimeWrapper>
  );
};

export default EventTime;
