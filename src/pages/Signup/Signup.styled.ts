import { styled } from "solid-styled-components";

export const SignupWrapper = styled("section")`
  max-width: 1000px;
  margin: 2rem auto;
  padding: 2rem;
  box-sizing: border-box;
  border-radius: 8px;
  height: 100%;
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
  margin-bottom: 1.5rem;
`;

export const Label = styled("label")`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
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
`;

export const ProgressBar = styled("div")`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 1rem;
  margin-bottom: 1rem;
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
