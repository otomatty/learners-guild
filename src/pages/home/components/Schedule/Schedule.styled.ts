import { styled } from 'solid-styled-components';

export const ScheduleWrapper = styled('section')`
  margin-top: 2rem;

  h2 {
    color: #333;
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }

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

export const EventCard = styled('div')`
  background-color: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;

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
