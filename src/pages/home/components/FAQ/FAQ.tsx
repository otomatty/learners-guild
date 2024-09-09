import { Component } from "solid-js";
import { FAQWrapper, FAQInner } from "./FAQ.styled";
import Accordion from "../../../../components/Accordion/Accordion";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { faqItems } from "../../../../data/faqData"; // 追加

const FAQ: Component = () => {
  // isFeatured が true の項目だけをフィルタリング
  const featuredItems = faqItems.filter((item) => item.isFeatured);

  return (
    <FAQWrapper>
      <SectionTitle title="気になることはありますか？" />
      <FAQInner>
        <Accordion items={featuredItems} allowMultiple={true} />
        <p>
          その他の質問は<a href="/faq">FAQページ</a>をご確認ください。
        </p>
      </FAQInner>
    </FAQWrapper>
  );
};

export default FAQ;
