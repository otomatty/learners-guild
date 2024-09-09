import { Component } from "solid-js";
import { EventReportWrapper } from "./EventReport.styled";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { eventReports } from "../../../../data/eventReportData";

const EventReport: Component = () => {
  return (
    <EventReportWrapper>
      <SectionTitle title="これまでの活動を見てみましょう" />
      <div class="report-list">
        {eventReports.map((report) => (
          <div class="report-item">
            <h3>{report.title}</h3>
            <p>{report.content}</p>
            <a href={`/reports/${report.id}`}>詳細を見る</a>
          </div>
        ))}
      </div>
      <p>
        過去のイベントレポートは<a href="/reports">こちら</a>
        からご覧いただけます。
      </p>
    </EventReportWrapper>
  );
};

export default EventReport;
