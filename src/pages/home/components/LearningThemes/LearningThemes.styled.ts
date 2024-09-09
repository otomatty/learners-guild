import { styled } from "solid-styled-components";

export const LearningThemesWrapper = styled("section")`
  padding: 2rem;
  border-radius: 0.5rem;
  margin-bottom: 2rem;

  h3 {
    margin-bottom: 16px;
    color: #333;
  }
`;

export const ThemesGrid = styled("div")`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(5, 1fr); /* PC: 5カラム */
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    grid-template-columns: repeat(3, 1fr); /* タブレット: 3カラム */
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr); /* スマホ: 2カラム */
  }
`;

export const ThemeCard = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 16px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #333;
  aspect-ratio: 1 / 1; /* 正方形にするための設定 */

  span {
    display: block;
    font-size: 2rem;
    margin-bottom: 8px;
  }

  p {
    margin: 0;
  }
`;

export const LoadMoreButton = styled("button")`
  display: block;
  margin: 2rem auto 0;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
