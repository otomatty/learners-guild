import { styled } from "solid-styled-components";

export const FlowWrapper = styled("section")`
  padding: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
`;

export const FlowList = styled("ol")`
  width: 40%;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  list-style: none;
`;

export const FlowCard = styled("li")`
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
