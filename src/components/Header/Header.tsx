import { Component } from "solid-js";
import { A, useNavigate } from "@solidjs/router";
import {
  HeaderWrapper,
  HeaderInner,
  Logo,
  Nav,
  ButtonContainer,
} from "./Header.styled";
import Button from "../Button/Button";

const Header: Component = () => {
  const navigate = useNavigate();

  return (
    <HeaderWrapper>
      <HeaderInner>
        <Logo>
          <A href="/">大船渡もくもく会</A>
        </Logo>
        <Nav>
          <A href="/schedule">スケジュール</A>
          <A href="/faq">よくある質問</A>
          <A href="/event-report">イベントレポート</A>
          <ButtonContainer>
            <Button onClick={() => navigate("/contact")} variant="secondary">
              お問い合わせ
            </Button>
            <Button onClick={() => navigate("/signup")}>参加を申し込む</Button>
          </ButtonContainer>
        </Nav>
      </HeaderInner>
    </HeaderWrapper>
  );
};

export default Header;
