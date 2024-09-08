import { Component, createResource, onMount } from 'solid-js';
import {
  CardSectionWrapper,
  SliderTrack,
  SliderList,
  EventCard,
  EventImage,
  EventTitle,
  EventDate,
  EventTime,
  EventLocation,
  SliderControl,
} from './CardSection.styled';
import {
  fetchUpcomingEvents,
  CalendarEvent,
  getLocationImage,
  getLocationName,
  formatTimeRange,
} from '../../../../utils/googleCalendar';

const CardSection: Component = () => {
  const [events] = createResource(fetchUpcomingEvents);
  let sliderRef: HTMLDivElement | undefined;

  onMount(() => {
    console.log('Upcoming events:', events());
    if (sliderRef) {
      initializeSlider(sliderRef);
    }
  });

  const initializeSlider = (sliderElement: HTMLDivElement) => {
    // ここにスライダーの初期化ロジックを実装します
    // 例: 左右の矢印ボタンのイベントリスナーを設定するなど
  };

  return (
    <CardSectionWrapper>
      {events() ? (
        <section
          class="slider"
          aria-labelledby="carousel-heading"
          ref={sliderRef}
        >
          <SliderTrack class="splide__track">
            <SliderList class="splide__list">
              {events()!.map((event: CalendarEvent) => (
                <EventCard class="splide__slide">
                  <EventImage
                    src={getLocationImage(event.location || '')}
                    alt={event.summary}
                  />
                  <EventTitle>{event.summary}</EventTitle>
                  <EventDate>
                    {new Date(event.start.dateTime).toLocaleDateString()}
                  </EventDate>
                  <EventTime>
                    {formatTimeRange(event.start.dateTime, event.end.dateTime)}
                  </EventTime>
                  <EventLocation>
                    {getLocationName(event.location || '')}
                  </EventLocation>
                </EventCard>
              ))}
            </SliderList>
          </SliderTrack>
          <SliderControl class="slider__control slider__control--prev">
            前へ
          </SliderControl>
          <SliderControl class="slider__control slider__control--next">
            次へ
          </SliderControl>
        </section>
      ) : (
        <p>直近1ヶ月のイベントはありません。</p>
      )}
    </CardSectionWrapper>
  );
};

export default CardSection;
