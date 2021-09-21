import React, { ReactElement } from 'react';
import styled, { DefaultTheme } from 'styled-components/native';

interface IMainHeaderProps {
  leftBtn?: ReactElement;
  rightBtn?: ReactElement;
  title?: string;
  style?: DefaultTheme;
}

export default function MainHeader({
  leftBtn,
  rightBtn,
  title,
  style,
}: IMainHeaderProps) {
  return (
    <Header style={style}>
      {leftBtn ? leftBtn : null}
      {title ? <HeaderTitle>{title}</HeaderTitle> : null}
      {rightBtn ? rightBtn : null}
    </Header>
  );
}

const Header = styled.View`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-bottom-width: 1px;
  border-bottom-color: #e5e5e5;
  padding: 22px 15px;
`;
const HeaderTitle = styled.Text`
  font-size: 17px;
  line-height: 20px;
  color: #514d47;
  font-weight: 600;
  text-align: center;
  margin: 0 auto;
`;
