import { Component } from 'solid-js';
import { SignupPageWrapper } from './SignupPage.styled';

const SignupPage: Component = () => {
  return (
    <SignupPageWrapper>
      <h1>参加申し込み</h1>
      <form>
        <label for="name">お名前：</label>
        <input type="text" id="name" name="name" required />

        <label for="email">メールアドレス：</label>
        <input type="email" id="email" name="email" required />

        <label for="date">参加希望日：</label>
        <input type="date" id="date" name="date" required />

        <button type="submit">申し込む</button>
      </form>
    </SignupPageWrapper>
  );
};

export default SignupPage;
