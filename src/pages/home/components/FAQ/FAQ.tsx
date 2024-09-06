import { Component } from 'solid-js';
import { FAQWrapper } from './FAQ.styled';

const FAQ: Component = () => {
  return (
    <FAQWrapper>
      <h2>よくある質問</h2>
      <dl>
        <dt>Q: もくもく会とは何ですか？</dt>
        <dd>
          A: もくもく会は、参加者が各自の課題に取り組む自習形式の勉強会です。
        </dd>

        <dt>Q: 参加費はかかりますか？</dt>
        <dd>A: 参加費は無料です。</dd>

        <dt>Q: 初心者でも参加できますか？</dt>
        <dd>
          A:
          はい、初心者の方も大歓迎です。自分のペースで学習を進めることができます。
        </dd>
      </dl>
      <p>
        その他の質問は<a href="/faq">FAQページ</a>をご確認ください。
      </p>
    </FAQWrapper>
  );
};

export default FAQ;
