import { styled } from "solid-styled-components";

export const RecommendedForWrapper = styled("section")`
  padding: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;

  ul {
    width: calc(50% - 1rem);
    list-style-type: none;
    padding: 1rem;
    box-sizing: border-box;
    background-color: #ffffff; /* 背景色を白に設定 */
    border-radius: 0.5rem; /* 角を丸くする */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 影を追加 */

    li {
      font-size: 1.2rem;
      font-weight: bold;
      margin-bottom: 8px;
      display: flex;
      align-items: center;

      &::before {
        content: "✅"; /* 白抜きのチェックボックス */
        margin-right: 8px;
        color: #4caf50; /* アイコンの色 */
        font-family: "Noto Color Emoji", sans-serif; /* フォントの適用 */
      }
    }
  }
`;
