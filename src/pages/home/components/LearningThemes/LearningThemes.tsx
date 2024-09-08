import { Component } from "solid-js";
import {
  LearningThemesWrapper,
  ThemesGrid,
  ThemeCard,
} from "./LearningThemes.styled";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";

const LearningThemes: Component = () => {
  const themes = [
    { title: "プログラミング基礎", emoji: "💻" },
    { title: "Webデザイン", emoji: "🎨" },
    { title: "生成AIの活用", emoji: "🤖" },
    { title: "データサイエンス", emoji: "📊" },
    { title: "機械学習", emoji: "🧠" },
    { title: "クラウドコンピューティング", emoji: "☁️" },
    { title: "モバイルアプリ開発", emoji: "📱" },
    { title: "サイバーセキュリティ", emoji: "🔒" },
    { title: "ゲーム開発", emoji: "🎮" },
    { title: "IoT技術", emoji: "🌐" },
  ];

  return (
    <LearningThemesWrapper>
      <SectionTitle title="取り組むテーマは無限、あなたは何をしますか？" />
      <ThemesGrid>
        {themes.map((theme) => (
          <ThemeCard>
            <span>{theme.emoji}</span>
            <p>{theme.title}</p>
          </ThemeCard>
        ))}
      </ThemesGrid>
    </LearningThemesWrapper>
  );
};

export default LearningThemes;
