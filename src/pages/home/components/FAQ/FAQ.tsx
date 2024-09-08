import { Component } from "solid-js";
import { FAQWrapper, FAQInner } from "./FAQ.styled";
import Accordion, {
  AccordionItemProps,
} from "../../../../components/Accordion/Accordion";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";

const FAQ: Component = () => {
  const faqItems: AccordionItemProps[] = [
    {
      title: "もくもく会とは何ですか？",
      content:
        "もくもく会は、参加者が各自の課題に取り組む自習形式の勉強会です。",
    },
    {
      title: "参加費はかかりますか？",
      content: "参加費は無料です。",
    },
    {
      title: "初心者でも参加できますか？",
      content:
        "はい、初心者の方も大歓迎です。自分のペースで学習を進めることができます。",
    },
    {
      title: "オンラインで参加できますか？",
      content: "はい、オンラインでも参加可能です。場所を問わず参加できます。",
    },
    {
      title: "どのようなテーマで学習できますか？",
      content:
        "プログラミング、デザイン、生成AI、資格勉強など、様々なテーマで学習できます。",
    },
  ];

  return (
    <FAQWrapper>
      <SectionTitle title="よくある質問" />
      <FAQInner>
        <Accordion items={faqItems} allowMultiple={true} />
        <p>
          その他の質問は<a href="/faq">FAQページ</a>をご確認ください。
        </p>
      </FAQInner>
    </FAQWrapper>
  );
};

export default FAQ;
