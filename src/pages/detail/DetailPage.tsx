import { Component } from 'solid-js';
import { useParams } from '@solidjs/router';
import { DetailPageWrapper } from './DetailPage.styled';

const DetailPage: Component = () => {
  const params = useParams();

  return (
    <DetailPageWrapper>
      <h1>詳細ページ: {params.section}</h1>
      {params.section === 'faq' && (
        <section>
          <h2>よくある質問</h2>
          <ul>
            <li>Q: もくもく会とは何ですか？</li>
            <li>A: 各自が自分の課題に取り組む自習形式の勉強会です。</li>
            {/* 他のFAQ項目を追加 */}
          </ul>
        </section>
      )}
      {params.section === 'schedule' && (
        <section>
          <h2>スケジュール</h2>
          <p>毎週水曜日 19:00-21:00 オンライン開催</p>
          {/* カレンダーコンポーネントを追加することもできます */}
        </section>
      )}
      {/* 他のセクションに応じたコンテンツを追加 */}
    </DetailPageWrapper>
  );
};

export default DetailPage;
