import {
  Component,
  createResource,
  createSignal,
  onCleanup,
  onMount,
} from "solid-js";
import {
  CardSectionWrapper,
  SliderContainer,
  EventCard,
  EventImage,
  EventTitle,
  EventDate,
  EventTime,
  EventLocation,
  CarouselControls,
  ControlButton,
  Pagination,
  PaginationDot,
} from "./CardSection.styled";
import {
  fetchUpcomingEvents,
  CalendarEvent,
  getLocationImage,
  getLocationName,
  formatTimeRange,
} from "../../../../utils/googleCalendar";

const CardSection: Component = () => {
  const [events] = createResource(fetchUpcomingEvents);
  const [currentIndex, setCurrentIndex] = createSignal(0);
  let startX: number;
  let currentTranslate = 0;
  let prevTranslate = 0;
  let animationID: number;
  let sliderRef: HTMLDivElement | null = null;

  const touchStart = (event: TouchEvent | MouseEvent) => {
    startX =
      event instanceof TouchEvent ? event.touches[0].clientX : event.clientX;
    animationID = requestAnimationFrame(animation);
    if (sliderRef) {
      sliderRef.style.cursor = "grabbing";
    }
  };

  const touchMove = (event: TouchEvent | MouseEvent) => {
    const currentX =
      event instanceof TouchEvent ? event.touches[0].clientX : event.clientX;
    const diff = currentX - startX;
    currentTranslate = prevTranslate + diff;
    if (sliderRef) {
      sliderRef.style.transform = `translateX(${currentTranslate}px)`;
    }
  };

  const touchEnd = () => {
    cancelAnimationFrame(animationID);
    const movedBy = currentTranslate - prevTranslate;

    if (movedBy < -100) {
      setCurrentIndex((currentIndex() + 1) % events()!.length);
    }

    if (movedBy > 100) {
      setCurrentIndex(
        (currentIndex() - 1 + events()!.length) % events()!.length
      );
    }

    setPositionByIndex();
    if (sliderRef) {
      sliderRef.style.cursor = "grab";
    }
  };

  const setPositionByIndex = () => {
    if (sliderRef) {
      currentTranslate = (currentIndex() * -sliderRef.clientWidth) / 4; // 4つのカードが表示されるように調整
      prevTranslate = currentTranslate;
      sliderRef.style.transform = `translateX(${currentTranslate}px)`;
    }
  };

  const animation = () => {
    if (sliderRef) {
      sliderRef.style.transform = `translateX(${currentTranslate}px)`;
    }
    if (animationID) requestAnimationFrame(animation);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex() - 1 + events()!.length) % events()!.length);
    setPositionByIndex();
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex() + 1) % events()!.length);
    setPositionByIndex();
  };

  onCleanup(() => {
    cancelAnimationFrame(animationID);
  });

  onMount(() => {
    setPositionByIndex();
  });

  return (
    <CardSectionWrapper>
      {events() ? (
        <>
          <SliderContainer
            ref={(el) => (sliderRef = el)}
            onTouchStart={touchStart}
            onTouchMove={touchMove}
            onTouchEnd={touchEnd}
            onMouseDown={(e) => {
              touchStart(e);
              window.addEventListener("mousemove", touchMove);
              window.addEventListener("mouseup", () => {
                touchEnd();
                window.removeEventListener("mousemove", touchMove);
              });
            }}
            style={{ transform: `translateX(${currentTranslate}px)` }}
          >
            {events()!.map((event: CalendarEvent) => (
              <EventCard>
                <EventImage
                  src={getLocationImage(event.location || "")}
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
                  {getLocationName(event.location || "")}
                </EventLocation>
              </EventCard>
            ))}
          </SliderContainer>
          <CarouselControls>
            <ControlButton onClick={handlePrev}>&lt;</ControlButton>
            <ControlButton onClick={handleNext}>&gt;</ControlButton>
          </CarouselControls>
          <Pagination>
            {Array.from({ length: Math.ceil(events()!.length / 4) }).map(
              (_, index: number) => (
                <PaginationDot
                  class={
                    index === Math.floor(currentIndex() / 4) ? "active" : ""
                  }
                />
              )
            )}
          </Pagination>
        </>
      ) : (
        <p>直近1ヶ月のイベントはありません。</p>
      )}
    </CardSectionWrapper>
  );
};

export default CardSection;
