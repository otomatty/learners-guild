import { createSignal, createEffect } from "solid-js";
import {
  SliderContainer,
  SliderTrack,
  SliderThumb,
  SliderFill,
  SliderValue,
} from "./Slider.styled";

export interface SliderProps {
  min: number;
  max: number;
  step?: number;
  value: number;
  onChange: (value: number) => void;
  showValue?: boolean;
}

const Slider = (props: SliderProps) => {
  const [position, setPosition] = createSignal(0);
  const [isDragging, setIsDragging] = createSignal(false);

  createEffect(() => {
    const newPosition =
      ((props.value - props.min) / (props.max - props.min)) * 100;
    setPosition(newPosition);
  });

  const updateSliderValue = (clientX: number, rect: DOMRect) => {
    const x = clientX - rect.left;
    const newPosition = (x / rect.width) * 100;
    const newValue = Math.round(
      (newPosition / 100) * (props.max - props.min) + props.min
    );
    const steppedValue =
      Math.round(newValue / (props.step || 1)) * (props.step || 1);
    const clampedValue = Math.max(props.min, Math.min(props.max, steppedValue));
    props.onChange(clampedValue);
  };

  const handleMouseDown = (event: MouseEvent) => {
    setIsDragging(true);
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    updateSliderValue(event.clientX, rect);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (isDragging()) {
      const rect = (
        document.querySelector(".slider-track") as HTMLElement
      ).getBoundingClientRect();
      updateSliderValue(event.clientX, rect);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  return (
    <SliderContainer>
      <SliderTrack
        class="slider-track"
        onClick={(event) => {
          const rect = (
            event.currentTarget as HTMLElement
          ).getBoundingClientRect();
          updateSliderValue(event.clientX, rect);
        }}
      >
        <SliderFill width={position()} />
        <SliderThumb position={position()} onMouseDown={handleMouseDown} />
      </SliderTrack>
      {props.showValue && <SliderValue>{props.value}</SliderValue>}
    </SliderContainer>
  );
};

export default Slider;
