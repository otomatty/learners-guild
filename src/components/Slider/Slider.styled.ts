import { styled } from "solid-styled-components";

export const SliderContainer = styled("div")`
  width: 100%;
  padding: 10px 0;
`;

export const SliderTrack = styled("div")`
  width: 100%;
  height: 4px;
  background-color: #e0e0e0;
  border-radius: 2px;
  position: relative;
`;

export const SliderThumb = styled("div")<{ position: number }>`
  width: 20px;
  height: 20px;
  background-color: #007bff;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: ${(props) => props.position}%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0 0 0 8px rgba(0, 123, 255, 0.1);
  }

  &:active {
    box-shadow: 0 0 0 12px rgba(0, 123, 255, 0.2);
  }
`;

export const SliderFill = styled("div")<{ width: number }>`
  height: 100%;
  background-color: #007bff;
  border-radius: 2px;
  width: ${(props) => props.width}%;
`;

export const SliderValue = styled("div")`
  margin-top: 10px;
  font-size: 14px;
  color: #333;
  text-align: center;
`;
