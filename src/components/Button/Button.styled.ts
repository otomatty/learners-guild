import { styled } from "solid-styled-components";

export const StyledButton = styled("button")`
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  font-weight: 600;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  outline: none;
  border: none;
  position: relative;
  top: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    opacity: 0.9;
    top: -2px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  &:active {
    top: 1px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  }

  &:focus {
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
  }

  &.primary {
    background-color: #3b82f6;
    color: white;
  }

  &.secondary {
    background-color: #e5e7eb;
    color: #1f2937;
  }

  &.icon {
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &.disabled {
    opacity: 0.5;
    cursor: not-allowed;
    &:hover,
    &:active {
      top: 0;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  }
`;
