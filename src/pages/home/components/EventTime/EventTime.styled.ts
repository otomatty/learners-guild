import { styled } from "solid-styled-components";

export const EventTimeWrapper = styled("section")`
  width: calc(60% - 1rem);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SectionTitle = styled("h2")`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const EventList = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: calc(100% - var(--section-title-height));

  > div {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    font-size: 1.6rem;
  }
`;

export const DayWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  width: 100%;
`;

export const DayStyled = styled("div")`
  padding: 2rem 1rem;
  box-sizing: border-box;
  height: 80%;
  width: 100%;
  background-color: #f0f0f0;
  border-radius: 8px;
  text-align: center;
  align-content: center;
`;

export const HighlightedDayStyled = styled("div")`
  padding: 2rem 1rem;
  box-sizing: border-box;
  background-color: #007bff;
  color: #fff;
  border-radius: 8px;
  height: 100%;
  width: 100%;
  text-align: center;
`;

export const EventTitleStyled = styled("h3")`
  margin: 0;
  font-size: 1.8rem;
`;

export const EventTimeStyled = styled("p")`
  margin: 0;
  font-size: 1rem;
  text-align: center;
`;
