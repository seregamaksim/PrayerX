import React from 'react';
import styled from 'styled-components/native';

interface ISubscribedTabItemProps {
  color: string;
  prayerLength: number;
}

export default function SubscribedTabItem({
  color,
  prayerLength,
}: ISubscribedTabItemProps) {
  return (
    <TabWrapper>
      <TabText color={color}>Subscribed</TabText>
      <TabCircleWrap>
        <TabCircleText>{prayerLength}</TabCircleText>
      </TabCircleWrap>
    </TabWrapper>
  );
}

const TabWrapper = styled.View`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  position: relative;
  border-radius: 50px;
`;
const TabText = styled.Text<{ color: string }>`
  color: ${props => props.color};
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
`;
const TabCircleWrap = styled.View`
  margin-left: 4px;
  background-color: #ac5253;
  width: 16px;
  height: 16px;
  border-radius: 50px;
`;
const TabCircleText = styled.Text`
  font-size: 9px;
  line-height: 16px;
  text-align: center;
  color: #fff;
`;
