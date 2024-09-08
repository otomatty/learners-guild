import { Component } from "solid-js";
import { EventReportWrapper } from "./EventReport.styled";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";

const EventReport: Component = () => {
  return (
    <EventReportWrapper>
      <SectionTitle title="今までのもくもく会" />
      <div class="report-list">
        <div class="report-item">
          <h3>2024年3月のもくもく会</h3>
          <p>参加者20名で、様々なプロジェクトに取り組みました。</p>
          <a href="/reports/2024-03">詳細を見る</a>
        </div>
        <div class="report-item">
          <h3>2024年2月のもくもく会</h3>
          <p>新しい技術の学習に焦点を当てた回でした。</p>
          <a href="/reports/2024-02">詳細を見る</a>
        </div>
      </div>
      <p>
        過去のイベントレポートは<a href="/reports">こちら</a>
        からご覧いただけます。
      </p>
    </EventReportWrapper>
  );
};

export default EventReport;
