import { styled } from "solid-styled-components";

export const ScheduleWrapper = styled("section")`
  width: calc(40% - 1rem);
  margin: 0;

  p {
    color: #555;
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  .event-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
  }

  a {
    color: #0066cc;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const EventCard = styled("div")`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  height: 100%;

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }

  h3 {
    color: #444;
    font-size: 1.2rem;
    margin: 0.5rem 1rem;
  }

  p {
    color: #666;
    margin: 0.5rem 1rem;
  }
`;
