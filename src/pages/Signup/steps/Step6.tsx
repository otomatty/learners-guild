import { createSignal, createEffect, onMount } from "solid-js";
import { FormData } from "../../../types/formTypes";
import {
  FormGroup,
  Label,
  CardsContainer,
  Card,
  CardTitle,
  CardDate,
  CardButton,
} from "../Signup.styled";
import {
  fetchUpcomingEvents,
  CalendarEvent,
  getLocationImage, // 場所に応じた画像取得関数をインポート
  getLocationName, // 場所の名前を抽出する関数をインポート
  formatTimeRange, // 時間範囲をフォーマットする関数をインポート
} from "../../../utils/googleCalendar";

interface StepProps {
  formData: FormData;
  setFormData: (data: FormData) => void;
  setIsStepValid: (isValid: boolean) => void;
}

const Step6 = ({ formData, setFormData, setIsStepValid }: StepProps) => {
  const [date, setDate] = createSignal(formData.date);
  const [events, setEvents] = createSignal<CalendarEvent[]>([]);

  const handleSelectDate = (selectedDate: string) => {
    setDate(selectedDate);
    setFormData({ ...formData, date: selectedDate });
  };

  createEffect(() => {
    setIsStepValid(!!date());
  });

  onMount(async () => {
    const upcomingEvents = await fetchUpcomingEvents();
    setEvents(upcomingEvents || []);
    console.log("Upcoming events:", upcomingEvents); // 取得したデータをコンソールに表示
  });

  return (
    <FormGroup>
      <Label>
        参加希望日 <span class="required">必須</span>
      </Label>
      <CardsContainer>
        {events().map((event) => (
          <Card>
            <img
              src={getLocationImage(event.location || "")}
              alt={event.summary}
            />
            <CardTitle>{event.summary}</CardTitle>
            <CardDate>
              開催日：{new Date(event.start.dateTime).toLocaleDateString()}{" "}
              <br />
              時間：{formatTimeRange(event.start.dateTime, event.end.dateTime)}
            </CardDate>
            <p>
              場所:{" "}
              {event.location ? (
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.location || "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {getLocationName(event.location || "")}
                </a>
              ) : (
                "未定"
              )}
            </p>
            <CardButton onClick={() => handleSelectDate(event.start.dateTime)}>
              この日に参加する
            </CardButton>
          </Card>
        ))}
      </CardsContainer>
    </FormGroup>
  );
};

export default Step6;
