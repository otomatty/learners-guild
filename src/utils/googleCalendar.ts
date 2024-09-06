// イベントの型定義
export interface CalendarEvent {
  summary: string;
  start: {
    dateTime: string;
  };
  location?: string;
}

// イベントの種類に応じた画像URLを返す関数
export function getEventImage(summary: string): string {
  if (summary.includes('プログラミング')) {
    return '/images/programming.jpg';
  } else if (summary.includes('デザイン')) {
    return '/images/design.jpg';
  } else if (summary.includes('AI')) {
    return '/images/ai.jpg';
  } else {
    return '/images/default.jpg';
  }
}

// Google Calendar APIからイベントを取得する関数
export async function fetchEvents(): Promise<CalendarEvent[]> {
  const API_KEY = import.meta.env.VITE_GOOGLE_CALENDAR_API_KEY;
  const CALENDAR_ID = import.meta.env.VITE_GOOGLE_CALENDAR_ID;

  if (!API_KEY || !CALENDAR_ID) {
    console.error('Google Calendar API key or Calendar ID is not set');
    return [];
  }

  const url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`;

  console.log('Fetching events from URL:', url); // URLをコンソールに表示

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.items as CalendarEvent[];
  } catch (error) {
    console.error('Error fetching events:', error);
    return [];
  }
}
