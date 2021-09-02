import React from 'react';
import styled from 'styled-components/native';

interface ICounterPrayerProps {
  prayerId: number;
}

export default function CounterPrayer(props: ICounterPrayerProps) {
  return (
    <CounterList>
      <CounterItem style={{ borderLeftWidth: 0 }}>
        <CounterItemTitleMini>July 25 2017</CounterItemTitleMini>
        <CounterItemText>Date Added</CounterItemText>
        <CounterItemTextBlue>Opened for 4 days</CounterItemTextBlue>
      </CounterItem>
      <CounterItem>
        <CounterItemTitle>123</CounterItemTitle>
        <CounterItemText>Times Prayed Total</CounterItemText>
      </CounterItem>
      <CounterItem style={{ borderLeftWidth: 0 }}>
        <CounterItemTitle>63</CounterItemTitle>
        <CounterItemText>Times Prayed by Me</CounterItemText>
      </CounterItem>
      <CounterItem>
        <CounterItemTitle>60</CounterItemTitle>
        <CounterItemText>Times Prayed by Others</CounterItemText>
      </CounterItem>
    </CounterList>
  );
}

const CounterList = styled.View`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  border-width: 1px;
  border-color: #e5e5e5;
  border-style: solid;
  border-left-width: 0;
  border-right-width: 0;
  border-bottom-width: 0;
`;

const CounterItem = styled.View`
  width: 50%;
  min-height: 108px;
  padding: 15px;
  padding-top: 26px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-style: solid;
  border-color: #e5e5e5;
`;

const CounterItemTitle = styled.Text`
  font-size: 32px;
  line-height: 37px;

  color: #bfb393;
`;
const CounterItemTitleMini = styled(CounterItemTitle)`
  font-size: 22px;
  line-height: 26px;
  margin-bottom: 6px;
`;

const CounterItemText = styled.Text`
  font-size: 13px;
  line-height: 15px;
  color: #514d47;
`;
const CounterItemTextBlue = styled(CounterItemText)`
  color: #72a8bc;
`;
