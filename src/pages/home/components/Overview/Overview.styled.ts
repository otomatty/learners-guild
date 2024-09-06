import { styled } from 'solid-styled-components';

export const OverviewWrapper = styled('section')`
  background-color: #f8f8f8;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h2 {
    color: #333;
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }

  h3 {
    color: #444;
    font-size: 1.4rem;
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: #555;
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin-bottom: 1rem;

    li {
      color: #666;
      margin-bottom: 0.5rem;
      padding-left: 1.5rem;
      position: relative;

      &:before {
        content: '•';
        color: #0066cc;
        position: absolute;
        left: 0;
      }
    }
  }
`;
