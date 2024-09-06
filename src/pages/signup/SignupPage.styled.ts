import { styled } from 'solid-styled-components';

export const SignupPageWrapper = styled('div')`
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 4px;

  h1 {
    color: #333;
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  label {
    margin-top: 1rem;
    color: #555;
  }

  input {
    margin-top: 0.5rem;
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 4px;
  }

  button {
    margin-top: 1rem;
    padding: 0.5rem;
    background-color: #0066cc;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #0052a3;
    }
  }
`;
