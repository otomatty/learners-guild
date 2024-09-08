import { Component } from "solid-js";
import { RecommendedForWrapper } from "./RecommendedFor.styled";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";

const RecommendedFor: Component = () => {
  const recommendations = [
    "新しいスキルを身につけたい",
    "自己学習のモチベーションを高めたい",
    "一緒に学べる仲間がほしい",
    "他の人と知識やアイデアを交換したい",
    "様々な世代と交流してみたい",
    "今の自分をもっと成長させたい",
  ];

  return (
    <RecommendedForWrapper>
      <SectionTitle title="こんな方におすすめです" />
      <ul>
        {recommendations.map((recommendation) => (
          <li>{recommendation}</li>
        ))}
      </ul>
    </RecommendedForWrapper>
  );
};

export default RecommendedFor;
