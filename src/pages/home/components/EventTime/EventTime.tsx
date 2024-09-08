import { Component } from "solid-js";
import {
  EventTimeWrapper,
  EventList,
  EventCard,
  EventTitleStyled,
  EventTimeStyled,
} from "./EventTime.styled";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";

const EventTime: Component = () => {
  return (
    <EventTimeWrapper>
      <SectionTitle title="毎週開催しています" />
      <EventList>
        <EventCard>
          <EventTitleStyled>火曜日</EventTitleStyled>
          <EventTimeStyled>18:00 ~ 21:00</EventTimeStyled>
        </EventCard>
        <EventCard>
          <EventTitleStyled>土曜日</EventTitleStyled>
          <EventTimeStyled>14:00 ~ 17:00</EventTimeStyled>
        </EventCard>
      </EventList>
    </EventTimeWrapper>
  );
};

export default EventTime;
