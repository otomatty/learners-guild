import { styled } from "solid-styled-components";

export const FeaturesWrapper = styled("section")`
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  margin-bottom: 1rem;

  h3 {
    margin-bottom: 1rem;
    color: #333;
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;

    @media (min-width: 1024px) {
      grid-template-columns: repeat(3, 1fr); /* PC: 3カラム */
    }

    @media (min-width: 768px) and (max-width: 1023px) {
      grid-template-columns: repeat(2, 1fr); /* タブレット: 2カラム */
    }

    @media (max-width: 767px) {
      grid-template-columns: 1fr; /* スマホ: 1カラム */
    }
  }
`;

export const FeatureCard = styled("div")`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h3 {
    margin-bottom: 8px;
    color: #333;
    font-size: 1.4rem;
    font-weight: 700;
  }

  p {
    color: #555;
  }
`;

export const IconWrapper = styled("div")`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;
