import { Component, createSignal } from "solid-js";
import {
  LearningThemesWrapper,
  ThemesGrid,
  ThemeCard,
  LoadMoreButton,
} from "./LearningThemes.styled";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { themeData } from "../../../../data/themeData";

const LearningThemes: Component = () => {
  const [visibleCount, setVisibleCount] = createSignal(6); // 初期表示数を6に設定

  const themes = themeData.flatMap((category) => category.themes);

  const loadMoreThemes = () => {
    setVisibleCount(visibleCount() + 6); // クリック時に6つずつ追加表示
  };

  return (
    <LearningThemesWrapper>
      <SectionTitle title="取り組むテーマは無限、あなたは何をしますか？" />
      <ThemesGrid>
        {themes.slice(0, visibleCount()).map((theme) => (
          <ThemeCard>
            <span>{theme.emoji}</span>
            <p>{theme.title}</p>
          </ThemeCard>
        ))}
      </ThemesGrid>
      {visibleCount() < themes.length && (
        <LoadMoreButton onClick={loadMoreThemes}>もっと見る</LoadMoreButton>
      )}
    </LearningThemesWrapper>
  );
};

export default LearningThemes;
