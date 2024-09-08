import { styled } from "solid-styled-components";

export const FlowWrapper = styled("section")`
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
`;

export const FlowList = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FlowCard = styled("div")`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;
`;

export const CardTitle = styled("h3")`
  margin: 0;
  font-size: 1.2rem;
  color: #007bff;
`;

export const CardContent = styled("p")`
  margin: 0;
  font-size: 1rem;
  color: #333;
`;

export const CardNumber = styled("div")`
  position: absolute;
  top: -10px;
  left: -10px;
  background-color: #007bff;
  color: #fff;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: bold;
`;
