import { styled } from "solid-styled-components";

export const EventTimeWrapper = styled("section")`
  width: calc(50% - 1rem);
`;

export const EventList = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const EventCard = styled("div")`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const EventTitleStyled = styled("h3")`
  margin: 0;
  font-size: 1.2rem;
  color: #007bff;
`;

export const EventTimeStyled = styled("p")`
  margin: 0;
  font-size: 1rem;
  color: #333;
`;
