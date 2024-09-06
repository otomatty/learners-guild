import { Component, createSignal, createEffect } from 'solid-js';
import { ScheduleWrapper, EventCard } from './Schedule.styled';
import {
  CalendarEvent,
  getEventImage,
  fetchEvents,
} from '../../../../utils/googleCalendar';

const Schedule: Component = () => {
  const [events, setEvents] = createSignal<CalendarEvent[]>([]);

  createEffect(() => {
    fetchEvents().then((fetchedEvents) => {
      setEvents(fetchedEvents);
    });
  });

  return (
    <ScheduleWrapper>
      <h2>開催スケジュール</h2>
      <p>もくもく会は毎週火曜日と土曜日に開催されています。</p>
      <div class="event-list">
        {events().map((event) => (
          <EventCard>
            <img src={getEventImage(event.summary)} alt={event.summary} />
            <h3>{event.summary}</h3>
            <p>日時: {new Date(event.start.dateTime).toLocaleString()}</p>
            <p>場所: {event.location || 'オンライン'}</p>
          </EventCard>
        ))}
      </div>
      <p>
        詳細なスケジュールは<a href="/schedule">スケジュールページ</a>
        をご覧ください。
      </p>
    </ScheduleWrapper>
  );
};

export default Schedule;
