import { styled } from "solid-styled-components";

export const HomePageWrapper = styled("div")`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;

  h1 {
    color: #333;
    font-size: 2.5rem;
    text-align: center;
  }

  > p {
    color: #666;
    text-align: center;
    margin-bottom: 2rem;
  }
`;

export const EventSectionWrapper = styled("div")`
  padding: 2rem;
  border-radius: 8px;
  > div {
    display: flex;
    justify-content: space-between;
    gap: 16px;
  }
`;
