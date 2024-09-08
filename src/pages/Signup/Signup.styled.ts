import { styled } from "solid-styled-components";

export const SignupWrapper = styled("section")`
  max-width: 1200px;
  margin: 4rem auto;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
`;

export const SignupInner = styled("div")`
  margin: 0 auto;
  width: auto;
  padding: 2rem;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

export const Form = styled("form")`
  display: flex;
  flex-direction: column;
`;

export const FormGroup = styled("div")`
  margin: 0 auto 15px auto;
`;

export const Label = styled("label")`
  margin-bottom: 5px;
  font-weight: bold;

  .required {
    color: red;
    font-size: 12px;
    margin-left: 5px;
  }

  .optional {
    color: gray;
    font-size: 12px;
    margin-left: 5px;
  }
`;

export const Input = styled("input")`
  padding: 10px;
  box-sizing: border-box;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

export const Button = styled("button")<{
  disabled?: boolean;
  variant?: string;
}>`
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: ${({ disabled, variant }) =>
    disabled ? "#ccc" : variant === "secondary" ? "#6c757d" : "#007bff"};
  border: none;
  border-radius: 4px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ disabled, variant }) =>
      disabled ? "#ccc" : variant === "secondary" ? "#5a6268" : "#0056b3"};
  }

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const StepContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonGroup = styled("div")`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 15px;
`;

export const ProgressBar = styled("div")`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 1rem;
  margin-bottom: 20px;
`;

export const ProgressStep = styled("div")<{
  active: boolean;
  completed: boolean;
}>`
  width: ${({ active }) => (active ? "40px" : "30px")};
  height: ${({ active }) => (active ? "40px" : "30px")};
  border-radius: 50%;
  background-color: ${({ active, completed }) =>
    completed ? "#4caf50" : active ? "#007bff" : "#ccc"};
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  position: relative;
  font-size: ${({ active }) => (active ? "1.5rem" : "1rem")};
  transition: all 0.3s ease;

  &::after {
    content: ${({ completed }) => (completed ? "'✔'" : "''")};

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const Select = styled("select")`
  padding: 10px;
  box-sizing: border-box;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

export const TextArea = styled("textarea")`
  padding: 10px;
  box-sizing: border-box;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

export const CardsContainer = styled("div")`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const Card = styled("div")`
  max-width: 23%;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    max-width: 100%;
  }
`;

export const CardTitle = styled("h3")`
  margin: 0;
  font-size: 1.2rem;
  color: #333;
`;

export const CardDate = styled("p")`
  margin: 8px 0;
  font-size: 1rem;
  color: #666;
`;

export const CardButton = styled("button")`
  padding: 8px 16px;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;
