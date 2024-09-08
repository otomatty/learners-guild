import { styled } from 'solid-styled-components';

export const CardSectionWrapper = styled('div')`
  margin-bottom: 2rem;

  .splide__arrow {
    background: #007bff;
    opacity: 1;

    &:hover {
      background: #0056b3;
    }

    svg {
      fill: #fff;
    }
  }
`;

export const SliderList = styled('ul')``;

export const EventCard = styled('li')`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const EventImage = styled('img')`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

export const EventTitle = styled('h3')`
  margin: 0;
  font-size: 1.2rem;
  color: #007bff;
`;

export const EventDate = styled('p')`
  margin: 0;
  font-size: 1rem;
  color: #333;
`;

export const EventTime = styled('p')`
  margin: 0;
  font-size: 1rem;
  color: #333;
`;

export const EventLocation = styled('p')`
  margin: 0;
  font-size: 1rem;
  color: #333;
`;
