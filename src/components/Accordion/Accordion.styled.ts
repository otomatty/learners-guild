import { styled } from "solid-styled-components";

export const AccordionContainer = styled("div")`
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
`;

export const AccordionItem = styled("div")`
  border-bottom: 1px solid #e0e0e0;

  &:last-child {
    border-bottom: none;
  }
`;

export const AccordionHeader = styled("button")`
  width: 100%;
  padding: 15px;
  background-color: #f5f5f5;
  border: none;
  text-align: left;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;

  &:hover {
    background-color: #e0e0e0;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
`;

export const AccordionContent = styled("div")<{ isOpen: boolean }>`
  padding: ${(props) => (props.isOpen ? "15px" : "0 15px")};
  max-height: ${(props) => (props.isOpen ? "1000px" : "0")};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
`;

export const AccordionIcon = styled("span")<{ isOpen: boolean }>`
  transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "rotate(0)")};
  transition: transform 0.3s ease-in-out;
`;
