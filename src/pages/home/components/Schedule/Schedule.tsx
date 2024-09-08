import { Component, createSignal, createEffect } from "solid-js";
import { ScheduleWrapper, EventCard } from "./Schedule.styled";
import {
  CalendarEvent,
  getLocationImage, // getLocationImageをインポート
  fetchNextEvent, // fetchNextEventをインポート
  getLocationName, // getLocationNameをインポート
  formatTimeRange, // formatTimeRangeをインポート
} from "../../../../utils/googleCalendar";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";

const Schedule: Component = () => {
  const [event, setEvent] = createSignal<CalendarEvent | null>(null);

  createEffect(() => {
    fetchNextEvent().then((fetchedEvent) => {
      setEvent(fetchedEvent);
    });
  });

  return (
    <ScheduleWrapper>
      <SectionTitle title="次回のもくもく会" />
      <div class="event-list">
        {event() ? (
          <EventCard>
            <img
              src={getLocationImage(event()!.location || "")}
              alt={event()!.summary}
            />
            <h3>{event()!.summary}</h3>
            <p>
              開催日: {new Date(event()!.start.dateTime).toLocaleDateString()}
            </p>
            <p>
              時間:{" "}
              {formatTimeRange(event()!.start.dateTime, event()!.end.dateTime)}
            </p>
            <p>
              場所:{" "}
              {event()!.location ? (
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event()!.location || "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {getLocationName(event()!.location || "")}
                </a>
              ) : (
                "未定"
              )}
            </p>
          </EventCard>
        ) : (
          <p>次のイベントはありません。</p>
        )}
      </div>
      <p>
        詳しい開催情報は<a href="/schedule">スケジュールページ</a>
        をご覧ください。
      </p>
    </ScheduleWrapper>
  );
};

export default Schedule;
