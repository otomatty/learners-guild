import { styled } from "solid-styled-components";

export const HomePageWrapper = styled("div")`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;

  h1 {
    color: #333;
    font-size: 2.5rem;
    margin-bottom: 1rem;
    text-align: center;
  }

  > p {
    color: #666;
    text-align: center;
    margin-bottom: 2rem;
  }

  section {
    margin-bottom: 2rem;
  }
`;

export const EventSectionWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 2rem;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;

  > div {
    flex: 1;
  }
`;
