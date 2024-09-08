import { styled } from "solid-styled-components";

export const HeaderWrapper = styled("header")`
  width: 100%;
  background-color: #f8f9fa;
  padding: 20px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const HeaderInner = styled("div")`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled("h1")`
  font-size: 24px;
  color: #333;
  margin: 0;

  a {
    color: inherit;
    text-decoration: none;
    transition:
      color 0.3s,
      transform 0.3s;

    &:hover {
      color: #007bff;
      transform: scale(1.05);
    }
  }
`;

export const Nav = styled("nav")`
  display: flex;
  align-items: center;

  a {
    color: #333;
    text-decoration: none;
    margin-left: 20px;
    font-size: 16px;
    transition: color 0.3s;

    &:hover {
      color: #007bff;
    }
  }
`;

export const ButtonContainer = styled("div")`
  display: flex;
  gap: 10px;
  margin-left: 20px;
`;
