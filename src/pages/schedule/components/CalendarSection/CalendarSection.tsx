import { Component } from "solid-js";
import { CalendarSectionWrapper } from "./CalendarSection.styled";

const CalendarSection: Component = () => {
  return (
    <CalendarSectionWrapper>
      {/* カレンダーコンポーネントをここに追加 */}
      <p>カレンダーがここに表示されます。</p>
    </CalendarSectionWrapper>
  );
};

export default CalendarSection;
