import { styled } from "solid-styled-components";

export const CardSectionWrapper = styled("div")`
  position: relative;
  margin-bottom: 2rem;
  overflow: hidden; /* スライダーのオーバーフローを隠す */
`;

export const SliderContainer = styled("div")`
  display: flex;
  transition: transform 0.3s ease-in-out; /* スライダーのアニメーション */
  cursor: grab; /* ドラッグ可能なカーソル */
`;

export const EventCard = styled("div")`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  min-width: 25%; /* カードの幅を25%に設定 */
  margin-right: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const EventImage = styled("img")`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

export const EventTitle = styled("h3")`
  margin: 0;
  font-size: 1.2rem;
  color: #007bff;
`;

export const EventDate = styled("p")`
  margin: 0;
  font-size: 1rem;
  color: #333;
`;

export const EventTime = styled("p")`
  margin: 0;
  font-size: 1rem;
  color: #333;
`;

export const EventLocation = styled("p")`
  margin: 0;
  font-size: 1rem;
  color: #333;
`;

export const CarouselControls = styled("div")`
  position: absolute;
  bottom: 10px;
  left: 10px;
  display: flex;
  gap: 0.5rem;
`;

export const ControlButton = styled("button")`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const Pagination = styled("div")`
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
  gap: 0.5rem;
`;

export const PaginationDot = styled("div")`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #007bff;
  opacity: 0.5;
  &.active {
    opacity: 1;
  }
`;
