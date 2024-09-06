import { Component } from 'solid-js';
import { OverviewWrapper } from './Overview.styled';

const Overview: Component = () => {
  return (
    <OverviewWrapper>
      <h2>もくもく会の概要</h2>
      <p>
        もくもく会は、参加者が各自の課題に取り組む自習形式の勉強会です。
        プログラミング、デザイン、生成AI、資格勉強など、様々な分野の学習に取り組めます。
      </p>

      <h3>開催日時</h3>
      <ul>
        <li>毎週火曜日 18:00 ~ 21:00</li>
        <li>毎週土曜日 14:00 ~ 17:00</li>
      </ul>

      <h3>もくもく会の特長</h3>
      <ul>
        <li>アウトプットできる環境</li>
        <li>自分の世界が広がる</li>
        <li>初心者から上級者まで歓迎</li>
        <li>オンラインからも参加可能</li>
        <li>メンターがいる</li>
        <li>参加費無料</li>
      </ul>

      <h3>学習テーマ例</h3>
      <ul>
        <li>プログラミング</li>
        <li>デザイン</li>
        <li>生成AI</li>
        <li>資格勉強</li>
        <li>その他、自分が取り組みたいテーマ</li>
      </ul>

      <h3>こんな方におすすめです</h3>
      <ul>
        <li>新しいスキルを身につけたい方</li>
        <li>集中して作業に取り組みたい方</li>
        <li>同じ志を持つ仲間と交流したい方</li>
        <li>自己学習のモチベーションを高めたい方</li>
        <li>プロジェクトや課題を進めたい方</li>
      </ul>
    </OverviewWrapper>
  );
};

export default Overview;
