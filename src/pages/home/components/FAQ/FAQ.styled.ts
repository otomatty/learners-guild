import { styled } from "solid-styled-components";

export const FAQWrapper = styled("section")`
  margin-top: 2rem;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;

  h2 {
    color: #333;
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }

  dl {
    dt {
      color: #0066cc;
      font-weight: bold;
      margin-top: 1rem;
    }

    dd {
      color: #555;
      margin-left: 0;
      margin-bottom: 1rem;
      padding-left: 1rem;
      border-left: 2px solid #0066cc;
    }
  }

  p {
    margin-top: 1rem;
  }

  a {
    color: #0066cc;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const FAQInner = styled("div")`
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
