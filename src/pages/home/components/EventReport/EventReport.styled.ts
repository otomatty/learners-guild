import { styled } from 'solid-styled-components';

export const EventReportWrapper = styled('section')`
  margin-top: 2rem;

  h2 {
    color: #333;
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }

  .report-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
  }

  .report-item {
    background-color: #f8f8f8;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    h3 {
      color: #444;
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }

    p {
      color: #666;
      margin-bottom: 0.5rem;
    }

    a {
      color: #0066cc;
      text-decoration: none;
      font-weight: bold;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  > p {
    margin-top: 1rem;
  }
`;
