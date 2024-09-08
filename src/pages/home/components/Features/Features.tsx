import { Component } from "solid-js";
import { FeaturesWrapper, FeatureCard, IconWrapper } from "./Features.styled";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";

const Features: Component = () => {
  const features = [
    {
      title: "アウトプットできる環境",
      description:
        "自分の学んだことをすぐに実践し、アウトプットすることができます。",
      icon: "💡",
    },

    {
      title: "初心者から上級者まで歓迎",
      description: "初心者から上級者まで、どんなレベルの方でも歓迎します。",
      icon: "👨‍🎓",
    },
    {
      title: "年齢制限なし",
      description: "学生も社会人も意欲がある方はどなたでも参加できます。",
      icon: "🌍",
    },
    {
      title: "オンラインからも参加可能",
      description: "オンラインでも参加できるので、場所を問わず参加できます。",
      icon: "💻",
    },
    {
      title: "メンターがいる",
      description: "困ったときにはメンターがサポートしてくれます。",
      icon: "👨‍🏫",
    },
    {
      title: "参加費無料",
      description: "参加費は無料なので、気軽に参加できます。",
      icon: "💰",
    },
  ];

  return (
    <FeaturesWrapper>
      <SectionTitle title="自分の可能性を広げるチャンスです" />
      <div class="features-grid">
        {features.map((feature) => (
          <FeatureCard>
            <IconWrapper>{feature.icon}</IconWrapper>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </FeatureCard>
        ))}
      </div>
    </FeaturesWrapper>
  );
};

export default Features;
