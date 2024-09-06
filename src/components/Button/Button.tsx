import { JSX } from "solid-js";
import { StyledButton } from "./Button.styled";

interface ButtonProps {
  onClick: () => void;
  children: JSX.Element;
  className?: string;
  variant?: "primary" | "secondary" | "icon";
  disabled?: boolean;
}

const Button = ({
  onClick,
  children,
  className = "",
  variant = "primary",
  disabled = false,
}: ButtonProps) => {
  return (
    <StyledButton
      class={`${variant} ${className} ${disabled ? "disabled" : ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
